"use strict";
{
    const apiService = (url, method) => {
        fetch(url, {
            method,
        });
    };
    const obj = {
        method: 'POST',
    };
    apiService('https://jsonplaceholder.typicode.com/users', obj.method);
}
const LOCALE_RU = 'ru-RU';
const LOCALE_EN = 'en-US';
const LOCALE = {
    RU: 'ru-RU',
    EN: 'en-US',
};
const translate = (lang, text) => {
    return text;
};
var TypeUser;
(function (TypeUser) {
    TypeUser[TypeUser["admin"] = 0] = "admin";
    TypeUser[TypeUser["user"] = 1] = "user";
    TypeUser[TypeUser["moderator"] = 2] = "moderator";
})(TypeUser || (TypeUser = {}));
;
console.log('TypeUser: ', TypeUser);
translate("ru-RU" /* Locale.RU */, 'text');
translate("en-US" /* Locale.EN */, 'text');
