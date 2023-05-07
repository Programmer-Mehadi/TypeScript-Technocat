class Animal {
  name: string;
  species: String;
  sound: String;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const cat = new Animal("Cat", "4 legs", "Maow");
const dog = new Animal("Dog", "4 legs", "Gau Gau");

cat.makeSound();
dog.makeSound();
