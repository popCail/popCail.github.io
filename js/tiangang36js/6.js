// 十个像素一米
var PixelAndM = 10;
var boxWidth = 900;//90m
var boxHeight = 600;//60m

var realWidth = boxWidth / PixelAndM;
var realHeight = boxHeight / PixelAndM;

var ballR = 5;
var ballX = ballR;
var ballY = ballR;
var ballXVector = 30;
var ballYVector = 0;

var refreshTime = 10;//milli seconds
var refreshSecond = refreshTime / 1000;
var G = 10;//10m/s^2

var total = 0;
function drawBall() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(1, 1, boxWidth - 2, boxHeight - 2);
    ctx.arc(ballX * PixelAndM, ballY * PixelAndM, ballR * PixelAndM, 0, 2 * Math.PI, false);
    ctx.fill();
    document.getElementById("text").innerHTML = "X = " +  Math.floor(ballX) + " Y = " + Math.floor(ballY);
}

function drawBox() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, boxWidth, boxHeight);
    ctx.stroke();


}

function moveX() {

    let tmp = ballX + ballXVector * refreshSecond;
    if(tmp > realWidth - ballR){
        if(ballXVector != 0){
            let tt = (realWidth - ballR - ballX)/ballXVector;
            ballXVector -= 10;
            if(ballXVector < 0){
                ballXVector = 0;
            } else {
                ballXVector = - ballXVector;
            }
            ballX = realWidth - ballR + ballXVector * (refreshSecond - tt);

        }

    } else if(tmp < ballR){
        if(ballXVector != 0){

            let tt = (ballX - ballR) / ballXVector;
            ballXVector += 10;
            if(ballXVector > 0){
                ballXVector = 0;
            } else {
                ballXVector = - ballXVector;
            }
            ballX = ballR + ballXVector * (refreshSecond - tt);
        }

    } else {
        ballX = ballX + ballXVector * refreshSecond;
    }

}

function moveY() {
    let tmp =  ballY + ballYVector * refreshSecond + G / 2 * Math.pow(refreshSecond, 2);
    if(tmp > realHeight - ballR){
        let x = realHeight - ballR - ballY;
        let v = Math.pow(ballYVector*ballYVector + 2 * G * x,2);
        let t = x/(v - ballYVector);
        let tt = refreshSecond - t;

        ballYVector -=10;
        if(ballYVector < 0){
            ballYVector = 0;
        } else {
            ballYVector = -ballYVector;
        }

        ballY = realHeight - ballR + ballYVector * refreshSecond + G / 2 * Math.pow(refreshSecond, 2);
    }else {

        ballY =  ballY + ballYVector * refreshSecond + G / 2 * Math.pow(refreshSecond, 2);
        ballYVector += G * refreshSecond;
    }
}

function move() {
    moveX();
    moveY();
    drawBall();
}

function run() {
    setInterval(move, refreshTime);
}

drawBox();
drawBall();
run();