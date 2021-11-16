var lastpositionofx,lastpositionofy;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="green";
width_of_line=2;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_the_line").value;
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    currentpositionoftouchx=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionoftouchy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last positon of x and y coordinates=");
console.log("x="+lastpositionofx+"y="+lastpositionofy);
ctx.moveTo(lastpositionofx,lastpositionofy);
console.log("current positon of x and y coordinates=");
console.log("x="+currentpositionoftouchx+"y="+currentpositionoftouchy);
ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy);
ctx.stroke();
lastpositionofx=currentpositionoftouchx;
lastpositionofy=currentpositionoftouchy;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

