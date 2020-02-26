var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play()
	console.log("Play Video")
	console.log(video)

	// Get the  volume elenent
	volume = document.querySelector('#volume')
	console.log(volume)
	volume.innerHTML = video.volume * 100 + '%';
	// Change the text
}

function pauseVid() {
	video.pause()
	console.log("Pause Video")
	console.log(video);
}

function decreaseSpeed() {
		video.playbackRate = video.playbackRate * 0.8
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate	* 1.25
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if (eval(video.duration - video.currentTime) > 0) {
			video.currentTime += 60
	}
	else if (eval(video.duration - video.currentTime) <= 0){
		// video.load()
		video.currentTime = 0
		video.play()
	}
	console.log("Current location is "+ video.currentTime)
	console.log("Current time left is " + eval(video.duration - video.currentTime));
}

function mute() {
	// console.log(video.muted)
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else {
		video.muted = true;
  	console.log("Muted");
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
}

function changeVolume() {
		let slider = document.querySelector('#volumeSlider')
		console.log(slider.value)
		video.volume = slider.value/100
		console.log("Volume is " + (video.volume * 100))
		volume.innerHTML = slider.value + '%';
}


function gray() {
	video.classList.add('grayscale')
	console.log("In grayscale");
}

function color() {
	video.classList.remove('grayscale')
	console.log("In color");
}
