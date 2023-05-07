// keyof guard

type Alphaneumarics = string | number;

function add(param1: Alphaneumarics, param2: Alphaneumarics): Alphaneumarics {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add("1", "2"));

// in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return `I am admin and my role ${user.role}.`;
  } else {
    return `I am Normal user.`;
  }
}

const normalUser1: NormalUserType = {
  name: "Normal User",
};
const adminUser1: AdminUserType = {
  name: "Normal User",
  role: "admin",
};

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// instaceof guard

class AnimalClass {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`I am making sound`);
  }
}

class Dog extends AnimalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am making Barking`);
  }
}
class Cat extends AnimalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log(`I am making Meawing`);
  }
}

const dog2 = new Dog("Tommy", "4 legs");
// dog2.makeSound();
// dog2.makeBark();

const cat2 = new Cat("Kitty", "4 legs");
// cat2.makeSound();
// cat2.makeMeaw();

//

function isDog(animal: AnimalClass): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: AnimalClass): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: AnimalClass) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

getAnimal(dog2);
getAnimal(cat2);
