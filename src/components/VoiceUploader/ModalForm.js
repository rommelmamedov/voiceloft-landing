import { useCallback, useState } from 'react';
import PureModal from 'react-pure-modal';

import { Button } from '@components/Button';

import { providers } from '../../constants';

export const ModalForm = ({ isModalFormOpen, setIsModalFormOpen }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		surname: '',
		company: '',
		email: '',
		provider: '',
	});

	const handleCloseModalForm = useCallback(() => {
		setIsModalFormOpen(false);
	}, [setIsModalFormOpen]);

	const handleSubmit = useCallback(event => {
		console.log('do something');
	}, []);

	return (
		<PureModal isOpen={isModalFormOpen} onClose={handleCloseModalForm}>
			<div className="modal-form-body">
				<h2>Compare Results</h2>
				<p>Please fill out the form to get the results.</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">First Name</label>
					<input id="name" name="name" type="text" placeholder="Enter first name" value={formValues.name} required />
					<label htmlFor="surname">Last Name</label>
					<input
						id="surname"
						name="surname"
						type="text"
						placeholder="Enter last name"
						value={formValues.surname}
						required
					/>
					<label htmlFor="company">Company Name</label>
					<input
						id="company"
						name="company"
						type="text"
						placeholder="Enter company name"
						value={formValues.company}
						required
					/>
					{/* TODO: Email format validation is needed - only corporate emails are allowed. No gmails etc. We need to show an error message for each filled if they are filled wrong or empty. */}
					<label htmlFor="email">Company Email</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter company email"
						value={formValues.email}
						required
					/>
					<label htmlFor="provider">Provider</label>
					<select id="provider" name="provider" value={formValues.provider} placeholder="Select an option" required>
						<option disabled>Select provider</option>
						{providers.map(provider => (
							<option key={provider} value={provider}>
								{provider}
							</option>
						))}
					</select>
					<Button type="submit">Compare</Button>
				</form>
			</div>
		</PureModal>
	);
};
