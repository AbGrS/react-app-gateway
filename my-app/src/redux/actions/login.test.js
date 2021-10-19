import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {
	login,
    fetchResults
} from './login';

jest.mock('axios', () => ({
	...jest.requireActual('axios'),
	get: jest.fn(() => Promise.resolve({ data: 'data' })),
	post: jest.fn(() => Promise.resolve({ data: 'data' }))
}));

function getMockStore() {
	return configureMockStore([thunkMiddleware, promiseMiddleware])({});
}

describe('actions', () => {
	it('login should dispatch pending actions', async () => {
		// mocks
		const store = getMockStore();
		await store.dispatch(login({email: 'abc@gmail.com', password: 'asdafa'}));

		// dispatch actions
		const dispatchedActions = store.getActions();
		expect(dispatchedActions).toHaveLength(2);
		expect(dispatchedActions[0]).toHaveProperty('type', 'user/login/pending');
	});

    it('fetch results should dispatch pending actions', async () => {
		// mocks
		const store = getMockStore();
		await store.dispatch(fetchResults({token: '123124124'}));

		// dispatch actions
		const dispatchedActions = store.getActions();
		expect(dispatchedActions).toHaveLength(2);
		expect(dispatchedActions[0]).toHaveProperty('type', 'user/fetchResults/pending');
	});
});

