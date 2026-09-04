// Alternar Tema (Claro/Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Modo Claro';
  } else {
    themeToggleBtn.textContent = 'Modo Escuro';
  }
});

// Sistema de Curtida
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

let count = 0;
let liked = false;

likeBtn.addEventListener('click', () => {
  if (!liked) {
    count++;
    liked = true;
    likeBtn.textContent = '❤️ Curtido';
  } else {
    count--;
    liked = false;
    likeBtn.textContent = '❤️ Curtir';
  }
  likeCount.textContent = count;
});