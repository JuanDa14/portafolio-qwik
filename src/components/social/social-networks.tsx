import { socials } from '~/data/seed';

export const SocialNetworks = () => {
	return (
		<div class='flex gap-2 items-center text-step-1'>
			{socials.map(({ href, title, icon }) => (
				<a key={title} class='hover:scale-125' title={title} href={href} target='_blank'>
					<img
						width={35}
						height={35}
						src={`/icons/${icon}.svg`}
						alt={title}
						class='dark:filter dark:invert'
					/>
				</a>
			))}
		</div>
	);
};
