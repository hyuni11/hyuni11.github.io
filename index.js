const btns = document.querySelectorAll(".act-zone .btn");
const dots = document.querySelectorAll(".act-zone .dot");
const views = document.querySelectorAll(".act-zone .view");

for (let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(e){
        for(let j=0; j<btns.length; j++){
            btns[j].classList.remove('active');
        }
        btns[i].classList.add('active');
        together();
    })
}

function together(){
    if(btns[0].classList.contains('active')){
        for(var i=0; i<dots.length; i++){
            dots[i].classList.remove('active');
        }
        for(var j=0; j<views.length; j++){
            views[j].classList.remove('active');
        }
        document.querySelector('.prof-dot').classList.add('active');
        document.querySelector('.prof-view').classList.add('active');
    } else if(btns[1].classList.contains('active')){
        for(var k=0; k<dots.length; k++){
            dots[k].classList.remove('active');
        }
        for(var l=0; l<views.length; l++){
            views[l].classList.remove('active');
        }
        document.querySelector('.proj-dot').classList.add('active');
        document.querySelector('.proj-view').classList.add('active');
    } else if(btns[2].classList.contains('active')){
        for(var n=0; n<dots.length; n++){
            dots[n].classList.remove('active');
        }
        for(var m=0; m<views.length; m++){
            views[m].classList.remove('active');
        }
        document.querySelector('.skill-dot').classList.add('active');
        document.querySelector('.skill-view').classList.add('active');
    }
}

// slide
const cardz = document.querySelector('.card-zone');
const card = document.querySelectorAll('.card');
const cardCount = card.length;
const cardWidth = 320;
const cardMargin = 40;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
var currentIdx = 0;

Cloning();

function Cloning(){
    for(var i=0; i<cardCount; i++){
        var cloneCard = card[i].cloneNode(true);
        cloneCard.classList.add('clone');
        cardz.appendChild(cloneCard);
    }
    for(var i=cardCount-1; i>=0; i--){
        var cloneCard = card[i].cloneNode(true);
        cloneCard.classList.add('clone');
        cardz.prepend(cloneCard);
    }
    updateWidth();
    settingPos();
    
    setTimeout(function(){
        cardz.classList.add('animated');
    },100);
}
function updateWidth(){
    var newCardCount = document.querySelectorAll('.card-zone li').length;
    var newWidth = (cardWidth + cardMargin) * newCardCount + 'px';
    cardz.style.width = newWidth;
}
function settingPos(){
    var defaultSetVal = -(cardWidth + cardMargin) * cardCount;
    cardz.style.transform = 'translateX(' + defaultSetVal + 'px)';
}

next.addEventListener('click', function(){
    moveCard(currentIdx + 1);
});
prev.addEventListener('click', function(){
    moveCard(currentIdx - 1);
});

function moveCard(num){
    cardz.style.left = -num * (cardWidth + cardMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, cardCount)
    if(currentIdx == cardCount || currentIdx == -cardCount){
        setTimeout(function(){
            cardz.classList.remove('animated');
            cardz.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            cardz.classList.add('animated');
        }, 510);
    }
}