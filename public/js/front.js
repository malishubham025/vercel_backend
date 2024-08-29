// alert("hi");
const socket = io(); 
let input=document.querySelector(".input");
function handleJoin(){
    socket.emit("join-room",input,socket.id);
}
function handleStart(){
    socket.emit("start",input);
}