const toggle = document.querySelector('.icon-container');
let body = document.body;

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});