export interface RiddleType {
  color: keyof ColorsType;
  question: string;
  answer: string[];
  hint: string;
  location: string;
  number?: string;
}

export interface ColorsType {
  red: string;
  cobalt: string;
  greenLight: string;
  green: string;
  turquoise: string;
  /*   pink: string;
  yellow: string;
  blue: string;
  purple: string;
  green: string;
  white: string; */
}
