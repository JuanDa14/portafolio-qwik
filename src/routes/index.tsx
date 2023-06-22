import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/children/about';
import Contact from '~/components/children/contact';
import Hero from '~/components/children/hero';
import Project from '~/components/children/project';

export default component$(() => {
	return (
		<>
			<Hero />
			<About />
			<Project />
			<Contact />
		</>
	);
});

export const head: DocumentHead = {
	title: 'JuanDevelop - FullStack Developer',
	meta: [
		{
			name: 'author',
			content: 'Juan David Morales Paredes',
		},
		{
			name: 'description',
			content:
				'JuanDevelop - FullStack Developer con más de 1 año de experiencia. He participado en la creación y mejora de diversas aplicaciones web, donde he puesto en práctica mis habilidades para implementar soluciones escalables y eficientes.',
		},
		{
			name: 'keywords',
			content:
				'Juandevelop.com, Juandevelop, Juan develop, Juan Develop, Juandevelop Portafolio Web, Juandevelop Fullstack, Juan Morales, Juan Morales Portafolio, Juan Morales Portafolio Web, Juan Morales Portafolio Web Fullstack',
		},
		{
			name: 'og:title',
			content: 'JuanDevelop - FullStack Developer',
		},
		{
			name: 'og:description',
			content:
				'JuanDevelop - FullStack Developer con más de 1 año de experiencia. He participado en la creación y mejora de diversas aplicaciones web, donde he puesto en práctica mis habilidades para implementar soluciones escalables y eficientes.',
		},
		{
			name: 'og:image',
			content: '/imgs/preview.webp',
		},
	],
};
