export const calcTotalPrice = ({
	title,
	price,
	count,
	options: {weight}
} : {
	title: string;
	price: number;
	count: number;
	options: {
		weight: number;
	};
}): string => {
	const totalPrice: number = price * count;
	const totalweight: number = weight * count;
	
	return `${title}: цена ${totalPrice}, общий вес ${totalweight}`
};
