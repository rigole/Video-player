const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const currentTime = document.querySelector('.time-elapsed');
const volumeBar = document.querySelector('.volume-bar');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //

function togglePlay() {
    if (video.paused){
        video.play();
    }
    else {
        video.pause();
    }
}

// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event Listeners

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);