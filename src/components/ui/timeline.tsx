import { component$ } from '@builder.io/qwik';
import { currentDate, projects } from '~/data/seed';
import { formatDate } from '~/helpers/format-date';

export default component$(() => {
	return (
		<ol class='relative border-l border-gray-200 dark:border-gray-700'>
			{projects.map((project) => (
				<li class='mb-10 ml-4' key={project.title}>
					<div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
					<div>
						<time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							{formatDate(project.createdAt)}
						</time>
						<span class='text-sm text-gray-400 dark:text-gray-500'> - </span>
						<time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							{project.updatedAt === currentDate
								? 'Actualmente'
								: formatDate(project.updatedAt)}
						</time>
					</div>
					<h3 class='text-step-0 font-semibold text-gray-900 dark:text-white'>
						{project.title}
					</h3>
					<p class='mb-2 text-step--1 font-normal text-gray-500 dark:text-gray-400'>
						{project.description}
					</p>
					<ul class='flex flex-wrap items-center gap-3'>
						{project.technologies.map((technology) => (
							<li key={technology}>
								<span class='px-2 py-1 text-step--1 font-medium text-gray-900 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-100'>
									{technology}
								</span>
							</li>
						))}
					</ul>
				</li>
			))}
		</ol>
	);
});
