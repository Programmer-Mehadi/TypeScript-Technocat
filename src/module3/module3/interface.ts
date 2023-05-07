// type alias

type User = {
  name: string;
  age: number;
};

type ExpendUser = User & {
  role: string;
};

const userWithTypeAlias: ExpendUser = {
  name: "Type alias",
  age: 23,
  role: "Admin",
};
userWithTypeAlias.name;

// interface
// only use object type
// Object , Fuction, Array
interface IUser {
  name: string;
  age: number;
}

const userWithInterface: IUser = {
  name: "Interface",
  age: 23,
};

userWithInterface.name;

// extend other type

interface IExtendUser extends IUser {
  role: string;
}

const newUser: IExtendUser = {
  name: "",
  age: 26,
  role: "Unknown",
};

// function
// type alias most prefer
type AddNumberType = (num1: number, num2: number) => number;

const addNum: AddNumberType = (num1, num2) => {
  return num1 + num2;
};

interface IAddNum {
  (num1: number, num2: number): number;
}

const addNumbers: IAddNum = (num1, num2) => {
  return num1 + num2;
};

// varibale
// use type alias
type TypeOfArray = number[];
const numberArray: TypeOfArray = [1, 2, 3, 4, 5, 6];

// use interfere

interface ITypeOfArray {
  [index: number]: number;
}

const numberArray2: ITypeOfArray = [1, 2, 3, 4, 5, 6];
