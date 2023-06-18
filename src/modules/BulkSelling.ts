import { AbstractSelling } from "./AbstractSelling.js";
import { Product } from "./Product.js";

export class BulkSelling extends AbstractSelling {
	private _bulkQuantity: number;

	constructor(product: Product, quantity: number, bulkQuantity: number) {
		super(product, quantity);
		this._bulkQuantity = bulkQuantity;
	}

	get bulkQuantity() {
		return this._bulkQuantity;
	}

	set bulkQuantity(value: number) {
		this._bulkQuantity = value;
	}

	getPrice(): number {
		const originalPrice = this.product.price * this.quantity;
		let discountedPrice = originalPrice;
		if (this.quantity >= this.bulkQuantity) {
			discountedPrice = originalPrice * 0.9;
		}
		return +discountedPrice.toFixed(2);
	}
}