import Ports from "./port.js";
import NPCs from "./npc.js";

const portList = document.querySelector('.portList');
const npcList = document.querySelector('.npcList');

const sch = document.querySelector('#search');
const schType = document.querySelector('#schType');
const schVal = document.querySelector('.schValue');

showList();

document.addEventListener('click', (e) => {
    e.preventDefault;
    const realTarget = e.target.parentNode;
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
        const type = schType.value;
        const val = sch.value;
        search(type, val);
    }

})

function showList(type, val, count) {
    // portList.innerHTML += '';
    const allPort = Object.keys(Ports);
        for (var i = 0; i < allPort.length; i++) {
            const li = document.createElement('li');
            li.className += `port ` + allPort[i] + ``;
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
            li.className += `npc ` + allNPC[i] + ``;
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

function search(type, val) {
    const allPort = Object.keys(Ports);
    const allNPC = Object.keys(NPCs);
    if (!val) {
        console.log('ddd')
    } else {
        for (var i = 0; i < allPort.length; i++) {
            const vm = Ports[allPort[i]].vendingMachine;
            for (var j = 0; j < vm.length; j++) {
                if (type = 'Buyer') {
                    for (var k = 0; k < vm[j].sell.length; k++) {
                        const sellProd = vm[j].sell[k];
                        const price = sellProd.price;
                        const name = sellProd.name;
                        if (name.includes(val)) {
                            const bestPrice = [];
                            bestPrice.push(price)
                            Math.max(bestPrice)
                            const div = document.createElement('div');
                            div.className += 'schRes'

                        } else {
                        }
                    }
                }
            }
        }

    }
}