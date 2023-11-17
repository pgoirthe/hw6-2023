var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log ("auto play is set to " + video.autoplay)
	console.log ("loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// video.volume = this.value;
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector('#slider').addEventListener("change", function() {
	console.log("volume indicator")
	video.volume = this.value/100;
	console.log ("The current value is " + video.volume);
	document.querySelector("#volume").innerHTML = this.value + "%";
})

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Video is Paused");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slowed down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate *= (1/0.9);
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Video");
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
	if (video.ended == true);
		video.loop = true;
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is muted");
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is unmuted");
	}

})


document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Black and White");
	document.querySelector("#player1").classList.add("oldSchool");


})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original State of Video");
	document.querySelector("#player1").classList.remove("oldSchool");

})
