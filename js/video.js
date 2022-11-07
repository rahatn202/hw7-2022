var video;
let tempVol;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById('player1');
	
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Auto play is set to " + video.loop);
	
	document.querySelector('#slider').value = "0.0";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
	document.querySelector('#slider').value = video.volume * 100;
	document.querySelector('#volume').textContent = 100 * video.volume + "%";
	console.log("Volume: " + video.volume);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (9 / 10) * video.playbackRate;
	console.log("Slowing down to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (10 / 9) * video.playbackRate;
	console.log("Speeding up to " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = "0.0";
	}
	console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume != "0.0") {
		tempVol = video.volume;
		
		video.volume = "0.0";
		document.querySelector('#slider').value = video.volume * 100;
		document.querySelector('#volume').textContent = video.volume * 100 + "%";
		console.log("Volume: " + video.volume);
	} else {
		video.volume = tempVol;
		document.querySelector('#slider').value = video.volume * 100;
		document.querySelector('#volume').textContent = video.volume * 100 + "%";
		console.log("Volume: " + video.volume);
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector('#slider').value / 100;
	document.querySelector('#volume').textContent = 100 * video.volume + "%";
	console.log("Volume: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});