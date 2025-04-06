window.addEventListener("load", function () {
    console.log("Good job opening the window");

    const video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;
    video.currentTime = 0;
    video.muted = false;

    const playButton = document.getElementById('play');
    playButton.addEventListener("click", function () {
        video.play();
        document.getElementById("volume").innerHTML = `${video.volume * 100}%`;
        console.log("play");
    });

    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener("click", function () {
        video.pause();
        console.log("pause");
    });

    const slowerButton = document.getElementById('slower');
    slowerButton.addEventListener('click', function () {
        video.playbackRate /= 1.1;
        console.log(`New speed: ${video.playbackRate}`);
    });

    const fasterButton = document.getElementById('faster');
    fasterButton.addEventListener('click', function () {
        video.playbackRate *= 1.1;
        console.log(`New speed: ${video.playbackRate}`);
    });

    const skipButton = document.getElementById('skip');
    skipButton.addEventListener('click', function () {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log(`Current location: ${video.currentTime}`);
    });

    const muteButton = document.getElementById('mute');
    muteButton.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = "Mute";
        } else {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
        }
    });

    const volumeSlider = document.getElementById('slider');
    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value / 100;
        const vol = document.getElementById("volume");
        vol.innerHTML = `${video.volume * 100}%`;
    });

    const vintageButton = document.getElementById('vintage');
    vintageButton.addEventListener('click', function () {
        video.classList.add('oldSchool');
    });

    const origButton = document.getElementById('orig');
    origButton.addEventListener('click', function () {
        video.classList.remove('oldSchool');
    });
});