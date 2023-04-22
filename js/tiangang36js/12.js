var stars = [];
var starSize = 2;
var starSpeed = 6;

var width = window.innerWidth ;
var height = window.innerHeight;
// var width = document.documentElement.clientWidth ;
// var height = document.documentElement.clientHeight;
var count = 2000;


function draw() {
    var c = document.getElementById('canvas');
    c.width = width;
    c.height = height;
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    ctx.fill();


    for (let i = 0; i < stars.length; i++) {
        ctx.fillStyle = 'rgba(255,255,255,' + stars[i][2] + ')';
        ctx.fillRect(stars[i][0], stars[i][1], starSize, starSize);
    }

}

function init() {
    for (let i = 0; i < count; i++) {
        let a = [];
        a[0] = width * Math.random();
        a[1] = height * Math.random();
        a[2] = Math.random();
        stars.push(a);
    }
}

function move() {
    for (let i = 0; i < count; i++) {
        if (i % 2 === 0) {
            if (stars[i][0] + stars[i][2] * starSpeed > width) {
                stars[i][0] = stars[i][0] + stars[i][2] * starSpeed - width;
            } else {

                stars[i][0] = stars[i][0] + stars[i][2] * starSpeed;
            }
        } else {
            if (stars[i][0] - stars[i][2] * starSpeed < 0) {
                stars[i][0] = width - (stars[i][2] * starSpeed - stars[i][0]);
            } else {
                stars[i][0] = stars[i][0] - stars[i][2] * starSpeed;
            }

        }

    }
}

init();
setInterval(() => {
    move();
    draw();
}, 25)