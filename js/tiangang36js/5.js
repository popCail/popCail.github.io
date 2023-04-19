var ballX = 0;
var ballY = 0;
var ballR = 50;
var ballColor = "#f4ce69";
var backgroudColor = "#c2d94d";
var boxWidth = 900;
var boxHeight = 600;

var refreshTime = 15;

var speedX = 5;
var speedY = 10;


function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(1,1,boxWidth -2, boxHeight -2 );

    ctx.beginPath();
    ctx.fillStyle = backgroudColor;
    ctx.fillRect(0,0,boxWidth,boxHeight);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.arc(ballX,ballY,ballR,0,2 * Math.PI,false);
    ctx.fill();




}

function drawBox() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, boxWidth, boxHeight);
    ctx.stroke();
}

function move(){
    if(ballX + speedX>= boxWidth - ballR){
       let moveLength = ballX + speedX - (boxWidth - ballR);
       ballX = boxWidth - ballR - moveLength;
        speedX = -speedX;
    } else if(ballX  + speedX<= ballR){
        let moveLength = ballR - (ballX + speedX);
        ballX = ballR + moveLength;
        speedX = -speedX;
    }
    else {
        ballX = ballX + speedX;
    }

    if(ballY + speedY>= boxHeight - ballR){
        let moveLength = ballY + speedY - (boxHeight - ballR);
        ballY = boxHeight - ballR - moveLength;

        speedY = -speedY;
    } else if(ballY  + speedY <= ballR){
        let moveLength = ballR - (ballY + speedY);
        ballY = ballR + moveLength;

        speedY = -speedY;
    } else {
        ballY = ballY + speedY;
    }

    draw();
}


function run() {
    init();

    setInterval(move,refreshTime);

}

function init(){
    ballX = Math.random() * boxWidth;
    ballY = Math.random() * boxHeight;
    drawBox();
}
run();