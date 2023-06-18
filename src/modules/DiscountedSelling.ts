import { AbstractSelling } from "./AbstractSelling.js";
import { Product } from "./Product.js";

export class DiscountedSelling extends AbstractSelling {
	private readonly DISCOUNT_AMOUNT = 10;

	constructor(product: Product, quantity: number) {
		super(product, quantity);
	}

	getPrice(): number {
		return Math.max(0, this.product.price * this.quantity - this.DISCOUNT_AMOUNT);
	}
}