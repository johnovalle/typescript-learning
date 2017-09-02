class Car {
    //public brandName: string;
    private static SERIES_NUMBER = 0;

    private _seriesNumber: number;

    private _ownerName: string;

    // constructor(public brandName: string){ //public keyword is short for assignment
    //     //this.brandName = brandName;
    //     Car.SERIES_NUMBER++;
    //     this._seriesNumber = Car.SERIES_NUMBER;
    // }

    private constructor(public brandName: string){
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }

    public static BuildCar(brandName: string): Car {
        return new Car(brandName);
    }

    public static BuyCar(brandName: string, ownerName: string): Car {
        let car = new Car(brandName);
        car.ownerName = ownerName;

        return car;
    }

    public startCar(): void {
        this._startEngine();
    }
    private _startEngine(): void {}

    public get seriesNumber(): number {
        return this._seriesNumber;
    }

    public get ownerName(): string {
        return this._ownerName;
    }
    public set ownerName(name: string) {
        this._ownerName = name;
    }
}

//let car = new Car("Audi");
let car = Car.BuyCar("Audi", "John");
car.startCar();
console.log("Brand 1: ", car.brandName);
console.log("Series #: ", car.seriesNumber);
console.log("Owner: ", car.ownerName);

//let car2 = new Car("Toyota");
let car2 = Car.BuyCar("Mustang", "Rina");
console.log("Brand 2: ", car2.brandName);
console.log("Series #: ", car2.seriesNumber);
console.log("Owner: ", car2.ownerName);