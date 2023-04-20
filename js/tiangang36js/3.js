function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // c.width = 1500;
    // c.height = 1000;

    var w = c.width;
    var h = c.height;
    var eleW = w/30;
    var eleH = h / 20;
    ctx.strokeStyle = "red";
    ctx.rect(0, 0, w, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2, h);
    ctx.moveTo(0, h/2 );
    ctx.lineTo(w, h/2);
    for (let i = 0; i < 10; i++) {
        ctx.moveTo(0, i * eleH);
        ctx.lineTo(w/2, i * eleH);
    }
    for (let i = 0; i < 15; i++) {
        ctx.moveTo(eleW * i, 0);
        ctx.lineTo(eleW * i, h/2 );
    }
    ctx.stroke();


    ctx.strokeStyle = "black";
    painStart(5 *  eleW,5 * eleW, 3 * eleW ,  Math.PI,ctx);
    painStart(10 * eleW,2 * eleW, 1 * eleW,  -Math.atan(5/3),ctx);
    painStart(12 * eleW,4 * eleW, 1 * eleW, -Math.atan(7/1),ctx);
    painStart(12 * eleW,7 * eleW, 1 * eleW ,  -Math.PI/2 - Math.atan(2/7),ctx);
    painStart(10 * eleW,9 * eleW, 1 * eleW,  -Math.PI/2 - Math.atan(4/5),ctx);

    ctx.beginPath()
    ctx.moveTo(5 * eleW,5 * eleW);
    ctx.lineTo(10 * eleW,2 * eleW);
    ctx.moveTo(5 * eleW,5 * eleW);
    ctx.lineTo(12 * eleW,4 * eleW);
    ctx.moveTo(5 * eleW,5 * eleW);
    ctx.lineTo(12 * eleW,7 * eleW);
    ctx.moveTo(5 * eleW,5 * eleW);
    ctx.lineTo(10 * eleW,9 * eleW);

    ctx.stroke();


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
    ctx.lineTo(PointSet[2][0],PointSet[2][1]);
    ctx.lineTo(PointSet[4][0],PointSet[4][1]);
    ctx.lineTo(PointSet[1][0],PointSet[1][1]);
    ctx.lineTo(PointSet[3][0],PointSet[3][1]);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x,y,r,0,2 * Math.PI,false);
    ctx.stroke();


}
draw();