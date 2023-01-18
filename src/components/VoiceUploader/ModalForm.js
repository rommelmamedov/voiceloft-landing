import { useCallback, useState } from 'react';
import PureModal from 'react-pure-modal';

import { fetchFormSubmission } from '@features/formSubmission';

import { Button } from '@components/Button';

import { providers } from '../../constants';

export const ModalForm = ({ token, isModalFormOpen, setIsModalFormOpen }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		lastName: '',
		company: '',
		email: '',
		provider: '',
	});

	const handleCloseModalForm = useCallback(() => {
		setIsModalFormOpen(false);
	}, [setIsModalFormOpen]);

	const handleSubmit = useCallback(
		async event => {
			event.preventDefault();
			await fetchFormSubmission({ ...formValues, token });
		},
		[formValues, token]
	);

	const handleChange = useCallback(event => {
		setFormValues(formValues => ({ ...formValues, [event.target.name]: event.target.value }));
	}, []);

	console.log(formValues);

	return (
		<PureModal
			isOpen={isModalFormOpen}
			onClose={handleCloseModalForm}
			scrollable={false}
			closeButton={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			}
		>
			<div className="modal-form-body">
				<h2>Compare Results</h2>
				<p>Please fill out the form to get the results.</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">First Name</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Enter first name"
						value={formValues.name}
						required
						onChange={handleChange}
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						placeholder="Enter last name"
						value={formValues.lastName}
						required
						onChange={handleChange}
					/>
					<label htmlFor="company">Company Name</label>
					<input
						id="company"
						name="company"
						type="text"
						placeholder="Enter company name"
						value={formValues.company}
						required
						onChange={handleChange}
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
						onChange={handleChange}
					/>
					<label htmlFor="provider">Provider</label>
					<select
						id="provider"
						name="provider"
						value={formValues.provider}
						placeholder="Select an option"
						required
						onChange={handleChange}
					>
						<option value="" disabled hidden>
							Select provider
						</option>
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
