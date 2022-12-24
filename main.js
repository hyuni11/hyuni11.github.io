document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.click');
    const prof = document.querySelector('.prof');
    const header = document.querySelector('.header');
    const h_b = document.querySelector('.h_b');
    const h_t = document.querySelector('.h_t');

    openBtn.addEventListener('click', function(e){
        prof.classList.toggle('open')
        header.classList.toggle('open')

        if (!document.querySelector('.open')) {
            h_t.style.color = '#25442F';
            h_b.style.color = '#fffff0';
            h_b.style.background = '#25442F';
        } else {
            h_t.style.color = '#fffff0';
            h_b.style.color = '#25442F';
            h_b.style.background = '#fffff0';
        }
    });
});