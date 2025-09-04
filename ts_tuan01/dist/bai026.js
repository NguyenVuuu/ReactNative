"use strict";
//26. Create a class Order with list of products. Add method to calculate total price.
class Product26 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order26 {
    constructor(products) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    calcTotalPrice() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}
const order26 = new Order26([]);
order26.addProduct(new Product26("Product 1", 100));
order26.addProduct(new Product26("Product 2", 200));
order26.addProduct(new Product26("Product 3", 300));
console.log(order26.calcTotalPrice());
