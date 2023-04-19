function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.rect(0, 0, 300, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 200);
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    for (let i = 0; i < 10; i++) {
        ctx.moveTo(0, i * 10);
        ctx.lineTo(150, i * 10);
    }
    for (let i = 0; i < 15; i++) {
        ctx.moveTo(10 * i, 0);
        ctx.lineTo(10 * i, 100);
    }
    ctx.stroke();

    // ctx.beginPath();
    // ctx.strokeStyle = "black";
    // ctx.arc(50, 50, 30, 0, 2 * Math.PI, false);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // let arc = 2 * Math.PI / 5;
    // ctx.moveTo(50, 50 - 30);
    // ctx.lineTo(50 - 30 * Math.sin(2 * arc), 50 - 30 * Math.cos(2 * arc));
    // ctx.lineTo(50 + 30 * Math.sin(arc), 50 - 30 * Math.cos(arc));
    // ctx.lineTo(50 - 30 * Math.sin(arc), 50 - 30 * Math.cos(arc));
    // ctx.lineTo(50 + 30 * Math.sin(2 * arc), 50 - 30 * Math.cos(2 * arc));
    // ctx.closePath();
    // ctx.stroke();

    ctx.strokeStyle = "black";
    painStart(50,50,30,Math.PI,ctx);

    painStart(100,20,10, -Math.atan(5/3),ctx);
    painStart(120,40,10, -Math.atan(7/1),ctx);
    painStart(120,70,10, - Math.PI/2 - Math.atan(2/7),ctx);
    painStart(100,90,10,-Math.PI/2 - Math.atan(4/5),ctx);

    ctx.beginPath()
    ctx.moveTo(50,50);
    ctx.lineTo(100,20);
    ctx.moveTo(50,50);
    ctx.lineTo(120,40);
    ctx.moveTo(50,50);
    ctx.lineTo(120,70);
    ctx.moveTo(50,50);
    ctx.lineTo(100,90);

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