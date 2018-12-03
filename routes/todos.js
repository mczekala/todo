const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models/Todo');

router.get('/', (req,res) => {
  Todo.find()
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json({msg: 'No todos found'}));
});
router.post('/',(req,res) => {
  var newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then(todo => res.json(todo));
});
router.delete('/:id',(req,res) => {
  Todo.findOneAndDelete({_id: req.params.id})
    .then(todo => {if(todo){res.json({msg: 'deleted'})}})
    .catch(err => res.status(404).json(err));
});

module.exports = router;