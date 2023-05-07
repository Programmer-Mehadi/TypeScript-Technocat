const age: number = 26;

// if (age > 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult);

const isAuthenticatedUser: any = null;
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? "Mehadi" : "Guest";
console.log(userName, userName2);
console.log({ userName }, { userName2 });

//

type Manush = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No Road";
    home?: "";
  };
};

const manush1: Manush = {
  name: "Mehadi",
  age: 26,
  address: {
    city: "No City",
    road: "No Road",
  },
};

const home = manush1?.address?.home ?? "No Home";

console.log(home);
