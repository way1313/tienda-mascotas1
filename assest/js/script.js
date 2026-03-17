const video   = document.getElementById('video');
  const playBtn = document.getElementById('playBtn');

  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.classList.add('hide');
  });

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.classList.add('hide');
    } else {
      video.pause();
      playBtn.classList.remove('hide');
    }
  });