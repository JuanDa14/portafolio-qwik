import { component$ } from '@builder.io/qwik';
import CardAbilities from './card/card-abilities';
import { Lottie } from './lottie/lottie';

export default component$(() => {
	return (
		<section class='px-5 md:px-3 max-w-4xl mx-auto py-10' id='conoceme'>
			<h2 class='text-step-1 text-black uppercase font-bold mb-4 border-gray-500 dark:border-gray-100 dark:text-white'>
				Sobre mí
			</h2>
			<div class='flex flex-col gap-10 justify-center items-center md:flex-row md:items-center mb-10 md:mb-20 mt-10'>
				<Lottie idContainer='about' path='about' class='w-full h-full max-w-[200px]' />
				<div class='flex-1 text-step--1'>
					<p class='mb-4 text-gray-800 dark:text-white'>
						Comencé mi carrera en la programación en el año 2020, cuando tomé mi primer curso
						de programación en línea. Desde entonces, he estado trabajando en proyectos
						personales y colaborando con diferentes empresas y organizaciones.
					</p>
					<p class='mb-4 text-gray-900 font-semibold dark:text-gray-400'>
						Mi objetivo es crear productos que ofrezcan experiencias excepcionales, con un
						diseño atractivo, intuitivo y de alta calidad.
					</p>
					<p class='text-gray-800 dark:text-white'>
						Estoy siempre dispuesto a aprender nuevas tecnologías y a afrontar nuevos desafíos
						laborales que me permitan seguir creciendo profesionalmente.
					</p>
				</div>
			</div>
			<div>
				<h2 class='text-step-1 uppercase font-bold text-black dark:text-white'>Skills</h2>
				<div class='flex flex-wrap'>
					<div class='w-1/2 md:w-1/3 mt-4'>
						<CardAbilities type='Frontend' />
					</div>
					{/* Backend */}
					<div class='w-1/2 md:w-1/3 mt-4'>
						<CardAbilities type='Backend' />
					</div>
					{/* DataBase */}
					<div class='w-1/2 md:w-1/3 mt-4'>
						<CardAbilities type='DataBase' />
					</div>
				</div>
			</div>
		</section>
	);
});
