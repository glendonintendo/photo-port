import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [formState, setFormState] = useState({ name: '', email: '', message: ''});
	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');
	
	const handleBlur = (e) => {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({...formState, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	return (
		<section>
			<h1>Contact Me</h1>
			
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input 
						type ='text' 
						name='name' 
						default={name} 
						onBlur={handleBlur}					
					/>
				</div>

				<div>
					<label htmlFor='email'>Email Address:</label>
					<input 
						type='email' 
						name='email' 
						default={email} 
						onBlur={handleBlur}	
					/>
				</div>

				<div>
					<label htmlFor='message'>Message:</label>
					<textarea 
						name='message' 
						rows='5' 
						default={message} 
						onBlur={handleBlur}	
					/>
				</div>

				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}

				<button type='submit'>Submit</button>
			</form>
		</section>
	)
};

export default ContactForm;