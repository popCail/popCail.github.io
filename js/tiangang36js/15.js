var width = 1000;
var height = 600;

var c = document.getElementById('c');
c.width = width;
c.height = height;


var p=[];
p.push(Math.random() * width);
p.push(Math.random() * height);
var arr=[];

for (let i = 0; i < 3; i++) {
    var tmp =  [];
    tmp.push(Math.random() * width) ;
    tmp.push(Math.random() * height);
    arr.push(tmp);

    var ctx = c.getContext('2d');
    ctx.save();
    ctx.fillStyle = "red";
    ctx.rect(tmp[0],tmp[1],5,5);
    ctx.fill();
    ctx.restore();
}


function draw() {
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.save();
    ctx.rect(p[0],p[1],1,1);
    ctx.fill();
    ctx.restore();
    var n = Math.floor(Math.random()*3);

    p[0] = (p[0] + arr[n][0]) / 2;
    p[1] = (p[1] + arr[n][1]) / 2;

}

setInterval(draw,1);

// for (let i = 0; i < 30000; i++) {
//     draw(i);
// }