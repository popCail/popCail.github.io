var width = window.innerWidth;
var height = window.innerHeight;

var arcR = 20;
var Xnum = 30;
var Ynum = 20;

var curX = 10;
var curY = 10;
function drawGrid() {
    var c = document.getElementById('canvas');
    c.width = width;
    c.height = height;
    var ctx = c.getContext('2d');

    for (let i = 0; i < Xnum; i++) {
        for (let j = 0; j < Ynum; j++) {
            ctx.beginPath();
            ctx.arc(arcR + arcR*2*i,arcR + arcR*2*j,arcR,0,Math.PI*2,false);
            ctx.stroke();

            if(i == curX && j ==curY){

                ctx.beginPath();
                ctx.arc(arcR + arcR*2*i,arcR + arcR*2*j,arcR,0,Math.PI*2,false);
                ctx.fill();
            }
        }
    }
}
drawGrid();

let elem = document.getElementById('body');

elem.addEventListener("keydown",  (event) => {
    var x = event.key;
    if(x == "a"){
       curX--;
    }else if(x == "w"){
        curY--;
    }else if(x == "s"){
        curY++;
    }else if(x == "d"){
        curX++;
    }
    if(curX >= Xnum){
       curX=0;
    }else if(curX < 0){
       curX = Xnum-1;
    }
    if(curY >= Ynum){
        curY=0;
    }else if(curY < 0){
        curY = Ynum-1;
    }
    drawGrid();
});
