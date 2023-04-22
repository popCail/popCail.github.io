drawB();


function drawB() {
    var c = document.getElementById('canvas2');
    var ctx = c.getContext('2d');
    var width = 1000;
    var height = 800;
    var R = 20;
    c.width = width;
    c.height = height;

    ctx.fillStyle = '#b9e600';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#9e02fb';
    for (let i = 5 * R / 4; i < width; i += R * 5 / 2) {
        for (let j = 5 * R / 4; j < height; j += R * 5 / 2) {
            ctx.beginPath();
            ctx.arc(i, j, R, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }
    var N = 8;
    ctx.lineWidth = R / N;
        for (let i = 5 * R / 4; i < width; i += R * 5 / 2) {
        for (let j = 5 * R / 4; j < height; j += R * 5 / 2) {
            let randomArc = Math.random() * 2 * Math.PI;

            let arc = (j-i)*2/5/4/R*Math.PI;
            // console.log((j-i)*2/5);

            ctx.strokeStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(i, j, R*(N-1/2)/N,arc , arc + Math.PI, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = '#000000';
            ctx.arc(i, j, R*(N-1/2)/N,arc + Math.PI , arc + 2 * Math.PI, false);
            ctx.stroke();
        }
    }
}


setInterval(()=>{
    cirArc += 0.01;
   drawA();
},20);
var cirR = 2;
var cirArc = Math.PI/3;

function drawA() {
    var c = document.getElementById('canvas1');
    var ctx = c.getContext('2d');
    var width = 1000;
    var height = 800;
    var lineWidth = 15;
    c.width = width;
    c.height = height;

    ctx.fillStyle = '#040404';
    ctx.fillRect(0, 0, width, height);
    ctx.fill();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#7d7d7d';
    ctx.beginPath();
    for (let i = lineWidth * 3; i < width; i += 4 * lineWidth) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
    }
    for (let i = lineWidth * 3; i < height; i += 4 * lineWidth) {
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.stroke();

    ctx.fillStyle = '#ffffff';

    for (let i = lineWidth * 3 ; i < width; i += 4 * lineWidth) {
        for (let j = lineWidth * 3 ; j < height; j += 4 * lineWidth) {
            // ctx.fillRect(i, j, lineWidth, lineWidth);
            ctx.beginPath();
            ctx.arc(i + Math.cos(cirArc) * cirR, j + Math.sin(cirArc) * cirR , lineWidth / 2, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }
}