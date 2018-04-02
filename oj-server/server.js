const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const mongoose = require('mongoose');

app.use('/api/v1', restRouter);

// connection string is mongodb://<dbuser>:<dbpassword>@ds151707.mlab.com:51707/xzproblems
mongoose.connect('mongodb://user:user@ds151707.mlab.com:51707/xzproblems');

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// other functions of this app are app.get('/', function(req, res){
//  res.send('hello world');
//  }))