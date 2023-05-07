class BankAccount1 {
  public readonly id: number;
  public name: string;
  protected age: number;
  private balance: number;
  //   balance: number;
  constructor(id: number, name: string, age: number, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.age = age;
  }
  //   getter
  get _balance(): number {
    return this.balance;
  }
  //   setter
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
  getBalance() {
    console.log(`my Balance is ${this.balance}`);
  }
  addDeposite(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentAccount1 extends BankAccount1 {
  test() {
    this.age = 45;
    console.log(this.age);
  }
}

const myAccount1 = new BankAccount1(444, "Mehadi", 23, 40000);
// get value
console.log(myAccount1._balance);
// set value
myAccount1.deposit = 300;
// get value
console.log(myAccount1._balance);
