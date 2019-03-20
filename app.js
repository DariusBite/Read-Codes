'use strict';
var port = process.env.PORT || 3000;
var app = require('express')();
var express = require('express');
var bodyParser = require("body-parser");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var multer = require('multer');
var upload = multer();

server.listen(port);
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(__dirname + '/public'));

io.on('connection', () =>{
    console.log("new connection");
});

// POST method route
app.post('/', upload.fields([]), function (req, res) {
    var data = req.body.code;
    console.log("codigo actualizado");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    io.emit('code:changes', data);
    res.end();
});

app.get('/poke', function(req, res) {
  res.sendfile(__dirname + '/public/poke.html');
});