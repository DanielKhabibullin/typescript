"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalVerdict = exports.car = void 0;
exports.car = {
    brand: 'BMW',
    model: 'xDrive30e',
    country: 'Germany',
    price: 50_000,
    color: 'white',
    rating: [
        ['performance', 8.0],
        ['comfort', 8.0],
        ['interior', 8.5],
        ['technology', 8.0],
        ['storage', 8.0],
        ['fuelEconomy', 6.5],
        ['value', 7.5],
        ['wildcard', 8.5],
    ],
};
const totalVerdict = ({ rating }) => {
    const sumRating = rating.reduce((acc, item) => {
        console.log(acc, item);
        return item[1] + acc;
    }, 0);
    const verdict = sumRating / rating.length;
    return verdict;
};
exports.totalVerdict = totalVerdict;
