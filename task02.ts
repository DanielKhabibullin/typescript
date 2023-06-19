interface User {
	id: number;
	firstname: string;
	surname: string;
	age: number;
}

interface Student extends User {
	year: number;
	specialty: string;
}

interface Employee extends User {
	post: string;
}

export abstract class Users<T extends User>{
	protected userList: T[] = [];

	add(user: T): void {
		this.userList.push(user);
	}

	remove(id: number): boolean {
		const index = this.userList.findIndex((user) => user['id'] === id);
		if (index !== -1) {
			this.userList.splice(index, 1);
			return true;
		}
		return false;
	}

	get(id: number): T | null {
		const user = this.userList.find((user) => user['id'] === id);
		return user ?? null;
	}

	sorted(prop: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
		const sortedList = [...this.userList].sort((a, b) => {
			if (order === 'asc') {
				return a[prop] > b[prop] ? 1 : -1;
			} else {
				return a[prop] < b[prop] ? 1 : -1;
			}
		});
		return sortedList;
	}
}

export class Students extends Users<Student> {
	constructor() {
		super();
		this.year = 0;
		this.specialty = '';
	}
	year: number;
	specialty: string;
}

export class Employees extends Users<Employee> {
	constructor() {
		super();
		this.post = '';
	}
	post: string;
}

const students = new Students();
students.add({ id: 1, firstname: 'John', surname: 'Doe', age: 20, year: 2, specialty: 'Computer Science' });
students.add({ id: 2, firstname: 'Anna', surname: 'Norton', age: 21, year: 3, specialty: 'Mathematics' });
students.add({ id: 3, firstname: 'Thomas', surname: 'Anderson', age: 19, year: 1, specialty: 'Biology' });
students.add({ id: 4, firstname: 'William', surname: 'Smith', age: 22, year: 4, specialty: 'Chemistry' });
students.add({ id: 5, firstname: 'Tom', surname: 'Cruise', age: 18, year: 1, specialty: 'English' });
// console.log('true', students.remove(3));
// console.log('false', students.remove(3));
// console.log('null', students.get(3));
// console.log('data:', students.get(1));
const sortedByAgeAsc = students.sorted('age');
console.log(sortedByAgeAsc);
const sortedByFirstnameDesc = students.sorted('firstname', 'desc');
console.log(sortedByFirstnameDesc);

const employees = new Employees();
employees.add({ id: 1, firstname: 'Mark', surname: 'Twain', age: 30, post: 'Writer' });
employees.add({ id: 2, firstname: 'Bjarne', surname: 'Stroustrup ', age: 35, post: 'Developer' });
// console.log('false', employees.remove(3));
// console.log('true', employees.remove(1));
// console.log('data:', employees.get(2));

