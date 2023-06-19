// const log = <T, B>(value: T, value2: B): T => {
// 	console.log(value);
// 	console.log(value2);
// 	return value;
// }
// log<string, number>('hello', 10);
// log(123, 10);

// // function log2 <T>(value: T): T {
// // 	console.log(value);
// // 	return value;
// // }

// // const logFoo = (val: number | string): number | string => {
// // 	console.log(val);
// // 	return val;
// // }

// // const c = logFoo('hello');
// // const d = logFoo(10);

// const filterArr = <T>(arr: T[], exclude: T[]): T[] =>
// 	arr.filter((item) => !exclude.includes(item));

// const result = filterArr<number>([1, 2, 3, 4, 5], [1, 2]);

// type filterArray = <T>(arr: T[], exclude: T[]) => T[];
// const filterArr1: filterArray = (arr, exclude) =>
// 	arr.filter((item) => !exclude.includes(item));

// interface HttpResponseError {
// 	success: false;
// 	error: string;
// }

// interface HttpResponseSuccess<T> {
// 	success: true;
// 	data: T;
// }

// type HttpResponse<T> = HttpResponseError | HttpResponseSuccess<T>;

// interface product {
// 		id: number;
// 		title: string;
// 		count: number;
// }

// interface person {
// 	name: string;
// 	post: string;
// }

// const response: HttpResponse<product[]> = {
// 	success: true,
// 	data: [
// 		{
// 			id: 1,
// 			title: 'cucumber',
// 			count: 10,
// 		},
// 		{
// 			id: 2,
// 			title: 'tomato',
// 			count: 20,
// 		}
// 	],
// }

// const response2: HttpResponse<person[]> = {
// 	success: true,
// 	data: [
// 		{
// 			name: 'Ivan',
// 			post: 'loader',
// 		},
// 	],
// }

// const response3: HttpResponse<string> = {
// 	success: true,
// 	data: 'Order created, number 123',
// }


class HttpResponse<D, E> {
	protected success: boolean;
	protected data?: D;
	protected error?: E;

	constructor(success: boolean, data?: D, error?: E) {
		this.success = success;
		if (data) this.data = data;
		if (error) this.error = error;
	}
}

const responseToken = new HttpResponse<number, string>(true, 4556656654651);
const responseUser = new HttpResponse<string, string>(true, 'Ivan');