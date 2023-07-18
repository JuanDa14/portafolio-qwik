import { component$ } from '@builder.io/qwik';
import { projects } from '~/data/seed';

export default component$(() => {
	return (
		<div class='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
			{projects.map((project) => (
				<div class='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
					{/* <!-- Icon --> */}
					<div class='flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-blue-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:group-[.is-active]:bg-slate-500'>
						<svg
							class='fill-current'
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='10'
						>
							<path
								fill-rule='nonzero'
								d='M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z'
							/>
						</svg>
					</div>
					{/* <!-- Card --> */}
					<div class='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out dark:bg-dark-body dark:border-gray-600'>
						<div class='flex flex-col justify-start sm:flex-row sm:items-center sm:justify-between sm:space-x-2 mb-1'>
							<div class='font-bold text-slate-900 text-step--1 dark:text-white'>
								{project.title}
							</div>
							<time class='font-medium text-gray-500 text-step--1 dark:text-white'>
								{new Date(project.createdAt).toLocaleDateString('es-ES', {
									dateStyle: 'medium',
								})}
							</time>
						</div>
						<p class='text-slate-500 line-clamp-3 text-sm dark:text-gray-400'>
							{project.description}
						</p>
						<div class='pt-4 flex items-center justify-between'>
							<ul class='flex flex-wrap items-center gap-3'>
								{project.technologies.map((technology) => (
									<li key={technology}>
										<img
											width={20}
											height={20}
											src={`/icons/${technology.toLowerCase()}.svg`}
											alt={technology}
										/>
									</li>
								))}
							</ul>
							<div class='flex items-center justify-end gap-2'>
								{project.byMe && (
									<>
										<a
											href={project.githubUrl}
											target='_blank'
											title='Github'
											class='hover:scale-125'
										>
											<img
												width={25}
												height={25}
												src='/icons/github.svg'
												alt='github'
												class='dark:filter dark:invert'
											/>
										</a>
										<a
											href={project.websiteUrl}
											target='_blank'
											title='Ver Proyecto'
											class='hover:scale-125'
										>
											<img
												width={25}
												height={25}
												src='/icons/send.svg'
												alt='send'
												class='dark:filter dark:invert'
											/>
										</a>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
});
