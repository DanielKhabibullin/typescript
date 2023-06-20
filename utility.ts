{
	interface Goods {
		title: string;
		count?: number;
		id: number;
		readonly price: number;
	}

	type partialGoods = Partial<Goods>;

	type requiredGoods = Required<Goods>;

	type readonlyGoods = Readonly<Goods>;

	type RRGoods = Required<Readonly<Goods>>;

	type pickGoods = Pick<Goods, 'title' | 'price'>;

	type omitGoods = Omit<Goods, 'id'>;

	type recordGoods = Record<'title' | 'price', number>;

	const getGoods = (title: string, price: number, count: number): Goods => {
		return {
			id: Math.floor(Math.random() * 10e8),
			title,
			price,
			count,
		};
	};

	const getGoods1 = ({title, price, count}: omitGoods): Goods => {
		return {
			id: Math.floor(Math.random() * 10e8),
			title,
			price,
			count,
		};
	};

	type goods = ReturnType<typeof getGoods1>;

	type p = Parameters<typeof getGoods1>;

	const goodsRes = getGoods1({
		title: 'notebook',
		price: 100,
		count: 1,
	});
	console.log('goodsRes: ', goodsRes);

	const getGoods2 = (): Promise<Goods[]> => fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((res: Response) => res.json());

	type P = ReturnType<typeof getGoods2>;

	type R = Awaited<ReturnType<typeof getGoods2>>;
}