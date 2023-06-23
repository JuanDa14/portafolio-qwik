import { component$, useContext, $ } from '@builder.io/qwik';
import { UIContext } from '~/context/ui/ui-context';

import NavbarDesktop from '../navbar/navbar-desktop';
import NavbarMobile from '../navbar/navbar-mobile';

export default component$(() => {
	const { theme, isScrolled, showMenu } = useContext(UIContext);

	const changeShowMenu = $(() => {
		showMenu.value = !showMenu.value;
	});

	return (
		<header
			class={`${
				isScrolled.value ? '' : 'border-b shadow-sm border-white dark:border-gray-500'
			} fixed top-0 w-full z-50 text-pallete-light-gray-500 bg-white dark:bg-dark-body`}
			style={{
				backdropFilter: 'saturate(180%) blur(5px)',
				background: `${
					isScrolled.value
						? theme.value === 'light'
							? 'hsla(0, 0%, 100%, .8)'
							: 'hsla(210, 44%, 13%, .8)'
						: ''
				}`,
			}}
		>
			{/* Escritorio */}
			<NavbarDesktop />

			{/* Mobile */}
			<NavbarMobile showMenu={showMenu.value} changeShowMenu={changeShowMenu} />
		</header>
	);
});
