import { component$ } from '@builder.io/qwik';
import Experience from '~/components/experience';

export default component$(() => {
	return (
		<div class='md:flex-1'>
			<h2 class='text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white'>
				Sobre mí
			</h2>
			<p class='mb-4 text-gray-800 dark:text-white'>
				Comencé mi carrera en la programación en el año 2020, cuando tomé mi primer curso de
				programación en línea. Desde entonces, he estado trabajando en proyectos personales y
				colaborando con diferentes empresas y organizaciones.
			</p>
			<p class='mb-4 text-gray-900 font-medium dark:text-gray-400'>
				Mi objetivo es crear productos que ofrezcan experiencias excepcionales, con un diseño
				atractivo, intuitivo y de alta calidad.
			</p>
			<p class='mb-4 text-gray-800 dark:text-white'>
				Estoy dispuesto a aprender nuevas tecnologías y afrontar nuevos desafíos laborales que
				me permitan seguir creciendo profesionalmente.
			</p>
			<Experience />
		</div>
	);
});
