var shapN = 3;
function draw(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
   // alert(1) ;
   //  painNShape(300,300,100,5,ctx);
    // ctx.stroke();

    ctx.clearRect(0,0,900,600);
    painStart(300,300,200,Math.PI,shapN,ctx);
}

function painNShape(x,y,r,n,ctx){
    // alert(1);
    let pointArr = [];
    let arc = 2 * Math.PI /n;
    for (let i = 0; i < n; i++) {
       var point = [];
       let xx = x + r * Math.sin( i * arc) ;
       let yy = y + r + Math.cos( i * arc);
       point.push(xx);
       point.push(yy);
       pointArr.push(point);
    }

    ctx.beginPath();
    ctx.moveTo(pointArr[0][0], pointArr[0][1]);
    for (let i = 1; i < n; i++) {
        ctx.lineTo(pointArr[i][0], pointArr[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
}

function painStart(x, y, r, initArc,n, ctx) {
    let arc5 = 2 * Math.PI / n;
    let PointSet = [];

    for (let i = 0; i < n; i++) {
        var point = [];
        let xx = x + r * Math.sin(initArc + i * arc5);
        let yy = y + r * Math.cos(initArc + i * arc5);
        point.push(xx);
        point.push(yy);
        PointSet.push(point);
    }

    ctx.beginPath();
    ctx.moveTo(PointSet[0][0],PointSet[0][1]);

    for (let i = 1; i < n; i++) {

        ctx.lineTo(PointSet[i][0],PointSet[i][1]);
    }

    ctx.closePath();
    ctx.stroke();




}

function run(){
   shapN++;
   if(shapN === 100){
      shapN = 3;
   }
   draw();
   setTimeout(run,200 );
}
run();