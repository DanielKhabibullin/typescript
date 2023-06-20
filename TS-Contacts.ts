interface User {
	type: 'user';
	name: string;
	age: number;
	group: string;
}

interface Admin {
	type: 'admin';
	name: string;
	age: number;
	role: string;
}

type Person = Admin | User;

const persons: Person[] = [
	{
		type: 'admin',
		name: 'Иван Петров',
		age: 27,
		role: 'Administrator',
	},
	{
		type: 'user',
		name: 'Марат Aляуддинов',
		age: 20,
		group: 'музыкант',
	},
	{
		type: 'user',
		name: 'Екатерина Попова',
		age: 24,
		group: 'дизайнер сайтов'
	},
	{
		type: 'admin',
		name: 'Аркадий Паравозов',
		age: 55,
		role: 'Системный администратор'
	},
	{
		type: 'user',
		name: 'Даня Поперечный',
		age: 28,
		group: 'Комик'
	},
	{
		type: 'admin',
		name: 'Олег',
		age: 24,
		role: 'Модератор'
	}
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

// const isUser0 = (person: Person): person is User => 'group' in person;

// const isUser1 = (person: Person): person is User => {
// 	return 'group' in person && person.group !== undefined;
// };

// const isUser2 = (person: Person): person is User => {
// 	return (person as User).group !== undefined;
// };

// const logPerson0 = (person: Person) => {
// 	const information: string	= isUser0(person) ? person.group : person.role;
// 	console.log(`${person.name}, ${person.age}, ${information}`);
// };

// persons.forEach(logPerson0);

const logPerson = (person: Person) => {
	let information = '';
	
	if (isAdmin(person)) {
		information = person.role;
	}
	
	if (isUser(person)) {
		information = person.group;
	}
	
	console.log(` - ${person.name}, ${person.age}, ${information}`);
}

const filterUsers = (persons: Person[], criteria: Partial<User>): User[] =>
persons.filter(isUser).filter((user) => {
		const criteriaKeys = Object.keys(criteria) as (keyof User)[];
		return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
	});

	const filterAdmins = (persons: Person[], criteria: Partial<Admin>): Admin[] =>
	persons.filter(isAdmin).filter((admin) => {
		const criteriaKeys = Object.keys(criteria) as (keyof Admin)[];
		return criteriaKeys.every((fieldName) => admin[fieldName] === criteria[fieldName]);
	});

console.log('Admin(s) of age 24:');

filterAdmins(
	persons,
	{
			age: 24
	}
).forEach(logPerson);