// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = { name: "Car", model: "2000" };

//

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log("Engine start");
//   }
//   move(): void {
//     console.log("moving");
//   }
//   stopEngine(): void {
//     console.log("stop engine");
//   }
//   text() {
//     console.log("I am for testing purpose.");
//   }
// }

// const vehicle1 = new Vehicle("Car", "Toyota", 4000);

// abstract class

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  move(): void {
    console.log("moving");
  }
  abstract stopEngine(): void;
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Engine start");
  }

  stopEngine(): void {
    console.log("stop engine");
  }
}

const car1 = new Car("Car", "Honda", 2015);

car1.startEngine();
