let toggle = document.querySelector('.icon-container');
let btn = document.querySelector('.fa-moon');
let body = document.body;
let numbertimes = 0;
toggle.addEventListener('click', () => {
    numbertimes++;
    if (numbertimes % 2 == 0) {
        btn.classList.add('fa-solid');
        body.style.background = '#f9f9f9';
        body.style.color = '#222';
    }

    else {
        btn.classList.remove('fa-solid')
        body.style.background = '#222';
        body.style.color = '#f9f9f9';
    }
})