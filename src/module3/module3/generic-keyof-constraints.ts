type person = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";
const a: newType = "age";

type newTypeUsingKeyOf = keyof person;
const b: newTypeUsingKeyOf = "age";

//

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const aa = {
  name: "Mr. X",
  age: 100,
};

const property = getProperty({ name: "Mr. X", age: 100 }, "age");
