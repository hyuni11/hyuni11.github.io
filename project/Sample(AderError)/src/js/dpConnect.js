document.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('connect')){
        var link = e.target.getAttribute('connect');
        location.href = '../' + link + '.html'
    }
});