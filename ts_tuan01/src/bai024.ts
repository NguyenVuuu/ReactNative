//24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.

abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Turn on fan");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Turn on air conditioner");
  }
}

const fan = new Fan();
fan.turnOn();

const airCond = new AirConditioner();
airCond.turnOn();
