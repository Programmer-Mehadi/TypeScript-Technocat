// constraints make a generic more meaningful

const addMeIntoCruchMind = <T extends MyInfoType>(myInfo: T) => {
  const crush = "Sai Pallavi";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};

const myInfo: MyInfoType = {
  name: "Mehadi",
  age: 23,
  salary: 80000,
};

const result = addMeIntoCruchMind(myInfo);
