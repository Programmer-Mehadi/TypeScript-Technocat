// video 5 start

function add1(a: number, b: number): number {
  let sum = a + b;
  return sum;
}

add1(10, 20);

const array = [1, 2, 3, 4];

const newArray = array.map((e: number) => e * e);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Mehadi",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};

// video 5 end

// video 6 start

// spread operator
const myFriends = ["Sajib", "Arko", "Mahfuz"];
const newFriends = ["Mamun", "Rakib"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends: string[]): void => {
  console.log(
    `My Greet Friends: \n${friends[0]},\n${friends[1]},\n${friends[2]}`
  );
};

const myF = ["Likhon", "Arko", "Mahfuz"];
greetFriends(...myF);
// video 6 end
