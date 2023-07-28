import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<footer class='px-5 md:px-3 border dark:border-none dark:bg-dark-body py-4'>
			<p class='dark:text-white text-center'>© {new Date().getFullYear()} Juandevelop.com</p>
		</footer>
	);
});
