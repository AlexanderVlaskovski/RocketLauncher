class Rocket {
    constructor(name, fuel) {
        this.name = name;
        this.fuel = Number(fuel);
        this.land = false;
        this.flag = false;
    }

    set flag(f){
        return this._flag = f;
    }
    get flag(){
        return this._flag;
    }

    set land(t){
        return this._land = t;
    }

    get land(){
        return this._land;
    }

    set fuel(f) {
        if (f < 0) {
            throw new Error('Fuel must be a positive number!');
        }
       return this._fuel = f;
    }

    get fuel() {
        return this._fuel;
    }

    set name(n) {
        return this._name = n;
    }

    get name() {
        return this._name;
    }

    landRocket(){
        this.land = true;
    }



    takeOff() {

        let that = this;

            let interval = setInterval(() => {
                if (that.fuel === 0 || that.land === true) {
                    that.flag = true;
                    clearInterval(interval);

                }
                else {
                    that.fuel--;
                    console.log(that.fuel);
                }
            }, 1000)

    }

}