// public/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    function toggleTheme() {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
  
      if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Tema Claro';
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Tema Oscuro';
      }
    }
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
  
    if (savedTheme === 'dark') {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> Tema Claro';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> Tema Oscuro';
    }
  
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  });