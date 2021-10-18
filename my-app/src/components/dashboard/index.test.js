import React from 'react';
import {Dashboard} from './';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { HashRouter, Switch, Route } from 'react-router-dom';

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
  global.localStorage = new LocalStorageMock;

const params = {
	initialState: {
	    results: [],
        tokenExpired: false
	}
};
describe('Dashboard Tests', () => {
	it('should render Dashboard component', () => {
        localStorage.setItem('token', '123');
        const { getByText } = render(
            <Provider store={store}>
                <HashRouter>
                    <Dashboard/>
                </HashRouter>
            </Provider>, params
          );
        
          expect(getByText(/Fetching/i)).toBeInTheDocument();
	});
});
