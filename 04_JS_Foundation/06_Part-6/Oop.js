let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    start: function () {
      return `${this.make} car got started in ${this.year}`;
    },
  };
  
  // console.log(car.start());
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let john = new Person("John", 20);
  // console.log(john);
  
  function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function () {
    return `${this.type} makes a sound`;
  };
  
  Array.prototype.devendra = function () {
    return `Custom method ${this}`;
  };
  
  let myArray = [1, 2, 3];
  // console.log(myArray.devendra());
  
  let myNewArray = [1, 2, 3, 4, 5, 6];
  // console.log(myArray.devendra());
  
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      return `${this.model} is car from ${this.make} `;
    }
  }
  
  // Inheritance
  
  class Car extends Vehicle {
    drive() {
      return `${this.make} : This is an inheritance example`;
    }
  }
  
  let myCar = new Car("Toyota", "Fortuner");
  // console.log(myCar);
  // console.log(myCar.start());
  // console.log(myCar.drive());
  
  let VehicleOne = new Vehicle("Toyota", "Fortuner");
  // console.log(VehicleOne);
  
  // Encapsulation
  
  class BankAccount {
    #balance = 0;
  
    deposite(amount) {
      this.#balance += amount;
      return this.#balance;
    }
  
    getBalance() {
      return `$ ${this.#balance}`;
    }
  }
  
  let account = new BankAccount();
  // console.log(account.getBalance());
  
  // Abstraction
  
  class CoffeeMachine {
    start() {
      // call
      // filter value
      return `Starting the machine..`;
    }
  
    brewCoffee() {
      // complex calculation
      return `Brewing coffee`;
    }
  
    pressStartButton() {
      let msgOne = this.start();
      let msgTwo = this.brewCoffee();
      return `${msgOne} + ${msgTwo}`;
    }
  }
  
  let myMachine = new CoffeeMachine();
  // console.log(myMachine.start());
  // console.log(myMachine.brewCoffee());
  // console.log(myMachine.pressStartButton());
  
  // Polymorphism
  
  class Bird {
    fly() {
      return `Flying ...`;
    }
  }
  
  class Penguine extends Bird {
    fly() {
      return `Penguines can't fly`;
    }
  }
  
  let bird = new Bird();
  let penguine = new Penguine();
  // console.log(bird.fly());
  // console.log(penguine.fly());
  
  // Static method
  
  class Calculator {
    static add(a, b) {
      return a + b;
    }
  }
  
  // let miniCalc = new Calculator();
  // console.log(miniCalc.add(2, 4));
  
  // console.log(Calculator.add(2, 5));
  
  // Getter & Setter
  
  class Employee {
    #salary;
    constructor(name, salary) {
      if (salary < 0) {
        throw new Error("Salary cannot be in negative");
      }
  
      this.name = name;
      this.#salary = salary;
    }
  
    get salary() {
      return `You are not allowed to see salary`;
    }
  
    set salary(value) {
      if (value < 0) {
        console.error("Invalid Salary");
      } else {
        this._salary = value;
      }
    }
  }
  
  let emp = new Employee("Alice", -50000);
  console.log(emp.salary);
  emp.salary = -60000;
  