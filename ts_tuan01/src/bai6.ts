class Book {
  title: string;
  author: string;
  year: number;
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  display(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Year: ${this.year}`);
    console.log("------------------------");
  }
}
const book = new Book(
  "Harry Potter and the Deathly Hallows",
  "J.K. Rowling",
  2007
);
const book1 = new Book(
  "Harry Potter and the Prisoner of Azkaban",
  "J.K. Rowling",
  1999
);
const book2 = new Book(
  "Harry Potter and the Order of the Phoenix",
  "J.K. Rowling",
  2003
);
book.display();
book1.display();
book2.display();
