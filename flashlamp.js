class FlashLamp {
    battery;

    constructor(battery) {
        this.battery = battery;
        this.status=true

    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    setBattery(battery) {
        this.battery = battery;
    }

    light() {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}
