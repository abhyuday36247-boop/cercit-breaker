function sendMessage(){

let input = document.getElementById("messageInput");

let message = input.value;

if(message.trim() === "") return;

let chatBox = document.getElementById("chatBox");

let msg = document.createElement("p");

msg.className = "student-msg";

msg.innerText = message;

chatBox.appendChild(msg);

input.value = "";

chatBox.scrollTop = chatBox.scrollHeight;

}