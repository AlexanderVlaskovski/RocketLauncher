class Rocket {
    constructor(name, fuel) {
        this.name = name;
        this.fuel = Number(fuel);
        this.land = false;
    }

    set land(t) {
        this._land = t;
    }

    get land() {
        return this._land;
    }

    set fuel(f) {
        if (f < 0) {
            throw new Error('Fuel must be a positive number!');
        }
        this._fuel = f;
    }

    get fuel() {
        return this._fuel;
    }

    set name(n) {
        this._name = n;
    }

    get name() {
        return this._name;
    }

    landRocket() {
        this.land = true;
    }


    takeOff() {

        let that = this;

        return new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                if (that.fuel === 0 || that.land === true) {
                    resolve(`${that.fuel}`);
                    clearInterval(interval);
                }
                else {
                    that.fuel--;
                }
            }, 1000)

        });

    }
}
