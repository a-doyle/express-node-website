var socket = io();
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');


socket.on('connect', function() {
    var chatForm = document.forms.chatForm;
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();

            socket.emit('postMessage', {
                username: chatUsername.value,
                message: chatMessage.value,
            });

            chatMessage.value='';
            chatMessage.focus();
        }); // chatform event

        socket.on('updateMessages', function(data) {
            showMessage(data);
        }); // updateMessages
    } // chatform
}); // socket

function showMessage(data) {
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');

    if (chatUsername.value == data.username) {
        newMessage.className = 'bg-success chat-text';
    } else {
        newMessage.className = 'bg-info text-warning chat-text';
    }
    
    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;

    // basic DOM management, have to insert as the first in an element
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}