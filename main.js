var lastposition_x, lastposition_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
color = "black";
WidthOfLine = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = WidthOfLine;
        console.log("last position of x and y");
        console.log(lastposition_x, lastposition_y);
        ctx.moveTo(lastposition_x, lastposition_y);
        console.log("current position of x and y");
        console.log(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    }
    lastposition_x = current_position_of_mouse_X;
    lastposition_y = current_position_of_mouse_Y;
}
var width = screen.width;
var newwidth = screen.width - 70;
var height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = height;
    document.body.style.overflow = "hidden";

}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log = ("my_touchstart");
    lastpositionofx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionofy = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log = ("my_touchmove");
    currenetpositionoftouchx = e.touches[0].clientX - canvas.offsetLeft;
    currenetpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = black;
    ctx.lineWidth = 2;



    ctx.moveTo(lastpositionofx, lastpositionofy);


    ctx.lineTo(currenetpositionoftouchx, currenetpositionoftouchy);

    ctx.stroke();

    lastpositionofx = currenetpositionoftouchx;
    lastpositionofy = currenetpositionoftouchy;
}
