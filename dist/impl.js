"use strict";
class TV {
    title;
    id = +Date.now.toString().substring(9);
    count;
    price;
    constructor(title, count = 0, price) {
        this.title = title;
        this.count = count;
        this.price = price;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
class WM {
    title;
    id = +Date.now.toString().substring(9);
    count;
    price;
    weight;
    constructor(title, count = 0, price, weight) {
        this.title = title;
        this.count = count;
        this.price = price;
        this.weight = weight;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
