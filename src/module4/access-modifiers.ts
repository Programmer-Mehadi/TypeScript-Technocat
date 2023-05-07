class BankAccount {
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
  getBalance() {
    console.log(`my Balance is ${this.balance}`);
  }
  addDeposite(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.age = 45;
    console.log(this.age);
  }
}

const myAccount = new BankAccount(444, "Mehadi", 23, 40000);
myAccount.getBalance();
// myAccount.balance = 0; //can change value
myAccount.getBalance();
myAccount.addDeposite(3000);
myAccount.getBalance();

const sAccount = new StudentAccount(444, "Mehadi", 23, 40000);
sAccount.test();
