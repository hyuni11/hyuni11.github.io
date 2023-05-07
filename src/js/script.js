import Badges from "./badge.js"

const bgZone = document.querySelector('.badgesZone');
const useSkills = document.querySelectorAll('.useSkills');

showBadges();

function showBadges() {
    const allBadges = Object.keys(Badges);
    for (var i = 0; i < allBadges.length; i++) {
        const div = document.createElement('div');
        div.className += 'badge';
        div.innerHTML += `<img class="badgeLogo" src=` + Badges[allBadges[i]].logo + ` alt="badgeLogo"/>
            <span class="badgeName content">`+ Badges[allBadges[i]].name + `</span>`;
        div.style.background = Badges[allBadges[i]].colorCode;

        bgZone.appendChild(div);
    }

    for (var i=0; i<useSkills.length; i++){
        const useBadge = useSkills[i].getElementsByClassName('badge');
        for( var j=0; j<useBadge.length; j++){
            const bt = useBadge[j].getAttribute("bgtype");
            useBadge[j].innerHTML += `
            <img class="badgeLogo" src=` + Badges[bt].logo + ` alt="badgeLogo"/>
            <span class="badgeName content">`+ Badges[bt].name + `</span>
            `
            useBadge[j].style.background = Badges[bt].colorCode;
        }
    }
    
}