"use strict";
// video 5 start
function add(a, b) {
    let sum = a + b;
    return sum;
}
add(10, 20);
const array = [1, 2, 3, 4];
const newArray = array.map((e) => e * e);
const person = {
    name: "Mehadi",
    balance: 5,
    addBalance(money) {
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
const greetFriends = (...friends) => {
    console.log(`My Greet Friends: \n${friends[0]},\n${friends[1]},\n${friends[2]}`);
};
greetFriends("Likhon", "Arko", "Mahfuz");
// video 6 end
