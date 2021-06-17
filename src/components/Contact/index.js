import React, { useState } from 'react';

function ContactForm() {
	const [formState, setFormState] = useState({ name: '', email: '', message: ''});
	const { name, email, message } = formState;
	
	const handleChange = (e) => {
		setFormState({...formState, [e.target.name]: e.target.value });
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
						onChange={handleChange}					
					/>
				</div>

				<div>
					<label htmlFor='email'>Email Address:</label>
					<input 
						type='email' 
						name='email' 
						default={email} 
						onChange={handleChange}	
					/>
				</div>

				<div>
					<label htmlFor='message'>Message:</label>
					<textarea 
						name='message' 
						rows='5' 
						default={message} 
						onChange={handleChange}	
					/>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</section>
	)
};

export default ContactForm;