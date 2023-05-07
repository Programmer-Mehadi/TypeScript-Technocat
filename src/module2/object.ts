// video 4 start

const user: {
  name: string;
  age: number;
  isMarried: boolean;
  jobRole?: string;
  salary: any;
  readonly gender: string;
} = {
  name: "Mehadi",
  age: 26,
  isMarried: false,
  jobRole: "Front End Developer",
  salary: 18000,
  gender: "Male",
};

user.salary = 25000;
user.jobRole = "Full Stack Developer";
// video 4 end
