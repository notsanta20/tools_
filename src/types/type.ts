export interface generateHashType {
  text: string;
}

export interface verifyHashType {
  text: string;
  hash: string;
}

export interface passwordSize {
  total: number;
  num: number;
  symbol: number;
}

export interface totalSize {
  totalLetters: number;
  totalNumbers: number;
  totalSymbols: number;
}
