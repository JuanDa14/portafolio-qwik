import { component$ } from '@builder.io/qwik';
import { currentDate, projects } from '~/data/seed';

export default component$(() => {
	return (
		<ul class="grid grid-cols-fit-250 gap-3">
  {projects
    .sort((a, b) => new Date(a.updatedAt).getFullYear() - new Date(b.createdAt).getFullYear())
    .map((project, index) => (
      <li key={index}>
        <div class="border bg-white dark:bg-dark-body dark:border-gray-600 relative flex items-center justify-between rounded-lg overflow-hidden hover:shadow">
          <div class="p-4">
            <h2 class="capitalize font-semibold text-black dark:text-white">
              {project.title}
            </h2>
            <p class="text-gray-500 text-step--1 my-1 dark:text-white">
              <span>
                {new Date(project.createdAt).toLocaleDateString('es-ES', {
                  dateStyle: 'medium',
                })}
              </span>
              {' - '}
              <span>
                {project.updatedAt === currentDate
                  ? 'Actualmente'
                  : new Date(project.updatedAt).toLocaleDateString('es-ES', {
                      dateStyle: 'medium',
                    })}
              </span>
            </p>
            <p class="text-gray-500 line-clamp text-sm dark:text-gray-400">
              {project.description}
            </p>
            <ul class="mt-3 flex flex-wrap items-center gap-3 font-code">
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
            <div class="flex justify-end gap-2 capitalize">
              {project.byMe ? (
                <>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Github" class='hover:scale-110'>
                    <img
                      width={25}
                      height={25}
                      src="/icons/github.svg"
                      alt="github"
                      class='dark:filter dark:invert'
                    />
                  </a>
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" title="Ver Proyecto" class='hover:scale-110'>
                    <img
                      width={25}
                      height={25}
                      src="/icons/send.svg"
                      alt="send"
                      class='dark:filter dark:invert'
                    />
                  </a>
                </>
              ) : (
                <>
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" title="Ver" class='hover:scale-110'>
                    <img
                      width={25}
                      height={25}
                      src="/icons/send.svg"
                      alt="send-email"
                      class='dark:filter dark:invert'
                    />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </li>
    ))}
</ul>

	);
});
