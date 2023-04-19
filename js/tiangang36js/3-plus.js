draw();
function draw(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    // painStart(500,500,400,0,ctx);
    // ctx.beginPath();
    // ctx.rect(0,0,900,600);
    // ctx.stroke();
    // ctx.beginPath()
    // ctx.strokeStyle = "#ee1c25";
    // paintLine(0,0,900,600,ctx);
   ctx.fillStyle = "#ee1c25" ;
    ctx.fillRect(0,0,900,600);

    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffff01";


    painStart(30 * 5, 30 * 5,30* 3, Math.PI,ctx);
    painStart(30 * 10, 30 * 2,30* 1, -Math.atan(5/3),ctx);
    painStart(30 * 12, 30 * 4,30* 1, -Math.atan(7),ctx);
    painStart(30 * 12, 30 * 7,30* 1, -Math.PI/2 - Math.atan(2/7),ctx);
    painStart(30 * 10, 30 * 9,30* 1, -Math.PI /2 - Math.atan(4/5),ctx);


    // ctx.beginPath();
    // ctx.moveTo(30 * 5,30 * 5);
    // ctx.lineTo(30 * 10,30 * 2);
    // ctx.moveTo(30 * 5,30 * 5);
    // ctx.lineTo(30 * 12,30 * 4);
    // ctx.moveTo(30 * 5,30 * 5);
    // ctx.lineTo(30 * 12,30 * 7);
    // ctx.moveTo(30 * 5,30 * 5);
    // ctx.lineTo(30 * 10,30 * 9);
    // ctx.stroke();

}
function paintLine(x,y,width,height,ctx){
    // ctx.strokeStyle = "#ee1c25";
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + width/2 , y);
    ctx.lineTo(x + width/2 , y + height);
    ctx.moveTo(x,y + height/2);
    ctx.lineTo(x  + width, y + height /2);
    ctx.stroke();

    ctx.beginPath();
    for (let i = 1; i < 10; i++) {
        ctx.moveTo(x,y + height/20 * i);
        ctx.lineTo(x + width /2,y + height/20 * i );

    }
    for (let i = 1; i < 15; i++) {
       ctx.moveTo(x + width/30 * i, y);
       ctx.lineTo(x  + width/ 30 * i,y + height/2)
    }

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
    for (let i = 2; i < 5; i+=2) {
        ctx.lineTo(PointSet[i][0],PointSet[i][1]);
    }
    for (let i = 1; i < 5; i+=2) {

        ctx.lineTo(PointSet[i][0],PointSet[i][1]);
    }
    ctx.closePath();
    // ctx.stroke();
    ctx.fill();
    // ctx.beginPath();
    // ctx.arc(x,y,r,0,2 * Math.PI,false);
    // ctx.stroke();


}