import {
	login,
    fetchResults
} from '../actions';
import userSlice from './login';

const initialState = {
	isLoading: true,
	results: [],
};

describe('login reducer', () => {
	it('login as pending', () => {
		const action = {
			type: login.pending,
			payload: true
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.isLoading).toEqual(true);
	});
    it('login as fullfilled', () => {
		const action = {
			type: login.fulfilled,
			payload: {
                data: {
                    token: '123'
                }
            }
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.tokenReceived).toEqual('123');
	});
    it('login as rejected', () => {
		const action = {
			type: login.rejected,
			payload: {error: 'some error'}
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.error).toEqual(true);
	});
});

describe('fetch results reducer for dashboard', () => {
	it('fetchResults as pending', () => {
		const action = {
			type: fetchResults.pending,
			payload: true
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.isLoading).toEqual(true);
	});
    it('fetchResults as fullfilled', () => {
		const action = {
			type: fetchResults.fulfilled,
			payload: {
                data: {event: 'finish', horse:  {id: 1, name: 'Stalwart'}}
            }
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.results).toEqual([{event: 'finish', horse:  {id: 1, name: 'Stalwart'}}]);
	});
    it('fetchResults as rejected', () => {
		const action = {
			type: fetchResults.rejected,
			payload: {response : {data: {error: 'Access denied'}}}
		};
		const stateAfter = userSlice.reducer(initialState, action);
		expect(stateAfter.tokenExpired).toEqual(true);
	});
});
