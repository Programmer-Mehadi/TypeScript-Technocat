class Student {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number) {
    return `This ${this.name} will sleep for ${hours}.`;
  }
}

class Teacher extends Student {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  makeSleep(hours: number) {
    return `This ${this.name} will sleep for ${hours} for whole day.`;
  }
  takeClasses(numClass: number): string {
    return `This ${this.name} will take ${numClass} classes.`;
  }
}

//

const s = new Student("Mehadi", 23, "Lalbagh,Dhaka.");
console.log(s.makeSleep(7));

const t = new Teacher(
  "Mostafa Ahmed",
  54,
  "Azimpur,Dhaka.",
  "Assistant Teacher"
);

console.log(t.makeSleep(6));
console.log(t.takeClasses(4));
