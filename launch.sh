#!/bin/bash

if [ $1 == 'start' ]
then
    # start Redis
    service redis_6379 restart
    # ng build --watch
    cd oj-client
    nohup ng build --watch &
    # node
    cd ../oj-server
    nohup npm start &
    # flask
    cd ../executor
    nohup /home/xihuan/anaconda3/bin/python executor_server.py &
elif [ $1 == 'stop' ]
then
    # kill all node related commands
    pkill -f /usr/bin/node
    pkill -f executor_server.py
    # remove all related containers
    docker rm $(docker ps -a | grep cs503 | awk '{print $1}')
    # remove all nohup files
    rm oj-client/nohup.out oj-server/nohup.out executor/nohup.out
else
    echo "arg1 shoule be either start or stop"
fi
