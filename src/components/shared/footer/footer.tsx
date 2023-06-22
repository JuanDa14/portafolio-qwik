import { component$ } from '@builder.io/qwik';
import { SocialNetworks } from '~/components/social/social-networks';

export default component$(() => {
	return (
		<footer class='px-5 md:px-3 border dark:border-none dark:bg-dark-body py-4'>
			<div class='mx-auto flex flex-col-reverse gap-3 items-center justify-center md:flex-row md:justify-between max-w-3xl'>
				<div class='flex gap-1 text-center'>
					<p class='dark:text-white'>
						© {new Date().getFullYear()} Juandevelop.com | FullStack Developer
					</p>
				</div>
				<SocialNetworks />
			</div>
		</footer>
	);
});
