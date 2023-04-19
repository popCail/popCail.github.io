function draw(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    let arc =  2* Math.PI / 5;
    ctx.moveTo(150 ,150 - 100);
    ctx.lineTo(150 - 100 * Math.sin(2 * arc), 150 -  100 * Math.cos(2 * arc));
    ctx.lineTo(150 + 100 * Math.sin(arc), 150 - 100 *  Math.cos(arc));
    ctx.lineTo(150 - 100 * Math.sin(arc), 150 - 100 *  Math.cos(arc));
    ctx.lineTo(150 + 100 * Math.sin(2 * arc),150 -  100 * Math.cos(2 * arc) );
    ctx.closePath();

    ctx.fillStyle = "red";
    ctx.fill();


}
draw();