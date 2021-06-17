import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList component', () => {
	it('renders', () => {
		render(<PhotoList />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<PhotoList />);
		expect(asFragment()).toMatchSnapshot();
	});
});