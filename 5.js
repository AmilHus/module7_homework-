let pluginList = [];

class ElectricalDevices{
    constructor(name,power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn(){
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
        pluginList.push(this);
    }

    info(){
        for (let i in this){
              console.log(i + ":" + this[i]);
            }
          }
}

const tablet = new ElectricalDevices("tablet", 300);
const computer = new ElectricalDevices("computer", 500);
const phone = new ElectricalDevices("phone",100);

tablet.size = "1x10inch";
computer.weight = (0.5 + "kg");
phone.display = "IPS";

const GetAllPower = () => {
  let allPower = 0;
  pluginList.forEach(element => {
    allPower += element.power;
  });
  console.log("All Power:" + allPower + "Vt");
}

tablet.plugIn();
computer.plugIn();

tablet.info();
computer.info();
phone.info();

GetAllPower();