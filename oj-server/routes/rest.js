const express = require('express');
const router = express.Router();

const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/problems', function(req, res) {
	problemService.getProblems()
		.then(problems => res.json(problems));
});

router.get('/problems/:id', function(req, res) {
	const id = req.params.id;
	problemService.getProblem(+id)
		.then(problem => res.json(problem));
});

router.post('/problems', jsonParser, function(req, res) {
	problemService.addProblem(req.body)
		.then(problem => {
			res.json(problem);
		}, (error) => {
			res.status(400).send('Problem name already exists!');
		});
});

module.exports = router;

const ProblemModel = require('../models/problemModel');

  const getProblems = function() {
    return new Promise((resolve, reject) => {
      ProblemModel.find({}, function(err, problems) {
        if (err) {
          reject(err);
        } else {
          resolve(problems);
        }
      })
    })
  }

  const getProblem = function(id) {
    return new Promise((resolve, reject) => {
      ProblemModel.findOne({id: id}, function(err, problem) {
        if (err) {
          reject(err);
        } else {
          resolve(problem);
        }
      })
    })
  }

  const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
      problemModel.findOne({name: newProblem.name}, function(err, data){
        if (data) {
          reject('Problem name already exists');
        } else {
          problemModel.count({}, function(err, num) {
            newProblem.id = num + 1;
            let mongoProblem = new ProblemModel(newProblem);
            mongoProblem.save();
            resolve(mongoProblem);
          })
        }
      })
    });
  }

  module.exports = {
    getProblems,
    getProblem,
    addProblem
  }