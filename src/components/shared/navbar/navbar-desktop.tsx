import { component$ } from '@builder.io/qwik';

import ModeSwitch from '~/components/ui/mode-switch';

export default component$(() => {
	return (
		<nav class='hidden py-1 px-5 md:px-0 mx-auto sm:flex justify-between items-center max-w-3xl'>
			<a
				title='IconoInicio'
				href='#inicio'
				class='hover:scale-110'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					class='w-7 h-7 text-black dark:text-white'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
					/>
				</svg>
			</a>
			<ul class='flex gap-4 text-sm items-center font-medium'>
				<li class='py-4'>
					<a
						title='Inicio'
						href='#inicio'
						class='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
					>
						Inicio
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Conoceme'
						href='#conoceme'
						class='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
					>
						Conoceme
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Proyectos'
						href='#proyectos'
						class='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
					>
						Proyectos
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Contacto'
						href='#contacto'
						class='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
					>
						Contacto
					</a>
				</li>
				<li class='py-4'>
					<ModeSwitch />
				</li>
			</ul>
		</nav>
	);
});
