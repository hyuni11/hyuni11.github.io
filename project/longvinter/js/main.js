import Ports from "./port.js";
import NPCs from "./npc.js";

const portList = document.querySelector('.portList');
const npcList = document.querySelector('.npcList');

const sch = document.querySelector('#search');
const schVal = document.querySelector('.schValue');

const bannerz = document.querySelector('.banner');
const banner = document.querySelectorAll('.bannerImg');
const bannerCount = banner.length;
const bannerWidth = 880;
const bannerMargin = 200;
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
var currentIdx = 0;

Cloning();
showList();

document.addEventListener('click', (e) => {
    e.preventDefault;
    const realTarget = e.target.parentNode;
    if(realTarget == leftBtn){
        movebanner(currentIdx - 1)
    }
    if(realTarget == rightBtn){
        movebanner(currentIdx +1)
    }

    //port active
    const port = document.querySelectorAll('.port');
    if (realTarget.classList.contains('port')) {
        for (var i = 0; i < port.length; i++) {
            for (var j = 0; j < port[i].childNodes[5].childNodes.length; j++) {
                if (port[i].classList.contains('active')) {
                    var k = j + 1;
                    port[i].classList.remove('active');
                    port[i].childNodes[6].classList.remove('active');
                    port[i].childNodes[5].childNodes[j].classList.remove('active');
                    port[i].childNodes[6].childNodes[k].classList.remove('active');
                }
            }
        }
        realTarget.classList.add('active');
        realTarget.childNodes[5].childNodes[0].classList.add('active');
        realTarget.childNodes[6].classList.add('active');
        realTarget.childNodes[6].childNodes[1].classList.add('active');
    }
    //npc active
    const npc = document.querySelectorAll('.npc');
    if (realTarget.classList.contains('npc')) {
        for (var i = 0; i < npc.length; i++) {
            for (var j = 0; j < npc[i].childNodes[5].childNodes.length; j++) {
                if (npc[i].classList.contains('active')) {
                    var k = j + 1;
                    npc[i].classList.remove('active');
                    npc[i].childNodes[6].classList.remove('active');
                    npc[i].childNodes[5].childNodes[j].classList.remove('active');
                    npc[i].childNodes[6].childNodes[k].classList.remove('active');
                }
            }
        }
        realTarget.classList.add('active');
        realTarget.childNodes[5].childNodes[0].classList.add('active');
        realTarget.childNodes[6].classList.add('active');
        realTarget.childNodes[6].childNodes[1].classList.add('active');
    }

    if (realTarget.classList.contains('vmIcon')) {
        const icons = document.querySelectorAll('.iconList');
        const vms = document.querySelectorAll('.vmList');
        if (realTarget.parentNode.parentNode.classList.contains('active')) {
            for (var k = 0; k < icons.length; k++) {
                for (var i = 0; i < icons[k].childNodes.length; i++) {
                    var j = i + 1;
                    if (icons[k].childNodes[i].classList.contains('active')) {
                        icons[k].childNodes[i].classList.remove('active');
                        vms[k].childNodes[j].classList.remove('active');
                    }
                }
            }
            const vmNum = Number(realTarget.classList[1]);
            realTarget.classList.add('active');
            realTarget.parentNode.nextSibling.childNodes[vmNum + 1].classList.add('active');
        }
    }

    if (realTarget.classList.contains('closeBtn')) {
        realTarget.parentNode.parentNode.classList.remove('active');
        realTarget.parentNode.nextSibling.classList.remove('active');
        for (var i = 0; i < realTarget.parentNode.childNodes.length; i++) {
            realTarget.parentNode.childNodes[i].classList.remove('active');
            realTarget.parentNode.nextSibling.childNodes[i].classList.remove('active');
        }
    }

    //SEARCH
    if (realTarget.id == 'schBtn') {
        const val = sch.value;
        const result = document.querySelectorAll('.result');
        for(var i=0; i<result.length; i++){
            result[i].remove();
        }
        search(val);
    }

    if(e.target.classList.contains('result')){
        const activer = e.target.getAttribute('activer')
        for(var i=0; i<port.length; i++){
            for(j=0; j<npc.length; j++){
                if(port[i].id.includes(activer)){
                    port[i].classList.add('active');
                    port[i].childNodes[5].childNodes[0].classList.add('active');
                    port[i].childNodes[6].classList.add('active');
                    port[i].childNodes[6].childNodes[1].classList.add('active');
                }
                if(npc[j].id.includes(activer)){
                    npc[j].classList.add('active');
                    npc[j].childNodes[5].childNodes[0].classList.add('active');
                    npc[j].childNodes[6].classList.add('active');
                    npc[j].childNodes[6].childNodes[1].classList.add('active');
                }
            }
        }
    } else if (realTarget.classList.contains('result')){
        const activer = realTarget.getAttribute('activer')
        for(var i=0; i<port.length; i++){
            for(j=0; j<npc.length; j++){
                if(port[i].id.includes(activer)){
                    port[i].classList.add('active');
                    port[i].childNodes[5].childNodes[0].classList.add('active');
                    port[i].childNodes[6].classList.add('active');
                    port[i].childNodes[6].childNodes[1].classList.add('active');
                }
                if(npc[j].id.includes(activer)){
                    npc[j].classList.add('active');
                    npc[j].childNodes[5].childNodes[0].classList.add('active');
                    npc[j].childNodes[6].classList.add('active');
                    npc[j].childNodes[6].childNodes[1].classList.add('active');
                }
            }
        }
    }
})

function Cloning(){
    for(var i=0; i<bannerCount; i++){
        var clonebanner = banner[i].cloneNode(true);
        clonebanner.classList.add('clone');
        bannerz.appendChild(clonebanner);
    }
    for(var i=bannerCount-1; i>=0; i--){
        var clonebanner = banner[i].cloneNode(true);
        clonebanner.classList.add('clone');
        bannerz.prepend(clonebanner);
    }
    updateWidth();
    settingPos();
    
    setTimeout(function(){
        bannerz.classList.add('animated');
    },100);
}
function updateWidth(){
    var newbannerCount = document.querySelectorAll('.banner li').length;
    var newWidth = (bannerWidth + bannerMargin) * newbannerCount + 'px';
    bannerz.style.width = newWidth;
}
function settingPos(){
    var defaultSetVal = -(bannerWidth + bannerMargin) * bannerCount;
    bannerz.style.transform = 'translateX(' + defaultSetVal + 'px)';
}

function movebanner(num){
    bannerz.style.left = -num * (bannerWidth + bannerMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, bannerCount)
    if(currentIdx == bannerCount || currentIdx == -bannerCount){
        setTimeout(function(){
            bannerz.classList.remove('animated');
            bannerz.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            bannerz.classList.add('animated');
        }, 510);
    }
}

function showList() {
    // portList.innerHTML += '';
    const allPort = Object.keys(Ports);
        for (var i = 0; i < allPort.length; i++) {
            const li = document.createElement('li');
            li.className += `port`;
            li.id = allPort[i];
            li.innerHTML += `
            <span class = 'Site'>`+ Ports[allPort[i]].site + `</span>
            <span class = 'Name'>`+ Ports[allPort[i]].name + `</span>
            `;
            const portVM = Ports[allPort[i]].vendingMachine;
            const div = document.createElement('div');
            const vmList = document.createElement('div');
            vmList.className += 'vmList'
            vmList.innerHTML += `<img class='map' src=` + Ports[allPort[i]].map + `>`
            div.className += 'iconList'
            for (var j = 0; j < portVM.length; j++) {
                div.innerHTML += `<span class='vmIcon ` + j + `'><i class="fa-solid fa-store" style="color:` + Ports[allPort[i]].vendingMachine[j].color + `"></i></span>`
                const ul = document.createElement('ul');
                ul.className += 'vm ' + portVM[j].color + ''
                ul.innerHTML += `<h3 class='blTitle'>Buy List</h3>`
                for (var k = 0; k < portVM[j].buy.length; k++) {
                    const prod = document.createElement('li');
                    const buyProd = portVM[j].buy[k];
                    prod.className += 'product buy'
                    prod.innerHTML += `
                    <span class='prodName'>`+ buyProd.name + `</span>
                    <span class='prodPrice'>`+ buyProd.price + `</span>
                    `
                    ul.appendChild(prod);
                }
                ul.innerHTML += `<h3 class='slTitle'>Sell List</h3>`
                for (var l = 0; l < portVM[j].sell.length; l++) {
                    const prod = document.createElement('li');
                    const sellProd = portVM[j].sell[l];
                    prod.className += 'product sell'
                    prod.innerHTML += `
                    <span class='prodName'>`+ sellProd.name + `</span>
                    <span class='prodPrice'>`+ sellProd.price + `</span>
                    `
                    ul.appendChild(prod);
                }
                vmList.appendChild(ul);
            }
            div.innerHTML += `<span class='closeBtn'><i class="fa-solid fa-xmark"></i></span>`
            li.appendChild(div);
            li.appendChild(vmList);
            portList.appendChild(li);
        }

    // npcList.innerHTML += '';
    const allNPC = Object.keys(NPCs);
        for (var i = 0; i < allNPC.length; i++) {
            const li = document.createElement('li');
            li.className += `npc`;
            li.id = allNPC[i];
            li.innerHTML += `
            <span class = 'Site'>`+ NPCs[allNPC[i]].site + `</span>
            <span class = 'Name'>`+ NPCs[allNPC[i]].name + `</span>
            `;
            const npcVM = NPCs[allNPC[i]].vendingMachine;
            const div = document.createElement('div');
            const vmList = document.createElement('div');
            vmList.className += 'vmList'
            vmList.innerHTML += `<img class='map' src=` + NPCs[allNPC[i]].map + `>`
            div.className += 'iconList'
            for (var j = 0; j < npcVM.length; j++) {
                if ((npcVM[j].color) == 'npcs') {
                    div.innerHTML += `<span class='vmIcon ` + j + `'><i class="fa-solid fa-user"></i></span>`
                } else {
                    div.innerHTML += `<span class='vmIcon ` + j + `'><i class="fa-solid fa-store" style="color:` + NPCs[allNPC[i]].vendingMachine[j].color + `"></i></span>`
                }
                const ul = document.createElement('ul');
                ul.className += 'vm ' + npcVM[j].color + ''
                ul.innerHTML += `<h3 class='blTitle'>Buy List</h3>`
                for (var k = 0; k < npcVM[j].buy.length; k++) {
                    const prod = document.createElement('li');
                    const buyProd = npcVM[j].buy[k];
                    prod.className += 'product buy'
                    prod.innerHTML += `
                    <span class='prodName'>`+ buyProd.name + `</span>
                    <span class='prodPrice'>`+ buyProd.price + `</span>
                    `
                    ul.appendChild(prod);
                }
                ul.innerHTML += `<h3 class='slTitle'>Sell List</h3>`
                for (var l = 0; l < npcVM[j].sell.length; l++) {
                    const prod = document.createElement('li');
                    const sellProd = npcVM[j].sell[l];
                    prod.className += 'product sell'
                    prod.innerHTML += `
                    <span class='prodName'>`+ sellProd.name + `</span>
                    <span class='prodPrice'>`+ sellProd.price + `</span>
                    `
                    ul.appendChild(prod);
                }
                vmList.appendChild(ul);
            }
            div.innerHTML += `<span class='closeBtn'><i class="fa-solid fa-xmark"></i></span>`
            li.appendChild(div);
            li.appendChild(vmList);
            npcList.appendChild(li);
        }
    
}

function search(val) {
    const prod = document.querySelectorAll('.product');
    for(var i=0; i<prod.length; i++){
        const from = prod[i].parentNode.parentNode.parentNode.id;
        const prType = prod[i].classList[1];
        const name = prod[i].childNodes[1].innerHTML;
        const price = prod[i].childNodes[3].innerHTML;
        if(val == ''){
        } else if (name.includes(val)) {
            if(prType == 'buy'){
                var prTypeText = '구매';
            } else if(prType == 'sell'){
                prTypeText = '판매';
            }
            const res = document.createElement('a');
            res.className += 'result'
            res.setAttribute('activer', from)
            res.href = '#'+from+''
            res.innerHTML += `
            <span class='mainres resName'>상품명 : `+name+`</span>
            <span class = 'mainres resPrice'> 가격 :  `+ price +`</span>
            <span>`+prTypeText+`처 : `+from+`</span>
            <span>`+prTypeText+`가능 상품. </span>`;
            schVal.appendChild(res);
        }
    }
}