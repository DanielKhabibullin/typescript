enum StatusStudent {
	enrollee = 'enrollee',
	student = 'student',
	graduate = 'graduate',
	bachelor = 'bachelor',
}

class Student {
	id: string = Math.random().toString(36).substring(2, 6)
	+ Date.now().toString().substring(9);
	status: StatusStudent = StatusStudent.enrollee;
	createAt: Date = new Date();
	updateAt?: Date;
	name: string;
	course?: string;
	age?: number;
	_module?: number = 0;
	constructor(name: string);
	constructor(name: string, course: string);
	constructor(name: string, age: number);
	constructor(name: string, course: string, age: number);

	constructor(name: string, courseOrAge?: string | number, age?: number) {
		this.name = name;
		if (typeof courseOrAge === 'string') {
			this.course = courseOrAge;
			this.changeStatus(StatusStudent.student);
		}
		if (typeof courseOrAge === 'number') {
			this.age = courseOrAge;
		}
		if (age) {
			this.age = age;
		}
	}

	// get info(): string {
	// 	return `${this.name} is studying ${this.course}`;
	// }

		// get module(): number {
	// 	return this._module;
	// }

	set module(module: number) {
		this._module = module;
		this.updateAt = new Date();
	}

	changeStatus(status: StatusStudent): void {
		this.status = status;
		this.updateAt = new Date();
	}

}
const student1: Student = new Student('Anton');
console.log('student: ', student1);
const student2: Student = new Student('Anna', 'React');
console.log('student: ', student2);
const student3: Student = new Student('Arthur', 18);
console.log('student3: ', student3);
const student4: Student = new Student('Sasha', 'JavaScript', 22);
console.log('student4: ', student4);


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