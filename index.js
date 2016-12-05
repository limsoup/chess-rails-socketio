// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// var io = require('socket.io')(3020, '0.0.0.0');

// server.listen(3020, '0.0.0.0');

var io = require('socket.io')(3020);
io.set('origins', 'http://limsoup-chess.herokuapp.com:3020')
var redis = require('socket.io-redis');
io.adapter(redis({ host: process.env.REDIS_URL }));

io.on('connection',function (socket) {
	socket.on("join_room", function (id) {
		socket.join(id);
	});
});


// npm install --save express@4.10.2
// npm install --save socket.io
// npm install --save socket.io-redis