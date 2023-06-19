interface Goods {
	title: string;
	count: number;
	price: number;
}

abstract class Cart<T extends Goods> {
	protected goods: T[] = [];

	public add(item: T): void {
		this.goods.push(item);
	}

	public get(title: string): T | null {
		return this.goods.find((item) => item.title === title) ?? null;
	}

	public get totalPrice(): number {
		return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0);
	}
}

interface TechGoods {
	title: string;
	count: number;
	price: number;
	type: string;
	description: string;
}

class TechCart extends Cart<TechGoods> {

}

const techCart = new TechCart();

techCart.add({
	title: 'notebook',
	count: 1,
	price: 100,
	type: 'notebook',
	description: 'notebook',
})

console.log(techCart.totalPrice);

console.log(techCart.get('note'));

// const getCountGoods = <T extends {title: string, count: number}>(arr: T[], title: string): number => {
// 	const goods = arr.find((item) => item.title === title);
// 	return goods?.count ?? 0;
// }

// const goods: Goods[] = [
// 	{
// 		title: 'notebook',
// 		count: 10,
// 	},
// 	{
// 		title: 'pad',
// 		count: 15,
// 	},
// 	{
// 		title: 'phone',
// 		count: 20,
// 	}
// ];

// const countP = getCountGoods(goods, 'pad');
// console.log('countP: ', countP);
// const countN = getCountGoods(goods, 'vacuum cleaner');
// console.log('countN: ', countN);