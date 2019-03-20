const socket = io();

let codeArea = document.getElementById("code");

socket.on('code:changes', function(data){
	codeArea.value = data;
})