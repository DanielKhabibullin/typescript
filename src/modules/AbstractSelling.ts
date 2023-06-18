import { Product } from "./Product.js";

export abstract class AbstractSelling {
	protected _product: Product;
	protected _quantity: number;

	constructor(product: Product, quantity: number) {
		this._product = product;
		this._quantity = quantity;
	}

	get product() {
		return this._product;
	}

	set product(value: Product) {
		this._product = value;
	}

	get quantity() {
		return this._quantity;
	}

	set quantity(value: number) {
		this._quantity = value;
	}

	abstract getPrice(): number;

	compare(other: AbstractSelling): number {
		const price1 = this.getPrice();
		const price2 = other.getPrice();

		if (price1 < price2) {
			return 1;
		} else if (price1 > price2) {
			return -1;
		} else {
			return 0;
		}
	}
}