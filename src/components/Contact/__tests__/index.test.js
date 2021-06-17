import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact form', () => {
	it('renders', () => {
		render(<Contact />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<Contact />);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('Contact title', () => {
	it('renders', () => {
		const { getByTestId } = render(<Contact />);
		
		expect(getByTestId('form-title')).toHaveTextContent('Contact Me');
		expect(getByTestId('form-button')).toHaveTextContent('Submit');
	});
});