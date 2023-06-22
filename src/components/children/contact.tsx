import { component$, useSignal, useStore, $, useContext } from '@builder.io/qwik';
import { InitialStateContactForm } from '~/data/seed';
import { Lottie } from '../lottie/lottie';
import { sendEmail } from '~/helpers/send-email';
import { UIContext } from '~/context/ui/ui-context';
import Alert from '../ui/alert';

export default component$(() => {
	const formState = useStore(InitialStateContactForm);
	const loading = useSignal(false);

	const { showAlert } = useContext(UIContext);

	const reset = $(() => {
		formState.name = '';
		formState.email = '';
		formState.subject = '';
		formState.message = '';
	});

	const onSubmit = $(async () => {
		loading.value = true;
		await sendEmail(formState);
		loading.value = false;

		reset();

		showAlert.value = true;
	});

	return (
		<section class='relative'>
			<div class='px-5 md:px-3 max-w-3xl mx-auto py-10 flex flex-col gap-2' id='contacto'>
				<h2 class='text-step-1 uppercase text-black dark:text-white font-bold border-gray-500 dark:border-gray-100'>
					Contacto
				</h2>
				<p class='flex items-center gap-2 text-black font-semibold dark:text-white'>
					¿Tienes un proyecto que quieras discutir? ¡No dudes en contactarme!
				</p>
				<p class='text-gray-700 dark:text-gray-400'>
					Estoy disponible para proyectos freelance. Si tienes alguna pregunta o solicitud, no
					dudes en enviarme un correo electrónico.
				</p>
				<p class='text-black dark:text-white'>¡Espero poder ayudarte con tu proyecto!</p>
				<div class='flex'>
					<form onSubmit$={onSubmit} class='text-step--1 mt-3 flex-1' preventdefault:submit>
						<input
							required
							onInput$={(e) => {
								formState.name = (e.target as HTMLInputElement).value;
							}}
							autoComplete='off'
							name='name'
							type='text'
							value={formState.name}
							placeholder='Nombre'
							class='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500'
						/>
						<input
							required
							onInput$={(e) => {
								formState.email = (e.target as HTMLInputElement).value;
							}}
							autoComplete='off'
							name='email'
							type='email'
							value={formState.email}
							class='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500'
							placeholder='Correo electrónico'
						/>
						<input
							required
							onInput$={(e) => {
								formState.subject = (e.target as HTMLInputElement).value;
							}}
							autoComplete='off'
							name='subject'
							type='text'
							value={formState.subject}
							placeholder='Asunto'
							class='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500'
						/>
						<textarea
							required
							onInput$={(e) => {
								formState.message = (e.target as HTMLTextAreaElement).value;
							}}
							autoComplete='off'
							name='message'
							rows={5}
							value={formState.message}
							placeholder='Mensaje'
							class='border outline-none border-pallete-light-gray resize-none rounded-md w-full p-2 mb-2 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500'
						></textarea>
						<button
							disabled={loading.value}
							type='submit'
							class='font-semibold px-5 py-2 rounded-md border bg-black text-white hover:text-black hover:bg-white hover:border-black transition-all duration-300 ease-in-out dark:bg-blue-600 dark:border-none dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50'
						>
							{loading.value ? 'Enviando...' : 'Enviar'}
						</button>
					</form>
					<Lottie idContainer='contact' path='contact' class='hidden sm:flex flex-1 w-80' />
				</div>
			</div>
			<Alert>
				<span q:slot='title'>¡Gracias por contactarme!</span>
				<span q:slot='message'>Te responderé lo más pronto posible.</span>
			</Alert>
		</section>
	);
});
