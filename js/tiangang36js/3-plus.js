draw();
function draw(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.transform(0, 1, 1, 0, 0, 0);

    // c.width = 1500;
    // c.height = 1000;

    var w = c.width;
    var h = c.height;
    var eleW = w/30;
    ctx.fillStyle = "#ee1c25" ;
    ctx.fillRect(0,0,w,h);

    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffff01";

    painStart(5 *  eleW,5 * eleW, 3 * eleW ,  Math.PI,ctx);
    painStart(10 * eleW,2 * eleW, 1 * eleW,  -Math.atan(5/3),ctx);
    painStart(12 * eleW,4 * eleW, 1 * eleW, -Math.atan(7/1),ctx);
    painStart(12 * eleW,7 * eleW, 1 * eleW ,  -Math.PI/2 - Math.atan(2/7),ctx);
    painStart(10 * eleW,9 * eleW, 1 * eleW,  -Math.PI/2 - Math.atan(4/5),ctx);
}

function painStart(x, y, r, initArc, ctx) {
    let arc5 = 2 * Math.PI / 5;
    let PointSet = [];

    for (let i = 0; i < 5; i++) {
        let point = [];
        let xx = x + r * Math.sin(initArc + i * arc5);
        let yy = y + r * Math.cos(initArc + i * arc5);
        point.push(xx);
        point.push(yy);
        PointSet.push(point);
    }

    ctx.beginPath();
    ctx.moveTo(PointSet[0][0],PointSet[0][1]);
    for (let i = 2; i < 5; i+=2) {
        ctx.lineTo(PointSet[i][0],PointSet[i][1]);
    }
    for (let i = 1; i < 5; i+=2) {

        ctx.lineTo(PointSet[i][0],PointSet[i][1]);
    }
    ctx.closePath();
    ctx.fill();
}