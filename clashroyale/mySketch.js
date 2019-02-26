function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	var user = int(prompt("What is your username?"));
	var id = int(prompt("What is your ID"));
	var gold = int(prompt("How much gold should be added?"));
	var gem = int(prompt("How many gems should be added"));
	var send = gold + "," + gem
	alert(send);
}
