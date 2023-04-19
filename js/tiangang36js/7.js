function drawCoord() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(450, 300);
    // ctx.rotate(3/2 * Math.PI);
    ctx.transform(1, 0, 0, -1, 0, 0);
    ctx.beginPath();
    ctx.moveTo(0, -300);
    ctx.lineTo(0, 300);
    ctx.moveTo(-300, 0);
    ctx.lineTo(300, 0);
    ctx.stroke();

    ctx.strokeStyle = "gray";
    for (let i = -300; i <= 300; i += 60) {
        ctx.moveTo(-4, i);
        ctx.lineTo(4, i);
    }
    for (let i = -300; i < 300; i += 60) {
        ctx.moveTo(i, 3);
        ctx.lineTo(i, -3);
    }
    ctx.stroke();

}

function drawSin() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(-300, 60 * Math.sin(-450));
    for (let i = -300; i <= 300; i++) {
        ctx.lineTo(i, 60 * Math.sin(i / 60));
    }
    ctx.stroke();
}
//等距螺旋线
function drawDengJu() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 0);

    let a = 1;
    for (let i = 0; i < 10 * Math.PI; i += 0.0001) {
        let r = a * i;
        ctx.lineTo(10 * r * Math.sin(i), 10 * r * Math.cos(i));
    }
    ctx.stroke();


}

//等角螺旋线
function drawDengJiao(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(0, 0);

    for (let i = 0; i < 100 * Math.PI; i+=0.0001) {
        let r = Math.pow(Math.E,0.1 * i);
        ctx.lineTo(1 * r * Math.sin(i), 1 * r * Math.cos(i));

    }
    ctx.stroke();
}
//费马螺旋线
function drawFeiMa(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(0, 0);

    for (let i = -10 * Math.PI; i < 10 * Math.PI; i+=0.001) {
        let t = Math.pow(i,2);
        ctx.lineTo(30 * i *  Math.sin(t), 30 * i * Math.cos(t));
    }
    ctx.stroke();

}

drawCoord();
drawSin();
drawDengJu();
drawDengJiao();
drawFeiMa();