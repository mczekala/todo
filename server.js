const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const todos = require('./routes/todos');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = 'mongodb://marcin:marcin123@ds251902.mlab.com:51902/list';

mongoose
  .connect(db,{useNewUrlParser: true})
  .then(()=> console.log('connected'))
  .catch((err)=> console.log(err));

app.use('/todos', todos);

app.listen(5000, ()=> console.log('server runs'));