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
			debugger
			const abc = action.payload.data;
			state.value= abc;
			alert(abc)
			console.log(abc)
		},
		[login.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload.error;
		},

	},
});

export default userSlice;
