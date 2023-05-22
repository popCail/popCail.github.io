var width = 600;
var height = 600;

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
// x’ = a * x + b * y + e
// y’ = c * x + d * y + f
// p = 概率
// x、y 值范围：0 ~ 1
var a = [0.35173, 0.35338, 0.5, 0.5154, 0.00364];
var b = [0.35537, -0.3537, 0, -0.0018, 0];
var c = [-0.35537, 0.35373, 0, 0.00157, 0];
var d = [0.35173, 0.35338, 0.5, 0.58795, 0.57832];
var e = [0.3545, 0.2879, 0.25, 0.2501, 0.5016];
var f = [0.5, 0.1528, 0.462, 0.1054, 0.0606];
var p = [0.1773, 0.38, 0.1773, 0.2091, 0.0563];

for (let i = 1; i < 5; i++) {
    p[i] += p[i - 1];
}

var init = [Math.random(), Math.random()];

function getN(e) {
    for (let i = 0; i < 5; i++) {
        if (e < p[i]) {
            return i;
        }
    }
    return 4;
}

function draw() {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillRect(init[0] * width, init[1] * height, 1, 1);
    ctx.fill();

    var n = getN(Math.random());

    var x = a[n] * init[0] + b[n] * init[1] + e[n];
    var y = c[n] * init[0] + d[n] * init[1] + f[n];
     init[0] = x;
     init[1] = y;
}

for (let i = 0; i < 50000; i++) {
    draw();
}

