interface Goods {
	title: string;
	count: number;
	price: number;
}

type KeysOfGoods = keyof Goods;

const filter0 = (arr: Goods[], key: KeysOfGoods, value: Goods[KeysOfGoods]) => {
	return arr.filter((goods: Goods) => goods[key] === value);
}

const filter1 = <T, K extends keyof T>(arr: T[], key: K, value: T[K]) => {
	return arr.filter((item: T) => item[key] === value);
}

const categories = ['notebook', 'TV', 'phone'] as const;

type categoryTypes = typeof categories[number];

abstract class Cart<T extends Goods> {
	public goods: T[] = [];

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
});

techCart.add({
	title: 'TV',
	count: 2,
	price: 50,
	type: 'TV',
	description: 'TV',
});

techCart.add({
	title: 'phone',
	count: 3,
	price: 150,
	type: 'phone',
	description: 'phone',
})

const res = filter1(techCart.goods, 'price', 150);

console.log(res);

// console.log(techCart.totalPrice);

// console.log(techCart.get('note'));

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

const goods0: TechCart['goods'][number] = {
		title: 'notebook',
		count: 1,
		price: 100,
		type: 'notebook',
		description: 'notebook',
};
const goods1: typeof goods0 = {
	title: 'phone',
	count: 3,
	price: 150,
	type: 'phone',
	description: 'phone',
}

type keyOfGoods = keyof typeof goods1;

const keys: keyOfGoods = 'type';

