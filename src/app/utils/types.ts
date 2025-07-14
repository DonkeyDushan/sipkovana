export interface RiddleType {
  color: keyof ColorsType;
  question: string;
  answer: string[];
  hint: string;
  location: string;
}

export interface ColorsType {
  yellow: string;
  orange: string;
  aqua: string;
  blue: string;
  /*   pink: string;
  yellow: string;
  blue: string;
  purple: string;
  green: string;
  white: string; */
}
