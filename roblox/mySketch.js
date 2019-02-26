function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	var user = int(prompt("What is your username?"));
	var robux = int(prompt("How much robux should be added?"));
	var send = "Amount Generated: " + robux
	alert(send);
}
