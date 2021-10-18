import React from 'react';
import {Login} from './';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('Login Tests', () => {
	it('should render Login component', () => {
        const { getByText } = render(
            <Provider store={store}>
              <Login />
            </Provider>
          );
        
          expect(getByText(/Login/i)).toBeInTheDocument();
	});
});
