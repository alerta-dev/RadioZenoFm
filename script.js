const audio = document.getElementById('radio');
const playPauseBtn = document.getElementById('playPause');
const volumeSlider = document.getElementById('volume');

// Play/Pause Functionality
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('paused');
    } else {
        audio.pause();
        playPauseBtn.classList.add('paused');
    }
});

// Volume Control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 200;
});
