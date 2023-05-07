type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}
type NextLeevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Mehadi",
  expertise: "JavaScript",
  experience: 1,
};

const developer: NextLeevelDeveloper = {
  name: "Muhammad Mehadi",
  experience: 2,
  expertise: "TypeScript",
  leaderShipExperience: 1,
  level: Level.senior,
};
