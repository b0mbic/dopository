var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
		body.style.background = 
		"linear-gradient(to right, "
	 	+ color1.value
	 	+ ", "
	 	+ color2.value
	 	+ ")";

	 	css.textContent = body.style.background + ";";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function padColor (color) {
	if (color.length < 2) {
		color = "0" + color;
	}
	return color;
}

function generateRandomColor() {
	
	random_red = getRndInteger(0, 255).toString(16);
	random_red = padColor(random_red);

	random_green = getRndInteger(0, 255).toString(16);
	random_green = padColor(random_green);

	random_blue = getRndInteger(0, 255).toString(16);
	random_blue = padColor(random_blue);

	rancol= "#" + random_red + random_blue + random_green;
	return rancol;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", function(){
	color1.value=generateRandomColor();
	color2.value=generateRandomColor();
	setGradient();

})