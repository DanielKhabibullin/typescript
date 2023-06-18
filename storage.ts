class Job {
	private _role: string;
	private _salary: number;
	
	constructor(role: string, salary: number) {
		this._role = role;
		this._salary = salary;
	}

	get salary() {
		return this._salary;
	}

	work(personName: string) {
		console.log(`${personName} сейчас работает как ${this._role}`);
	}
}

class Person {
	private _job: Job | undefined = undefined;
	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	set job(job: Job) {
		this._job = job;
	}

	getSalary(): number {
		if (this._job) {
			return this._job.salary;
		} else {
			return 0;
		}
	}

	work() {
		if (this._job) {
			this._job.work(this._name);
		} else {
			console.log(`${this._name} не имеет работы`);
		}
	}
}

const janitor = new Job('уборщик', 10000);
const loader = new Job('грузчик', 15000);
const porter = new Job('носильщик', 20000);

const john = new Person('John');
const mary = new Person('Mary');
const bob = new Person('Bob');

john.job = janitor;
john.work();

mary.job = loader;
mary.work();

bob.job = porter;
bob.work();
console.log(`Зарплата John: ${john.getSalary()} рублей`);
console.log(`Зарплата Mary: ${mary.getSalary()} рублей`);
console.log(`Зарплата Bob: ${bob.getSalary()} рублей`);

john.job = loader;
mary.job = porter;
bob.job = janitor;

john.work();
mary.work();
bob.work();
console.log(`Зарплата John: ${john.getSalary()} рублей`);
console.log(`Зарплата Mary: ${mary.getSalary()} рублей`);
console.log(`Зарплата Bob: ${bob.getSalary()} рублей`);

