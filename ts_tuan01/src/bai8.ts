class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let products: Product[] = [
  new Product("product1", 80),
  new Product("product2", 90),
  new Product("product3", 100),
  new Product("product4", 110),
  new Product("product5", 120),
  new Product("product6", 130),
  new Product("product7", 140),
  new Product("product8", 150),
];

const filterProduct = products.filter((product) => product.price > 100);
console.log("nhung san pham co gia hon 100 la: ", filterProduct);
// tsc
// node dist/bai8.js
