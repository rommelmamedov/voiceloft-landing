import axios from 'axios';
import { toast } from 'react-hot-toast';

import { baseURL } from '../constants';

export const fetchFormSubmission = async formValues => {
	try {
		const response = await axios.post(`${baseURL}/form`, formValues, {
			headers: { 'Content-Type': 'application/json' },
		});

		console.log('🚀 ~ file: formSubmission.js:11 ~ fetchFileUpload ~ response', response);

		toast.success(`You successfully submitted the form!`);
	} catch (error) {
		console.error(error);
		toast.error(error.message);
	}
};
