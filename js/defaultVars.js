const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

heroX = canvas.width / 2;
heroY = canvas.height / 2;



let frames = 0;

let requestId = undefined

const arrEnemies = []