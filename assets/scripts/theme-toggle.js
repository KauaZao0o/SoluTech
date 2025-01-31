// theme-toggle.js

// Função para alternar entre temas
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Salva a preferência do tema no localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);

    // Atualiza o ícone do botão de alternar tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (isDarkTheme) {
        themeToggleBtn.textContent = '🌞'; // Ícone de sol para tema escuro
    } else {
        themeToggleBtn.textContent = '🌓'; // Ícone de lua para tema claro
    }
}

// Função para carregar o tema salvo
function loadTheme() {
    const body = document.body;
    const savedTheme = localStorage.getItem('darkTheme');

    if (savedTheme === 'true') {
        body.classList.add('dark-theme');
        document.getElementById('theme-toggle').textContent = '🌞'; // Ícone de sol para tema escuro
    } else {
        body.classList.remove('dark-theme');
        document.getElementById('theme-toggle').textContent = '🌓'; // Ícone de lua para tema claro
    }
}

// Adiciona o evento de clique ao botão de alternar tema
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Carrega o tema salvo ao carregar a página
    loadTheme();
});