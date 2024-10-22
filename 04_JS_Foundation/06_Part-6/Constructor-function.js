function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  let myCar = new Car("Toyota", "Fortuner");
  // console.log(myCar);
  
  let myNewCar = new Car("Tata", "Safari");
  // console.log(myNewCar);
  
  function Tea(type) {
    this.type = type;
    this.describe = function () {
      return `This is a cup of ${this.type}.`;
    };
  }
  
  let myTea = new Tea("Lemon Tea");
  // console.log(myTea);
  // console.log(myTea.describe());
  
  function Animal(species) {
    this.species = species;
  }
  
  Animal.prototype.sound = function () {
    return `${this.species} makes a sound .`;
  };
  
  let dog = new Animal("Husky");
  console.log(dog);
  console.log(dog.sound());
  
  function Drink(name) {
    if (!new.target) {
      throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
  }
  
  let tea = new Drink("tea");
  let coffee = Drink("coffee");
  