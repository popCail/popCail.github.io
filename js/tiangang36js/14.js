var width = 600;
var height = 600;

var c = document.getElementById('canvas');
c.width = width;
c.height = height;

let time = 500;
let density = 0.4;

var xWidth = 20;
var yWidth = 20;

var num = width / xWidth;

function createArray(x, y) {
    let result = [];
    for (let i = 0; i < x; i++) {
        result[i] = [];
        for (let j = 0; j < y; j++) {
            result[i][j] = 0;
        }
    }
    return result;
}


let arr = createArray(num + 2);
let arrTmp = createArray(num + 2);


for (let i = 0; i < num + 2; i++) {
    for (let j = 0; j < num + 2; j++) {

        if (i == 0 || i == (num + 1) || j == 0 || j == (num + 1)) {
            arr[i][j] = 0;
        } else {
            arr[i][j] = (Math.random() > density) ? 0 : 1;
        }

    }
}


function draw() {
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    for (let i = 1; i < num + 1; i++) {
        for (let j = 1; j < num + 1; j++) {
            ctx.beginPath();
            ctx.save();
            if (arr[i][j] == 1) {
                ctx.fillStyle = "red";
            }
            ctx.fillRect((i - 1) * xWidth, (j - 1) * yWidth, xWidth, yWidth);
            ctx.restore();
        }
    }

}

function nextLife() {
    for (let i = 1; i < num + 1; i++) {
        for (let j = 1; j < num + 1; j++) {
            let num = cellNumber(i, j);
            if (num < 2) {
                arrTmp[i][j] = 0;
            } else if (num <= 3) {
                arrTmp[i][j] = 1;
            } else {
                arrTmp[i][j] = 0;
            }
        }
    }

    arr = arrTmp;
    arrTmp = createArray(num + 2, num + 2);
}

function cellNumber(i, j) {
    let num = 0;
    for (let k = i - 1; k < i + 2; k++) {
        for (let l = j - 1; l < j + 2; l++) {
            if (arr[k][l] == 1) {
                num++;
            }
        }
    }

    return num;
}

setInterval(() => {
    draw();
    nextLife();
}, time);