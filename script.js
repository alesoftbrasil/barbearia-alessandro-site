const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
items.forEach((item) => io.observe(item));

const video = document.getElementById('heroVideo');
const soundButton = document.getElementById('soundButton');

if (video && soundButton) {
  soundButton.addEventListener('click', async () => {
    video.muted = !video.muted;
    soundButton.setAttribute('aria-pressed', String(!video.muted));
    soundButton.querySelector('.sound-icon').textContent = video.muted ? '🔊' : '🔇';
    soundButton.querySelector('.sound-label').textContent = video.muted ? 'Ativar som' : 'Desativar som';

    try {
      await video.play();
    } catch (error) {
      console.warn('Não foi possível iniciar o vídeo automaticamente.', error);
    }
  });
}
