const dv = document.querySelector('.detailView');
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('colorBar')){
        if(e.target.classList.contains('firCB')){
            var prod = document.querySelectorAll('.product');
            var cb = e.target.parentNode.children;
            if(!prod[0].classList.contains('active')){
                for(var i=0; i<prod.length; i++){
                    prod[i].classList.remove('active');
                    cb[i].classList.remove('active');
                };
                prod[0].classList.add('active');
                cb[0].classList.add('active');
                window.scrollTo({top:dv.offsetTop, behavior: 'smooth'});
            }
        } else if(e.target.classList.contains('secCB')){
            var prod = document.querySelectorAll('.product');
            var cb = e.target.parentNode.children;
            if(!prod[1].classList.contains('active')){
                for(var i=0; i<prod.length; i++){
                    prod[i].classList.remove('active');
                    cb[i].classList.remove('active');
                };
                prod[1].classList.add('active');
                cb[1].classList.add('active');
                window.scrollTo({top:dv.offsetTop, behavior: 'smooth'});
            }    
        } else if(e.target.classList.contains('thrCB')){
            var prod = document.querySelectorAll('.product');
            var cb = e.target.parentNode.children;
            if(!prod[2].classList.contains('active')){
                for(var i=0; i<prod.length; i++){
                    prod[i].classList.remove('active');
                    cb[i].classList.remove('active');
                };
                prod[2].classList.add('active');
                cb[2].classList.add('active');
                window.scrollTo({top:dv.offsetTop, behavior: 'smooth'});
            }    
        }
    }
});