import { component$ } from '@builder.io/qwik';
import Timeline from './ui/timeline';

export default component$(() => {
	return (
		<section class='bg-pallete-light dark:bg-dark-container py-10' id='proyectos'>
			<div class='px-5 md:px-3 max-w-3xl mx-auto'>
				<h2 class='text-step-1 text-black dark:text-white uppercase font-bold border-black mb-4 dark:border-gray-100'>
					Experiencia
				</h2>

				<Timeline />
			</div>
		</section>
	);
});
