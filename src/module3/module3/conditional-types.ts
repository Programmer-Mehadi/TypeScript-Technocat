type a1 = string;
type a2 = a1 extends string ? string : null;
//
type a3 = undefined;
type a4 = number;
//
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

//

type Sheikh = {
  wife1: string;
  wife2: string;
};

// check korbe ei sheikh Type wife1 ace ki na .
type A = keyof Sheikh;
type CheckProperty<T, K> = K extends A ? true : false;

type checkWife1 = CheckProperty<Sheikh, "wife1">;
type checkWife2 = CheckProperty<Sheikh, "wife2">;
type checkWife3 = CheckProperty<Sheikh, "wife3">;
