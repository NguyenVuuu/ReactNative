class User {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }
}

const user1 = new User("Nguyen Vu");
console.log("name user1:", user1.name);

const user2 = new User("Van B");
console.log("name user2:", user2.name);

const user3 = new User("Thi C");
console.log("name user3:", user3.name);
