import { car, totalVerdict } from "./main.js";
import { calcTotalPrice } from "./src/modules/calc.js";
import { product } from "./src/modules/product.js";

const title: string = 'Quadrocopter';
const price: number = 5_000;
const count: number = 5;

const result: string = calcTotalPrice(product);

const carResult = totalVerdict(car);
