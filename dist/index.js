"use strict";
const div = (a, b, rounding) => {
    const res = a / b;
    if (rounding) {
        return Math.round(res);
    }
    else {
        return res;
    }
};
div(15, 5, true);
// div(15, 3, false);
div(10, 2);
const fetchData = (res) => {
    if (res.status === 'pending') {
        res.status;
    }
    if (res.status === 'success') {
        res.data;
    }
    if (res.status === 'failed') {
        res.error;
    }
};
