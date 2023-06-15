type skill = [number, string, number];

const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'javascript', 30];


const allSkills: skill[] = [
	[1, 'html', 10],
	[2, 'css', 20],
	[3, 'javascript', 30],
];

type Module = {
	index: number;
	title: string;
	hours: number;
};

type FinalProject = {
	descriptionFinalProject: string;
	hoursFinalProject: number;
}

type ModuleWithFinalProject = Module | FinalProject;

const m1: Module = {
	index: 1,
	title: 'Основы HTML',
	hours: 10, 
};

const m2: ModuleWithFinalProject = {
	index: 2,
	title: 'Основы CSS',
	hours: 20,
	hoursFinalProject: 12,
};

const m3: ModuleWithFinalProject = {
	index: 3,
	title: 'Основы JS',
	hours: 30,
	descriptionFinalProject: 'CRM',
	hoursFinalProject: 12,
};

const course1: readonly Module[] = [
	{
		index: 1,
		title: 'Основы HTML',
		hours: 10, 
	},
	{
		index: 2,
		title: 'Основы CSS',
		hours: 20,
	},
	{
		index: 3,
		title: 'Основы JS',
		hours: 30,
	}
];

const course2: ReadonlyArray<Module> = [
	{
		index: 1,
		title: 'Основы HTML',
		hours: 10,  
	},
	{
		index: 2,
		title: 'Основы CSS',
		hours: 20,
	},
	{
		index: 3,
		title: 'Основы JS',
		hours: 30,
	}
];