const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.font = "100px serif";
canvas.width = innerWidth;
canvas.height = innerHeight;

heroX = canvas.width / 2;
heroY = canvas.height / 2;



let frames = 0;

let requestId = undefined

const arrEnemies = []

let points = 0 ;

const audio = new Audio() // *
audio.src = "./mp3/Komiku_-_70_-_Ending.mp3";
audio.volume = 0.1; 
audio.loop = true
