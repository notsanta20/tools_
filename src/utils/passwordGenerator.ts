import type { totalSize } from "../types/type";

const alphabets: Array<string> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers: Array<string> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const symbols: Array<string> = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "+",
  "=",
  "<",
  ">",
  "?",
  "/",
  "~",
  "`",
];

function passwordGenerator(total: number, num: number, symbol: number): string {
  let password: Array<string> = [];
  const totalSize: totalSize = generateSize(total, parseInt(num), symbol);

  const totalLetters: number = totalSize.totalLetters;
  const totalNumbers: number = totalSize.totalNumbers;
  const totalSymbols: number = totalSize.totalSymbols;

  for (let i = 0; i < totalLetters; i++) {
    password.push(randomChoice(alphabets));
  }

  for (let i = 0; i < totalNumbers; i++) {
    password.push(randomChoice(numbers));
  }

  for (let i = 0; i < totalSymbols; i++) {
    password.push(randomChoice(symbols));
  }

  password = shuffleArray(password);

  return password.join("");
}

function randomChoice(arr: Array<string>): string {
  const randomIndex: number = Math.floor(Math.random() * arr.length);
  const randomSelection: string = arr[randomIndex];
  return randomSelection;
}

function shuffleArray(arr: Array<string>): Array<string> {
  let currentIndex: number = arr.length;

  while (currentIndex != 0) {
    const randomIndex: number = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

function generateSize(total: number, num: number, symbol: number): totalSize {
  const maxLetters: number = total - num - symbol;
  const totalLetters: number =
    Math.floor(Math.random() * (maxLetters - 4 + 1)) + 4;
  const maxNUmbers: number = total - totalLetters;
  const totalNumbers: number =
    Math.floor(Math.random() * (maxNUmbers - num + 1)) + num;
  const totalSymbols: number = total - totalLetters - totalNumbers;

  return { totalLetters, totalNumbers, totalSymbols };
}

export default passwordGenerator;
