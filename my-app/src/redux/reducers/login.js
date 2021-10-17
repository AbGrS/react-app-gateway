import { createSlice } from '@reduxjs/toolkit';
import {
	login
} from '../actions';

const initialState = {
	isLoading: true,
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
			const {data} = action.payload;
			state.value= data;
		},
		[login.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload.error;
		},

	},
});

export default userSlice;
