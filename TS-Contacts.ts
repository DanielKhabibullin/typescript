
type User = {
	name: string;
	age: number;
	group: string;
};

type Admin = {
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

const logPerson = (user: Person): void => {
	console.log(`${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
