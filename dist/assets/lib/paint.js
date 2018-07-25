(function(){//保护作用域

var canvas;
var context;

window.onload = function() {
  // Get the canvas and the drawing context.
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");

  // Attach the events that you need for drawing.
  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmouseout = stopDrawing;
  canvas.onmousemove = draw;
};

var isDrawing = false;

function startDrawing(e) {
  // Start drawing.
  isDrawing = true;

  // Create a new path (with the current stroke color and stroke thickness).
  context.beginPath();

  // Put the pen down where the mouse is positioned.
  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (isDrawing == true) {
    // Find the new position of the mouse.
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;

    // Draw a line to the new position.
    context.lineTo(x, y);
    context.stroke();	
  }
}

// Keep track of the previous clicked <img> element for color.
var previousColorElement;

function changeColor(color, imgElement) {
  // Change the current drawing color.
  context.strokeStyle = color;

  // Give the newly clicked <img> element a new style.
  imgElement.className = "Selected";

  // Return the previously clicked <img> element to its normal state.
  if (previousColorElement != null) previousColorElement.className = "";
  previousColorElement = imgElement;
}

// Keep track of the previous clicked <img> element for thickness.
var previousThicknessElement;

function changeThickness(thickness, imgElement) {
  // Change the current drawing thickness.
  context.lineWidth = thickness;

  // Give the newly clicked <img> element a new style.
  imgElement.className = "Selected";

  // Return the previously clicked <img> element to its normal state.
  if (previousThicknessElement != null) previousThicknessElement.className = "";
  previousThicknessElement = imgElement;
}


function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() { 
  // Find the <img> element.
  var imageCopy = document.getElementById("savedImageCopy");

  // Show the canvas data in the image.
  imageCopy.src = canvas.toDataURL();  

  // Unhide the <div> that holds the <img>, so the picture is now visible.
  var imageContainer = document.getElementById("savedCopyContainer");
  imageContainer.style.display = "block";
}

var redPen = document.getElementById("redPen")
redPen.addEventListener('click',()=>changeColor('rgb(212,21,29)', redPen),false)

var greenPen = document.getElementById("greenPen")
greenPen.addEventListener('click',()=>changeColor('rgb(131,190,61)', greenPen),false)

var bluePen = document.getElementById("bluePen")
bluePen.addEventListener('click',()=>changeColor('rgb(0,86,166)', bluePen),false)

var thin =document.getElementById("thin")
thin.addEventListener('click',()=>changeThickness(1, thin),false)

var medium = document.getElementById("medium")
medium.addEventListener('click',()=>changeThickness(5, medium),false)

var thick = document.getElementById("thick")
thick.addEventListener('click',()=>changeThickness(10, thick),false)

document.getElementById("savePaint").addEventListener('click',saveCanvas,false)
document.getElementById("clearPaint").addEventListener('click',clearCanvas,false)

}()) //保护作用域
