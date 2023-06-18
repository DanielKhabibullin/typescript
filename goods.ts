import { BulkSelling } from "./src/modules/BulkSelling.js";
import { DiscountedSelling } from "./src/modules/DiscountedSelling.js";
import { Product } from "./src/modules/Product.js";

const products = [
	new DiscountedSelling(new Product('Product A', 15), 3),
	new DiscountedSelling(new Product('Product B', 30), 2),
	new BulkSelling(new Product('Product C', 50), 5, 3),
	new BulkSelling(new Product('Product D', 10), 10, 5),
	new DiscountedSelling(new Product('Product E', 40), 1),
	new DiscountedSelling(new Product('Product F', 15), 6),
	new BulkSelling(new Product('Product G', 25), 4, 2),
	new BulkSelling(new Product('Product H', 60), 2, 1),
];

console.log('products: ', products);
products.sort((a, b) => b.compare(a));

console.log(products);
console.log('sorted products: ', products);
