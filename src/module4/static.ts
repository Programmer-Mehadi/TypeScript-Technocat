class Counter {
  // sokol intance er jonno smae thakbe, sokol instance e same value pabe.
  static counter: number = 0;

  inCrement(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  deCrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}

const c1 = new Counter();
const c2 = new Counter();
console.log(c1.inCrement());
console.log(c2.inCrement());
console.log(c2.inCrement());
console.log(c2.inCrement());
console.log(c2.inCrement());
console.log(c1.inCrement());
console.log(c1.inCrement());
console.log(c1.inCrement());
console.log(c1.inCrement());
console.log(c2.inCrement());
