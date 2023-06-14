"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = void 0;
const calcTotalPrice = ({ title, price, count, options: { weight } }) => {
    const totalPrice = price * count;
    const totalweight = weight * count;
    return `${title}: цена ${totalPrice}, общий вес ${totalweight}`;
};
exports.calcTotalPrice = calcTotalPrice;
