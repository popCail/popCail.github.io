var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = 900;
c.height = 600;

var ballX = [];
var ballY = [];
var ballR = 5;
var ballNumber = 800;
var speedX = [];
var speedY = [];

var ballColor = "#ff0000";
var backgroudColor = "#499526";
var boxWidth = c.width;
var boxHeight = c.height;

var refreshTime = 25;


document.getElementById("ButtonBallNumber").addEventListener("click", () => {
    // 获取输入框的内容
    var inputText = document.getElementById("ballNumber").value;

    var num = Number(inputText);
    if(Number.isInteger(num) && num > 0){
        ballNumber = num;
        run();
    }
    document.getElementById('ballNumber').value = "";

});
document.getElementById("ButtonBallR").addEventListener("click", () => {
    // 获取输入框的内容
    var inputText = document.getElementById("ballR").value;

    var num = Number(inputText);

    if(Number.isInteger(num) && num > 0){
        ballR = num;
        run();
    }

    // 清空输入框中的内容
    document.getElementById("ballR").value = "";
});
function draw() {
    ctx.clearRect(0, 0, boxWidth, boxHeight);

    ctx.beginPath();
    ctx.fillStyle = backgroudColor;
    ctx.fillRect(0, 0, boxWidth, boxHeight);

    ctx.fillStyle = ballColor;
    for (let i = 0; i < ballNumber; i++) {
        ctx.beginPath();
        ctx.arc(ballX[i], ballY[i], ballR, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}


function move() {

    for (let i = 0; i < ballNumber; i++) {
        if (ballX[i] + speedX[i] >= boxWidth - ballR) {
            let moveLength = ballX[i] + speedX[i] - (boxWidth - ballR);
            ballX[i] = boxWidth - ballR - moveLength;
            speedX[i] = -speedX[i];
        } else if (ballX[i] + speedX[i] <= ballR) {
            let moveLength = ballR - (ballX[i] + speedX[i]);
            ballX[i] = ballR + moveLength;
            speedX[i] = -speedX[i];
        } else {
            ballX[i] = ballX[i] + speedX[i];
        }

        if (ballY[i] + speedY[i] >= boxHeight - ballR) {
            let moveLength = ballY[i] + speedY[i] - (boxHeight - ballR);
            ballY[i] = boxHeight - ballR - moveLength;

            speedY[i] = -speedY[i];
        } else if (ballY[i] + speedY[i] <= ballR) {
            let moveLength = ballR - (ballY[i] + speedY[i]);
            ballY[i] = ballR + moveLength;

            speedY[i] = -speedY[i];
        } else {
            ballY[i] = ballY[i] + speedY[i];
        }

    }
    draw();
}


function run() {
    init();
    setInterval(move, refreshTime);
}

function init() {
    for (let i = 0; i < ballNumber; i++) {
        ballX[i] = Math.random() * (boxWidth - 2 * ballR) + ballR;
        ballY[i] = Math.random() * (boxHeight - 2 * ballR) + ballR;
        speedX[i] = Math.random() * 20 - 10;
        speedY[i] = Math.random() * 20 - 10;
        // speedX[i] =  20;
        // speedY[i] =  20;
    }
}

run();