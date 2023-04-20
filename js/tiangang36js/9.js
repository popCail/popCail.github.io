function draw() {
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, 900, 900);
    let t = new Date();
    let miliSec = t.getMilliseconds();
    let sec = t.getSeconds();
    let min = t.getMinutes();
    let hr = t.getHours();

    ctx.save();//1

    //变坐标
    ctx.translate(300, 300);

    //画表盘
    ctx.beginPath();
    ctx.strokeStyle = '#f97d00';
    ctx.lineWidth = 20;
    ctx.arc(0, 0, 290, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'black';
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(0, -280);
        ctx.lineTo(0, -260);
        ctx.stroke();
    }
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(0, -280);
        ctx.lineTo(0, -270);
        ctx.stroke();
    }

    //画秒针     
    ctx.save();//2
    ctx.rotate(sec * 2 * Math.PI / 60 + Math.PI / 30 * miliSec / 1000);
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(0, -240);
    ctx.stroke();
    ctx.restore();// 2-----

    //画分针
    ctx.save()
    ctx.rotate(min * 2 * Math.PI / 60 + sec * 2 * Math.PI / 3600);
    ctx.lineCap = 'round';
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(0, -200);
    ctx.stroke();
    ctx.restore();

    //画时针
    ctx.save()
    ctx.rotate((hr % 12) * 2 * Math.PI / 12 + 2 * Math.PI / 12 / 60 * min + 2 * Math.PI / 12 / 60 / 60 * sec);
    ctx.lineCap = 'round';
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.restore();


    ctx.restore();//1------------
}


setInterval(draw, 50);