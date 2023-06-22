import {
	type Signal,
	Slot,
	component$,
	useContextProvider,
	useSignal,
	useStore,
	useVisibleTask$,
	$,
} from '@builder.io/qwik';
import { UIContext } from './ui-context';

export interface UIState {
	theme: Signal<'light' | 'dark'>;
	isScrolled: Signal<boolean>;
	showMenu: Signal<boolean>;
	showAlert: Signal<boolean>;
}

export const UIProvider = component$(() => {
	const theme = useSignal<'light' | 'dark'>('light');
	const isScrolled = useSignal(false);
	const showMenu = useSignal(false);
	const showAlert = useSignal(false);

	const UI_Initial_State = useStore<UIState>({
		theme,
		isScrolled,
		showMenu,
		showAlert,
	});

	const handleScroll = $(() => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			isScrolled.value = true;
		} else {
			isScrolled.value = false;
		}
	});

	useVisibleTask$(({ track }) => {
		track(() => UI_Initial_State.theme.value);

		if (theme.value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	useVisibleTask$(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	useVisibleTask$(({ track }) => {
		track(() => UI_Initial_State.showAlert.value);

		let timer: NodeJS.Timeout;

		if (showAlert.value) {
			timer = setTimeout(() => {
				showAlert.value = false;
			}, 5000);
		}

		return () => {
			clearTimeout(timer);
		};
	});

	// Usando el contexto
	useContextProvider(UIContext, UI_Initial_State);

	return <Slot />;
});