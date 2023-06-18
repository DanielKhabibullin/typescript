enum StatusStudent {
	enrollee = 'enrollee',
	student = 'student',
	graduate = 'graduate',
	bachelor = 'bachelor',
}

class Person {
	age? : number;
	#id: string = Math.random().toString(36).substring(2, 6)
	+ Date.now().toString().substring(9);
	private createAt: Date = new Date();
	protected updateAt?: Date;
	constructor(name: string);
	constructor(name: string, age: number | undefined);

	constructor(public readonly name: string, age?: number | undefined) {
		if (typeof age === 'number') {
			this.age = age;
		}
	}
	getInfo(): string {
		if (this.age) {
		return `${this.name} is ${this.age} years old`;
		}
		return `${this.name}`;
	}
}

class Student extends Person {
	static readonly school: string = 'University';
	static count: number = 0;
	protected status: StatusStudent = StatusStudent.enrollee;
	course?: string;
	_module?: number = 0;
	constructor(name: string);
	constructor(name: string, age: number);
	constructor(name: string, course: string);
	constructor(name: string, course: string, age: number);
	constructor(public readonly name: string, courseOrAge?: string | number, age?: number) {
		let ageOrUndefined: number | undefined;
		if (typeof courseOrAge === 'number') {
			ageOrUndefined = courseOrAge;
		}
		if (age) {
			ageOrUndefined = age;
		}
		super(name, ageOrUndefined);
		if (typeof courseOrAge === 'string') {
			this.course = courseOrAge;
			this.changeStatus(StatusStudent.student);
		}
		Student.count++;
	}

	private changeUpdateDate(): void {
		this.updateAt = new Date();
	}
	// get info(): string {
	// 	return `${this.name} is studying ${this.course}`;
	// }

		// get module(): number {
	// 	return this._module;
	// }

	set module(module: number) {
		this._module = module;
		this.changeUpdateDate();
	}

	changeStatus(status: StatusStudent): void {
		this.status = status;
		this.changeUpdateDate();
	}
	changeInfo(course: string): void;
	changeInfo(module: number): void;
	changeInfo(course: string, module: number): void;
	changeInfo(couresOrModule: string | number, module?: number): void {
		if (typeof couresOrModule === 'string') {
			this.course = couresOrModule;
		}
		if (typeof couresOrModule === 'number') {
			this.module = couresOrModule;
		}
		if (module) {
			this.module = module;
		}
		this.changeUpdateDate();
	};

	override getInfo(): string {
		const info = super.getInfo();
		if (this.course) {
			return `${info}, studying ${this.course}`;
		}
		return info;
	}

	// override getInfo(): string {
	// 	const info = super.getInfo();
	// 	if (this.course) {
	// 		return `${this.name} studying ${this.course}`;
	// 	}
	// 	return this.name;
	// }

	static createStudents(list: string[], course: string): Student[] {
		return list.map(name => new Student(name, course));
	}

	static createStudentFromPerson(person: Person): Student;
	static createStudentFromPerson(person: Person, course: string): Student;
	static createStudentFromPerson(person: Person, course?: string): Student {
		if (person.age) {
			if (course) {
				return new Student(person.name, course, person.age);
			}
		}
		if (course) {
			return new Student(person.name, course);
		}
		return new Student(person.name);
	}

	static {
		Student.count = 0;
	}
}


const person1 = new Person('Alex', 28);
console.log('person1: ', person1.getInfo());
const studentAlex: Student = Student.createStudentFromPerson(person1, 'JavaScript');
console.log('studentAlex: ', studentAlex);

// const students = Student.createStudents(['Anton', 'Anna', 'Arthur', 'Sasha'], 'JavaScript');
// console.log('students: ', students);
// console.log('count students: ', Student.count);
// const student1: Student = new Student('Anton', 'JavaScript', 14);
// console.log('student: ', student1.getInfo());
// student1.changeInfo('JS', 4);
// console.log('student: ', student1);

// const student2: Student = new Student('Anna', 'React');
// console.log('student: ', student2);
// student2.changeInfo('Web');
// console.log('student: ', student2);

// const student3: Student = new Student('Arthur', 18);
// console.log('student3: ', student3);
// student3.changeInfo(2)
// console.log('student3: ', student3);

// const student4: Student = new Student('Sasha', 'JavaScript', 22);
// console.log('student4: ', student4);
// student4.changeInfo('TS', 3)
// console.log('student4: ', student4);

// setTimeout(() => {
// 	student.module = 1;
// 	student.status= StatusStudent.student;
// 	console.log('student: ', student);
// }, 2000);

// setTimeout(() => {
// 	student.module = 2;
// 	console.log('student: ', student);
// }, 5000);

// setTimeout(() => {
// 	student.module = 3;
// 	student.status = StatusStudent.graduate;
// 	console.log('student: ', student);
// }, 7500);