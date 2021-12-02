var music = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Music");
	console.log(music.currentTime);
	music.loop = true;
	music.play();

}, false);

document.querySelector("#stop").addEventListener("click", function() {
	console.log("Stop Music");
	console.log(music.currentTime);
	music.pause();
});

