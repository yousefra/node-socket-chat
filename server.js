const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3001);

app.use(express.static('public'));

console.log('My socket server is running');

const io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket) {
    console.log('New connection: ' + socket.id);

    socket.on('msg', gotMsg);

    function gotMsg(data) {
        io.sockets.emit('msg', data);
        console.log(data);
    }
}