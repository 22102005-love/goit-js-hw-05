"use script";
class Car {
  static getSpecs(car) {
    console.log(car);
  }
  constructor(object) {
    this.maxSpeed = object.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = object.price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    let resultSpeed = this.speed + value;
    if (resultSpeed <= this.maxSpeed) {
      this.speed = resultSpeed;
    }
  }
  decelerate(value) {
    if (this.speed > 0) {
      this.speed = this.speed - value;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
