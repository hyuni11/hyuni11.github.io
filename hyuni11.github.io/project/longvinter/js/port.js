import VendingMachines from "./vendingMachine.js";

const Ports = {
    "sgt":{
      name: "sgt.Lake's Outpost",
      site: "14ºS / 6ºW",
      map: "./img/map/sgt.png",
      vendingMachine: [
        VendingMachines["sgt1"],
        VendingMachines["sgt2"],
        VendingMachines["sgt3"],
        VendingMachines["sgt4"]
      ]
    },
    "tim":{
      name: "Tim's Outpost",
      site: "3ºN / 25ºW",
      map: "./img/map/tim.png",
      vendingMachine: [VendingMachines["tim"]]
    },
    "sirola":{
      name: "Sirola's Secret Shop",
      site: "9ºN / 8ºE",
      map: "./img/map/sirola.png",
      vendingMachine: [VendingMachines["sirola"]]
    },
    "snow":{
      name: "Mrs. Snow's Outpost",
      site: "25ºS / 2ºE",
      map: "./img/map/snow.png",
      vendingMachine: [VendingMachines["snow"]]
    },
    "kyrres":{
      name: "Kyrres Base Camp",
      site: "29ºN / 2ºE",
      map: "./img/map/kyrres.png",
      vendingMachine: [
        VendingMachines["kyrres1"],
        VendingMachines["kyrres2"],
        VendingMachines["kyrres3"],
        VendingMachines["kyrres4"]
      ]
    },
    "artur":{
      name: "Artur's Outpost",
      site: "25ºS / 17ºE",
      map: "./img/map/artur.png",
      vendingMachine: [VendingMachines["artur"]]
    },
    "filemon":{
        name: "Filemon's Outpost",
        site: "15ºS / 26ºE",
        map: "./img/map/filemon.png",
        vendingMachine: [VendingMachines["filemon"]]
    },
    "diogo":{
        name: "Diogo's Docks",
        site: "11ºS / 37ºW",
        map: "./img/map/diogo.png",
        vendingMachine: [
          VendingMachines["diogo1"],
          VendingMachines["diogo2"]
        ]
    },
    "hemio":{
        name: "Hemio & Rose",
        site: "3ºN / 28ºE",
        map: "./img/map/hemio.png",
        vendingMachine: [VendingMachines["hemio"]]
    },
    "heisala":{
      name: "Heisala Harbor",
      site: "34ºS / 34ºE",
      map: "./img/map/heisala.png",
      vendingMachine: [VendingMachines["heisala"]]
    },
    "koilot":{
      name: "Koilot Harbor",
      site: "9ºN / 27ºE",
      map: "./img/map/koilot.png",
      vendingMachine: [VendingMachines["koilot"]]
    },
    "padva":{
      name: "Padva Harbor",
      site: "11ºS / 52ºW",
      map: "./img/map/padva.png",
      vendingMachine: [VendingMachines["padva"]]
    },
    "pix":{
      name: "Pix's Island",
      site: "23ºS / 30ºE",
      map: "./img/map/pix.png",
      vendingMachine: [VendingMachines["pix"]]
    }
}

export default Ports;