import { socials } from '~/data/seed';

export const SocialNetworks = () => {
	return (
		<ul class='flex gap-2 items-center text-step-1'>
			{socials.map(({ href, title, icon }) => (
				<li class='hover:scale-110 transition-all duration-300 ease-in-out' key={title}>
					<a title={title} href={href} target='_blank'>
						<img
							width={35}
							height={35}
							src={`/icons/${icon}.svg`}
							alt={title}
							class='dark:filter dark:invert'
						/>
					</a>
				</li>
			))}
		</ul>
	);
};
