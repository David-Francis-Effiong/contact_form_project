
var colorBox = document.getElementById("color-box");
var colorBtn = document.getElementById("color-btn");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colorTag = '#'

    for (var i = 0; i < 6; i++) { // Generate a random hex color with 6 characters (0-6) is the length of the hex code
        colorTag += letters[Math.floor(Math.random() * 16)]; //meth.floor simply rounds down to the nearest whole number
    }

    return colorTag;
}


colorBox.addEventListener("click", function() {
    var newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    console.log("Color changed to: " + newColor);
    colorBtn.style.backgroundColor = newColor;
    colorBtn.textContent = "Click to change color to " + newColor;

}); 
