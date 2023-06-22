import axios, { type AxiosError } from 'axios';

type ServerError = { errors: { message: string; field: string }[] };

export const sendEmail = async <T>(values: T) => {
	try {
		await axios.post(`${import.meta.env.PUBLIC_API_URL}/contact`, values);
		return { ok: true };
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError<ServerError>;
			if (serverError && serverError.response) {
				return {
					ok: false,
					error: serverError.response.data.errors[0].message,
				};
			}
		} else {
			return {
				ok: false,
				error: 'Hubo un problema, intente mas tarde!',
			};
		}
	}
};
