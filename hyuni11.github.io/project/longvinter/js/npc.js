import VendingMachines from "./vendingMachine.js";

const NPCs = {
    "Angel":{
        name: "Angel",
        island: "Heisala",
        site: "37ºS / 27ºE",
        map: "./img/map/Angel.png",
        vendingMachine: [
            VendingMachines["Angel"],
            VendingMachines["Angel's vm1"],
            VendingMachines["Angel's vm2"]
        ]
    },
    "Filemon":{
        name: "Filemon",
        island: "Padva",
        site: "19ºS / 59ºW",
        map: "./img/map/Filemon(npc).png",
        vendingMachine: [
            VendingMachines["Filemon"],
            VendingMachines["Filemon's vm"]
            ]
    },
    "Lake":{
        name: "Lake",
        island: "Koilot",
        site: "16ºN / 38ºE",
        map: "./img/map/Lake.png",
        vendingMachine: [
            VendingMachines["Lake"],
            VendingMachines["Lake's vm1"],
            VendingMachines["Lake's vm2"]
        ]
    },
    "Hermit ":{
        name: "Hermit",
        island: "Skabban",
        site: "50ºN / 12ºE",
        map: "./img/map/Hermit.png",
        vendingMachine: [VendingMachines["Hermit"]]
    }
}

export default NPCs;