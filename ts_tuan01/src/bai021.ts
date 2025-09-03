//21. Create a generic Repository class with methods add(), getAll().
class Repository<T> {
  items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberRep = new Repository<number>();
numberRep.add(1);
numberRep.add(2);
console.log("number list", numberRep.getAll());

const stringRep = new Repository<string>();
stringRep.add("a");
stringRep.add("b");
console.log("string list", stringRep.getAll());

interface UserRepo {
  name: string;
  age: number;
}

const userRep = new Repository<UserRepo>();
userRep.add({ name: "Tony", age: 18 });
userRep.add({ name: "Steve", age: 20 });
console.log("user list", userRep.getAll());
