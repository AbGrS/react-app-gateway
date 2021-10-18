import { createSlice } from '@reduxjs/toolkit';
import {
	login,
	fetchResults,
} from '../actions';

const initialState = {
	isLoading: true,
	results: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {

		[login.pending]: (state) => {
			state.isLoading = true;
		},
		[login.fulfilled]: (state, action) => {
			localStorage.setItem('token', action.payload.data.token);
			state.tokenReceived = action.payload.data.token;
			state.results = [];
			state.tokenExpired = false;
		},
		[login.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = true;
		},
		[fetchResults.fulfilled]: (state, action) => {
			state.results.push(action.payload.data);
			state.error = false;
		},
		[fetchResults.rejected]: (state, action) => {
			// state.tokenExpired = true;
			if(action.payload.response.data.error === 'Access denied'){
				state.tokenExpired = true;
			}
		}
	},
});

export default userSlice;
