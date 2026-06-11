// 1. Die Konfiguration (später auslagern)

// as const sorgt dafür, dass TypeScript die Werte
// als unveränderliche Literaltypen (sind Typen die genau einen konkreten Wert erlauben) behandelt.
const Schweregrad = {
  Task: { title: "Task Quest", xp: 5 },
  Side: { title: "Nebenquest", xp: 10 },
  Main: { title: "Hauptquest", xp: 15 },
  Instance: { title: "Instance Quest", xp: 20 },
  Boss: { title: "World Boss Quest", xp: 30 },
} as const;

/*
type QuestType = keyof typeof Schweregrad;
// Erzeuge mir einen Typen aus allen Schlüsseln des Objekts Schweregrad
type Task = { // Task hat den type
  title: string; // title = string
  difficulty: QuestType; // difficulty = QuestType = Schweregerad
};
type Side = {
  title: string;
  difficulty: QuestType;
};
type Main = {
  title: string;
  difficulty: QuestType;
};
type Instance = {
  title: string;
  difficulty: QuestType;
};
type Boss = {
  title: string;
  difficulty: QuestType;
};
// das war die reine typisierung der Title und Schweregrade.
*/
