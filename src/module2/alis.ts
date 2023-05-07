type CrushType = {
  name: String;
  age: number;
  profession: string;
};

const crush1: CrushType = {
  name: "Moina Pakhi",
  age: 22,
  profession: "Web Developer",
};
const crush2: CrushType = {
  name: "Moina Pakhi 2",
  age: 23,
  profession: "Web Developer",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = "Next Level Web Development";

type CalculateType = number;
const calculate = (num1: number, num2: number): CalculateType => {
  console.log(num1 + num2);
  return num1 + num2;
};

calculate(10, 30);

//

type OperationType = (x: number, y: number) => number;
const numberCalculate = (a: number, b: number, operation: OperationType) => {
  return operation(a, b);
};

numberCalculate(35, 15, (x, y) => x + y);
