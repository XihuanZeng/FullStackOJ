import docker
import os
import shutil
import uuid

from docker.errors import APIError
from docker.errors import ContainerError
from docker.errors import ImageNotFound

CURRENT_DIR = os.path.dirname(os.path.relpath(__file__))
IMAGE_NAME = 'xihuan/cs503'

client = docker.from_env()

# this is the tmp dir in host to store the code
# we will later mount this to our docker container
TEMP_BUILD_DIR = "%s/tmp/" % CURRENT_DIR
CONTAINER_NAME = "%s:latest" % IMAGE_NAME

SOURCE_FILE_NAMES = {
	"java": "Example.java",
	"python": "example.py"
}

BINARY_NAMES = {
	"java": "Example",
	"python": "example.py"	
}

BUILD_COMMANDS = {
	"java": "javac",
	"python": "python3"	
}

EXECUTE_COMMANDS = {
	"java": "java",
	"python": "python3"	
}


# defensive coding
def load_image():
	try:
        # try getting image from local
		client.images.get(IMAGE_NAME)
		print("Image exists locally")
	except ImageNotFound:
        # this is similar to docker pull
        # it will pull from docker hub
		print("image not found locally, loading from docker hub")
		client.image.pull(IMAGE_NAME)
	except APIError:
		print("Can't connect to docker")
		return

def make_dir(dir):
	try:
		os.mkdir(dir)
	except OSError:
		print("Can't create directory")


def build_and_run(code, lang):
	result = {'build': None, 'run': None, 'error': None}

    # this is just some pseudo random unique name
	source_file_parent_dir_name = uuid.uuid4()

	source_file_host_dir = "%s/%s" % (TEMP_BUILD_DIR, source_file_parent_dir_name)

	source_file_guest_dir = "/test/%s" % (source_file_parent_dir_name)

	make_dir(source_file_host_dir)

    # e.g tmp/whatever_random_name/example.py
	with open("%s/%s" % (source_file_host_dir, SOURCE_FILE_NAMES[lang]), 'w') as source_file:
		source_file.write(code)

	try:
		client.containers.run(
			image = IMAGE_NAME,
			command = "%s %s" % (BUILD_COMMANDS[lang], SOURCE_FILE_NAMES[lang]),
			volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
			working_dir = source_file_guest_dir
		)

		print("source built")
		result['build'] = 'OK'
	except ContainerError as e:
		result['build'] = str(e.stderr, 'utf-8')
		shutil.rmtree(source_file_host_dir)
		return result

	try:
        # bind is to mount dir in host and guest
		log = client.containers.run(
			image = IMAGE_NAME,
			command = "%s %s" % (EXECUTE_COMMANDS[lang], BINARY_NAMES[lang]),
			volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
			working_dir = source_file_guest_dir
		)

		log = str(log, 'utf-8')
		print(log)
		result['run'] = log
	except ContainerError as e:
		result['run'] = str(e.stderr, 'utf-8')
		shutil.rmtree(source_file_host_dir)
		return result

    # finally remove the tmp code dir
	shutil.rmtree(source_file_host_dir)
	return result