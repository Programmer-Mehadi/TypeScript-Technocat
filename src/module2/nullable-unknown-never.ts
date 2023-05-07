const searchName = (value: string) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching");
  }
};

searchName("mehadi");
searchName(null);

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    console.log((speed * 1000) / 3600);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    console.log((parseInt(value) * 1000) / 3600);
  }
};

getMyCarSpeed(20);
getMyCarSpeed("10 km^-1");

// function throwError(message: string): never {
//   throw new Error("Error is Mortal");
// }

// throwError("Error hoyeche");
