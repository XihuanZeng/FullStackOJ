const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');

var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

//app.get('/', (req, res) => res.send('Hello World!!!'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/v1', restRouter);
app.use((req, res)=>{
	res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
})
// connection string is mongodb://<dbuser>:<dbpassword>@ds151707.mlab.com:51707/xzproblems
mongoose.connect('mongodb://user:user@ds151707.mlab.com:51707/xzproblems');

// app.listen(3000, () => console.log('Example app listening on port 3000!'));

// other functions of this app are app.get('/', function(req, res){
//  res.send('hello world');
//  }))

const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);


function onListening() {
	console.log('Example app listening on port 3000!');
}
  