interface User {
	name: string;
	age: number;
	group: string;
}

interface Admin {
	name: string;
	age: number;
	role: string;
}

type Person = Admin | User;

const persons: Person[] = [
	{
		name: 'Иван Петров',
		age: 27,
		group: 'SEO-специалист',
	},
	{
		name: 'Марат Aляуддинов',
		age: 20,
		group: 'Музыкант',
	},
	{
		name: 'John Doe',
		age: 30,
		group: 'Family',
	},
	{
		name: 'Albert Einstein',
		age: 55,
		group: 'Friends',
	},
	{
		name: 'Maria Curie',
		age: 30,
		group: 'Collegues',
	},
	{
		name: 'Сергей Кислов',
		age: 35,
		role: 'администратор',
	}
];

const isUser0 = (person: Person): person is User => 'group' in person;

const isUser1 = (person: Person): person is User => {
	return 'group' in person && person.group !== undefined;
};

const isUser2 = (person: Person): person is User => {
	return (person as User).group !== undefined;
};

const logPerson = (person: Person) => {
	const information: string	= isUser0(person) ? person.group : person.role;
	console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
