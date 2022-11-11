function setup(){
    mode = 0;
    createCanvas(600,400);
    textSize(21);
}

function drawPage(){
    clear();
    if(mode ===0){
        text('Press enter to start',innerWidth /2, innerHeight / 2);
    }
}

function keyPressed(){
    if(keyCode === ENTER){
        mode = 1
    }
}