import axios from 'axios';
import { toast } from 'react-hot-toast';

import { baseURL } from '../constants';

export const fetchFormSubmission = async formValues => {
	try {
		const response = await axios.post(`${baseURL}/form`, formValues, {
			headers: { 'Content-Type': 'application/json' },
		});

		toast.success(`You successfully submitted the form!`);
	} catch (error) {
		console.error(error);
		toast.error(error.message);
	}
};
