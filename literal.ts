{
	type hhtpMethod = 'GET' | 'POST';

	const apiService = (url: string, method: hhtpMethod) => {
	fetch(url, {
		method,
	})
};

	const obj: {
		method: 'POST';
	} = {
		method: 'POST',
	};

	apiService('https://jsonplaceholder.typicode.com/users', obj.method);
}


	const LOCALE_RU = 'ru-RU';
	const LOCALE_EN = 'en-US';
	const LOCALE: {
		readonly RU: 'ru-RU';
		readonly EN: 'en-US';
	} = {
		RU: 'ru-RU',
		EN: 'en-US',
	};

	// type localeOMG = typeof LOCALE[keyof typeof LOCALE];
	const enum Locale {
		RU = 'ru-RU',
		EN = 'en-US',
	}
	const translate = (lang: Locale, text: string): string => {
		
	return text;
	}

	enum TypeUser {
		admin,
		user,
		moderator,
	};
	console.log('TypeUser: ', TypeUser);


	translate(Locale.RU, 'text');
	translate(Locale.EN, 'text');
