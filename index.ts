

const cat1 = {
	name: 'Мурка',
	age: 3,
	breed: 'дворняга',
	voice: 'Мяу',
}

// const cat2 = <animal> {
// 	name: 'Мурка',
// 	age: 3,
// 	breed: 'дворняга',
// 	voice: 'Мяу',
// }

type animal = {
	type: 'animal';
	name: string;
	age: number;
	habitat: string;
	family: string;
}

type pet = {
	type: 'pet',
	name: string;
	home: string;
	age: number;
	breed: string;
};

// const myCat: pet = {
// 	...cat1,
// 	home: 'Деревня',
// 	owner: {
// 		firstName: 'Иван',
// 	}
// } as pet;

// console.log(myCat);

// const animalToPet = (animal: animal, home: string, nameOwner: string): pet => (
// 	{
// 		...animal,
// 		home,
// 		owner: {
// 			firstName: nameOwner,
// 		}
// 	}
// );
const handle = (val: animal | pet) => {
	// if (val.type === 'animal') {
	// 	console.log(val.habitat);
	// } else {
	// 	console.log(val.breed);
	// }
	if ('habitat' in val) {
	console.log(val.family);
	}
};
// const myCat: pet = animalToPet(cat1, 'Деревня', 'Иван');