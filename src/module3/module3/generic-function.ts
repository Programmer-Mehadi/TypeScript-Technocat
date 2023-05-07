// arrow function

const createArray = <T>(param: T): T[] => {
  return [param];
};

const genericFunctionArray = createArray<string>("true");
