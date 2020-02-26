let socket = io.connect('http://192.168.1.252:3001');

socket.on('msg', gotMsg);

function gotMsg(data) {
    const dashboard = document.getElementById('dashboard');
    let para = document.createElement('p');
    para.innerHTML = data;
    dashboard.insertBefore(para, dashboard.firstChild);
    const name = document.getElementById('name');
    if (!name.classList.contains('ready')) {
		name.classList.add('ready');
    }
}

function sendMsg() {
    const name = document.getElementById('name').value
    const msg = document.getElementById('msg').value
    socket.emit('msg', name + ': ' + msg);
    msg.value = '';
}