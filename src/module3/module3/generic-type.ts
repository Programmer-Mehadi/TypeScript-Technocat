// normal way
const rollNumbers: number[] = [1, 2, 3, 4, 5];
const rollNumbers2: string[] = ["1", "2", "3", "4", "5"];

//
const rollNumbers1: Array<number> = [1, 2, 3, 4, 5];
const rollNumbers12: Array<string> = ["1", "2", "3", "4", "5"];
const rollNumbers13: Array<boolean> = [true, false];
const useRollAndRoll1: Array<{ name: string; roll: number }> = [
  {
    name: "Mehadi",
    roll: 34,
  },
];

// generic way

type GenericArray = Array<number>;

const rollNumbers21: GenericArray = [1, 2, 3, 4, 5];

// generic way with arguants
type GenericArrayWithArguments<T> = Array<T>;

const rollNumbers22: GenericArrayWithArguments<string> = [
  "1",
  "2",
  "3",
  "4",
  "5",
];
const rollNumbers23: GenericArrayWithArguments<boolean> = [true, false];
//
type NameRollType = {
  name: string;
  roll: number;
};
const useRollAndRoll2: GenericArrayWithArguments<NameRollType> = [
  {
    name: "Mehadi",
    roll: 34,
  },
];

// multiple argumants start

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Mehadi", "Jane na"];

const relationWithSalary: GenericTuple<Object, string> = [
  { name: "Mehadi", salary: 80000 },
  "Jane na",
];
// this is more reasonable
const relationWithSalary2: GenericTuple<
  { name: string; salary: number },
  string
> = [{ name: "Mehadi", salary: 80000 }, "Jane na"];
// end
