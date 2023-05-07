//

interface IGeneric<w, c> {
  name: string;
  wife: w;
  child: c;
}

interface IWifeObject {
  name: string;
  age: number | null;
}

const data: IGeneric<IWifeObject, object> = {
  name: "Mehadi",
  wife: {
    name: "Jane na",
    age: null,
  },
  child: {
    numberOfChild: 0,
  },
};
