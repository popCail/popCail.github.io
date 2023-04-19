var sign = [1,2,3,4,5,6,7,8,9,10,11,12];
var options = { year: 'numeric', month: '2-digit', day: '2-digit',hour: '2-digit', minute: '2-digit', second: '2-digit' };
// function refreshTime(){
//     let t = new Date();
//     // console.log(t.toLocaleDateString('zh-CN', options));
//     document.getElementById("time").innerHTML = "time: " + t.toLocaleDateString('zh-CN',options);
//     // draw(t.getSeconds(),t.getMinutes(),t.getHours());
// }

// setInterval(refreshTime, 1000);
function draw(){
   var c = document.getElementById('canvas');
   var ctx = c.getContext('2d');
   ctx.beginPath();
   ctx.clearRect(0,0,900,600);
   let t = new Date();
    // document.getElementById("time").innerHTML = "time: " + t.toLocaleDateString('zh-CN',options);
    ctx.save();//1

    //变坐标
    ctx.translate(300,300);

   //画表盘
    ctx.lineWidth = 20;
    ctx.arc(0,0,280,0, 2 * Math.PI, false);
    ctx.stroke();

    ctx.font = "48px serif";
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI/6);
        // ctx.fillText(sign[i], -30 ,100-300);
        ctx.moveTo(0, 20 - 300);
        ctx.lineTo(0,  - 300);
        ctx.stroke();
    }

    ctx.save();//2
    ctx.rotate(t.getSeconds() * 2 * Math.PI / 60);
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0,50);
    ctx.lineTo(0, -260);
    ctx.stroke();
    ctx.restore();// 2-----

    ctx.save()
    ctx.rotate(t.getMinutes() * 2 *  Math.PI /60 );
    ctx.lineCap = 'round';
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(0,30);
    ctx.lineTo(0, -200);
    ctx.stroke();
    ctx.restore();

    ctx.save()
    ctx.rotate((t.getHours())%12 *  2 * Math.PI /12);
    ctx.lineCap = 'round';
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0,20);
    ctx.lineTo(0, -100);
    ctx.stroke();
    ctx.restore();


    ctx.restore();//1------------
}
draw();

setInterval(draw,1000);