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

  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');

  // Toggle menú
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    nav.classList.toggle('is-open');
  });

  // Cerrar menú al hacer scroll
  window.addEventListener('scroll', () => {
    if (nav.classList.contains('is-open')) {
      btn.classList.remove('is-active');
      nav.classList.remove('is-open');
    }
  });

  // Cerrar menú al clickear un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('is-active');
      nav.classList.remove('is-open');
    });
  });