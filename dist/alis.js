"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "Web Developer",
};
const crush2 = {
    name: "Moina Pakhi 2",
    age: 23,
    profession: "Web Developer",
};
const isCrushMarried = false;
const courseName = "Next Level Web Development";
const calculate = (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
};
calculate(10, 30);
const numberCalculate = (a, b, operation) => {
    return operation(a, b);
};
numberCalculate(35, 15, (x, y) => x + y);
