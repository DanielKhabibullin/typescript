"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Student {
    id = Math.random().toString(36).substring(2, 6)
        + Date.now().toString().substring(9);
    status = StatusStudent.enrollee;
    createAt = new Date();
    updateAt;
    name;
    course;
    age;
    _module = 0;
    constructor(name, courseOrAge, age) {
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
    set module(module) {
        this._module = module;
        this.updateAt = new Date();
    }
    changeStatus(status) {
        this.status = status;
        this.updateAt = new Date();
    }
}
const student1 = new Student('Anton');
console.log('student: ', student1);
const student2 = new Student('Anna', 'React');
console.log('student: ', student2);
const student3 = new Student('Arthur', 18);
console.log('student3: ', student3);
const student4 = new Student('Sasha', 'JavaScript', 22);
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
