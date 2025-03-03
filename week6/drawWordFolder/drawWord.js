let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// makes the text input disabled
let input = document.querySelector("#imageText");
input.disabled = true;

// gets the image
let image = new Image();
image.src = 'resized-nasa-hubble-space-telescope.jpg';

// event listener that makes the input available when the image loads
image.addEventListener("load", function () {
    context.drawImage(image, 393, 500);
    input.disabled = false;
})

// event listener for the input
input.addEventListener("input", function () {
    // gets text/value from input
    let text = this.value;

    // adds the entered text on the image
    context.drawImage(image, 0, 0);
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText(text, 100, 250);
})