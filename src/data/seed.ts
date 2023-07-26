export const abilities: {
	name: string;
	type: 'Frontend' | 'Backend' | 'DataBase';
	level: 'Básico' | 'Intermedio' | 'Avanzado';
	icon: string;
}[] = [
	{
		name: 'HTML',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'html5',
	},
	{
		name: 'CSS',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'css3-alt',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'js',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: '',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'bootstrap',
	},
	{
		name: 'TailwindCss',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'tailwind-css',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'react',
	},
	{
		name: 'NextJs',
		type: 'Frontend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Laravel',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'laravel',
	},
	{
		name: 'Express',
		type: 'Backend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'NodeJs',
		type: 'Backend',
		level: 'Avanzado',
		icon: 'node-js',
	},
	{
		name: 'PHP',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'php',
	},
	{
		name: 'NestJs',
		type: 'Backend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MySQL',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MongoDB',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'GraphQL',
		type: 'Backend',
		level: 'Básico',
		icon: '',
	},
];

export const projects = [
	{
		title: 'Frontend Developer',
		description:
			'Desarrollo y mantenimiento de módulos en diferentes aplicaciones web para la empresa FMSAC.',
		technologies: ['PHP', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.fmsac.com/es',
		updatedAt: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
		createdAt: `2023-01-10`,
		byMe: false,
	},
	{
		title: 'Freelance',
		description:
			'Mantenimiento a la página web YahuahBible, mejore su rendimiento, agregue nuevas funcionalidades y asegure su integridad.',
		technologies: ['Laravel', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.yahuahbible.com',
		createdAt: '2022-12-12',
		updatedAt: '2023-01-05',
		byMe: false,
	},
	{
		title: 'FullStack Developer',
		description:
			'Crea tu equipo de desarrollo y mantenlos organizados con este calendario, crea tareas, asigna tareas a tus compañeros y mucho más.',
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
		imageUrl: 'proyecto-1',
		githubUrl: 'https://github.com/JuanDa14/calendar-front',
		websiteUrl: 'https://calendario-app.vercel.app',
		createdAt: '2022-11-12',
		updatedAt: '2022-12-13',
		byMe: true,
	},
	{
		title: 'FullStack Developer',
		description:
			'Crea tu árbol de enlaces de tus redes sociales, comparte tu árbol con tus amigos y descubre los árboles de tus amigos.',
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
		imageUrl: 'proyecto-2',
		githubUrl: 'https://github.com/JuanDa14/treelink-frontend',
		websiteUrl: 'https://treeliink.vercel.app',
		createdAt: '2022-10-12',
		updatedAt: '2022-12-12',
		byMe: true,
	},
];

export const socials = [
	{
		title: 'Linkedin',
		href: 'https://www.linkedin.com/in/juan-david-morales-paredes-617342224',
		icon: 'linkedin',
	},
	{
		title: 'Github',
		href: 'https://github.com/JuanDa14',
		icon: 'github',
	},
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/ju4ndevelop/',
		icon: 'instagram',
	},
];

export const InitialStateContactForm = {
	name: '',
	subject: '',
	email: '',
	message: '',
};

export const currentDate = `${new Date().getFullYear()}-${
	new Date().getMonth() + 1
}-${new Date().getDate()}`;
