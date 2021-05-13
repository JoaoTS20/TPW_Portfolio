import {Publisher} from "./publisher";
import {Author} from "./author";

export class Book {
  num: number | undefined;
  title: string | undefined;
  date: Date | undefined;
  authors: Author[] | undefined;
  publisher: Publisher | undefined;
}
