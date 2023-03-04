const adventurers = [
  {
    name: "Flame of the Evading Desert",
    class: "Rogue",
    level: 6,
  },
  {
    name: "Zog Mothra",
    class: "Wizard",
    level: 3,
  },
  {
    name: "Jampa",
    class: "Barbarian",
    level: 5,
  },
  {
    name: "Jazrik",
    class: "Wizard",
    level: 5,
  },
];

let filterResult = adventurers.filter((e) => e.level > 1 && e.level < 4);
console.log(filterResult);
filterResult = adventurers.filter(function (a) {
  return a.level > 1 && a.level < 4;
});
console.log(filterResult);

let findResult = adventurers.find((e) => e.level === 5);
console.log(findResult);
