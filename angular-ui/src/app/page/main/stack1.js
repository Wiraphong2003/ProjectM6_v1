// function draw() {
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   let img = new Image();
//   img.addEventListener("load", () => {
//     ctx.drawImage(img, 0, 0);
//     ctx.font = '50px serif';
//     ctx.fillText('Hello world', 50, 90);
//   });
//   img.src = "backdrop.png";
// }


function getLines(ctx, text, maxWidth) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

let loadImageOnCanvasAndThenWriteText = (
  canvas,
  imageUrl,
  textToWrite,
  textStyleOptions,
  xCordOfText,
  yCordOfText,
  textBoundingBoxWidth
) => {
  // Get the 2D Context from the canvas
  let ctx = canvas.getContext("2d");

  // Create a new Image
  let img = new Image();

  // Setting up a function with the code to run after the image is loaded
  img.onload = () => {
    // Once the image is loaded, we will get the width & height of the image
    let loadedImageWidth = img.width;
    let loadedImageHeight = img.height;

    // Set the canvas to the same size as the image.
    canvas.width = loadedImageWidth;
    canvas.height = loadedImageHeight;

    // Draw the image on to the canvas.
    ctx.drawImage(img, 0, 0);

    // Set all the properties of the text based on the input params
    ctx.font = `${textStyleOptions.fontSize}px ${textStyleOptions.fontFamily}`;
    ctx.fillStyle = textStyleOptions.textColor;
    ctx.textAlign = textStyleOptions.textAlign;

    // Setting this so that the postion of the text can be set
    // based on the x and y cord from the top right corner
    ctx.textBaseline = "top";

    // Get lines array
    let arrayOfLines = getLines(ctx, textToWrite, textBoundingBoxWidth);

    // Set line height as a little bit bigger than the font size
    let lineheight = textStyleOptions.fontSize + 10;

    // Loop over each of the lines and write it over the canvas
    for (let i = 0; i < arrayOfLines.length; i++) {
      ctx.fillText(arrayOfLines[i], xCordOfText, yCordOfText + (i * lineheight));
    }
  };

  // Now that we have set up the image "onload" handeler, we can assign
  // an image URL to the image.
  img.src = imageUrl;
};

// Run code after the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Setting up the canvas
  let theCanvas = document.getElementById("myCanvas");

  // Some image URL..
  let imageUrl = "https://i.ibb.co/w4QhYBr/340618868-899903277951742-6679712580878809918-n.jpg";

  let textStyleOptions = {
    fontSize: 15,
    fontFamily: "Arial",
    textColor: "rgba(255, 255, 255, 0.9)",
    textAlign: "left"
  };

  let textToWrite =
    "The Mona Lisa is one of the most valuable paintings in the world. It holds the Guinness World Record for the highest-known painting insurance valuation in history at US$100 million in 1962.";

  let xCordOfText = 10;
  let yCordOfText = 10;

  let textBoundingBoxWidth = 350;

  // Load image on the canvas & then write text
  loadImageOnCanvasAndThenWriteText(
    theCanvas,
    imageUrl,
    textToWrite,
    textStyleOptions,
    xCordOfText,
    yCordOfText,
    textBoundingBoxWidth
  );
});

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.crossOrigin = "Anonymous";
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);
ctx.font = "36pt Verdana";
$(document).on('input', '#inp', function () {
  //redraw image
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage($('img').get(0), 0, 0);
  //refill text
  ctx.fillStyle = "red";
  ctx.fillText($(this).val(), 40, 80);
});
$('button').click(function () {
  console.log(ctx.getImageData(50, 50, 100, 100));
});

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
