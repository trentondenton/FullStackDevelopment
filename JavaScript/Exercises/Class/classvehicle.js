// Create a class that represents a Vehicle, it must have at least Two properties and One method. You can decide on the method.
// Create a subclass or "child" classes for a Car AND Truck.
// Car must have at least One unique property.
// Truck must have at least One unique property & Must include the ability to Tow, with method to "activate 4 wheel drive".
// Must have at least 2 instances of each Class.

class Vehicle {
  constructor(color, seats, canDrive = true) {
    this.color = color;
    this.seats = seats;
    this.canDrive = canDrive;
  }

  static isRunning(instance) {
    return instance.canDrive ? 'Is running!' : 'Is not running.';
  }
}

class Car extends Vehicle {
  constructor(color, seats, canDrive, turbo = false) {
    super(color, seats, canDrive);
    this.turbo = turbo;
  }
  activateTurbo() {
    return this.turbo ? 'turbo activated' : 'slow and steady';
  }
}

class Truck extends Vehicle {
  constructor(color, seats, canDrive, tow = false) {
    super(color, seats, canDrive);
    this.tow = tow;
  }

  canTow() {
    return this.tow ? 'This Truck can tow.' : 'This Truck cannot tow.';
  }

  activateFourWheelDrive() {
    return '4 Wheel Drive Activated'
  }
}

const vehicleInstance = new Vehicle('Black', 2);
console.log(vehicleInstance);
const vehicleInstanceTwo = new Vehicle('Grey', 5);
console.log(vehicleInstanceTwo);

const carInstance = new Car('Maroon', 5, true);
console.log(carInstance);
const carInstanceTwo = new Car('Red', 2, false, false);
console.log(carInstanceTwo);

const truckInstance = new Truck('Green', 5, true, true);
console.log(truckInstance);
console.log(truckInstance.activateFourWheelDrive)
const truckInstanceTwo = new Truck('Emerald', 5, false, false);
console.log(truckInstanceTwo);
console.log(truckInstanceTwo.moveForward())

console.log(Vehicle.isRunning(carInstance));
console.log(Vehicle.isRunning(carInstanceTwo));