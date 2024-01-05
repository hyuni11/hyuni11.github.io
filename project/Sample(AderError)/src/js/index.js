// bestItem section 컬러 바 클릭으로 색상 전환 기능
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('colorBar')){
        if(e.target.classList.contains('firCB')){
            var prod = e.target.closest('.product');
            if(!prod.classList.contains('firCol')){
                prod.classList.remove('active');
                prod.parentNode.children[0].classList.add('active');
            }
        } else if(e.target.classList.contains('secCB')){
            var prod = e.target.closest('.product');
            if(!prod.classList.contains('secCol')){
                prod.classList.remove('active');
                prod.parentNode.children[1].classList.add('active');
            }
        }
    }
});

// bestItem section 'click' 전환 기능
let curr = 0;
const ib = document.querySelectorAll('.itemBar');
const bi = document.querySelectorAll('.bestItem');
const nextBtn = document.querySelector('.nextBtn > span');
const prevBtn = document.querySelector('.prevBtn > span');
const maxCurr = ib.length;

nextBtn.addEventListener('click', ()=>{
    nextMove();
});
prevBtn.addEventListener('click', ()=>{
    prevMove();
});

function nextMove(){
    curr ++;
    if(curr < maxCurr){
        ib[curr-1].classList.remove('active');
        bi[curr-1].classList.remove('active');
    } else if (curr === maxCurr) {
        ib[maxCurr-1].classList.remove('active');
        bi[maxCurr-1].classList.remove('active');
        curr = 0;
    }
    ib[curr].classList.add('active');
    bi[curr].classList.add('active');
}
function prevMove(){
    curr --;
    if (curr < 0){
        ib[0].classList.remove('active');
        bi[0].classList.remove('active');
        curr = maxCurr-1;
    } else if (curr >= 0){
        ib[curr+1].classList.remove('active');
        bi[curr+1].classList.remove('active');
    }
    ib[curr].classList.add('active');
    bi[curr].classList.add('active');
}

// 메인 페이지 하단부 미니 슬라이드 기능
const slide = document.querySelector('.slide');
let slideWidth = slide.clientWidth;
let slideItems = document.querySelectorAll(".slideItem");
const maxSlide = slideItems.length;
let currSlide = 1;

const pagination = document.querySelector(".slidePagination");
for (let i = 0; i < maxSlide; i++) {
    if (i === 0){pagination.innerHTML += `<li class="active">•</li>`}
    else {pagination.innerHTML += `<li>•</li>`};
}
const paginationItems = document.querySelectorAll(".slidePagination > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

let offset = slideWidth * currSlide;

slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});


setInterval(slideMove, 5000);

function slideMove() {
    currSlide ++;
    
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}