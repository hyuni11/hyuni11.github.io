document.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('connect')){
        var link = e.target.getAttribute('connect');
        location.href = link + '.html'
    } else if(e.target.closest('li').hasAttribute('connect')){
        if(!e.target.classList.contains('colorBar')){
            var link = e.target.closest('li').getAttribute('connect');
            location.href = './detailPages/' + link + '.html'
        }
    }
});