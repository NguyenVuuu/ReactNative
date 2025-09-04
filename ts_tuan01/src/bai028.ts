//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal28 {
  protected makeSound(): void {
    console.log("animal sound");
  }
}

class Dog28 extends Animal28 {
  protected makeSound(): void {
    console.log("dog sound");
  }
  public getSound(): void {
    this.makeSound();
  }
}

class Cat28 extends Animal28 {
  protected makeSound(): void {
    console.log("cat sound");
  }
  public getSound(): void {
    return this.makeSound();
  }
}

const dog28 = new Dog28();
dog28.getSound();

const cat28 = new Cat28();
cat28.getSound();
