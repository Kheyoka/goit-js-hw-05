'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }
  constructor(Car) {
    this.speed = 0;
    this._price = Car.price;
    this.maxSpeed = Car.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this.isOn = true;
    return true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return false;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if ((this.isOn = true)) {
      this.distance = hours * this.speed + this.distance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
