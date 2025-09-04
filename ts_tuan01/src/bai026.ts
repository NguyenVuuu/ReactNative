//26. Create a class Order with list of products. Add method to calculate total price.

class Product26 {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
class Order26 {
  // products: Product26[] = [];
  products: Product26[];
  constructor(products: Product26[]) {
    this.products = products;
  }

  addProduct(product: Product26): void {
    this.products.push(product);
  }

  calcTotalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

const order26 = new Order26([]);

order26.addProduct(new Product26("Product 1", 100));
order26.addProduct(new Product26("Product 2", 200));
order26.addProduct(new Product26("Product 3", 300));

console.log(order26.calcTotalPrice());
