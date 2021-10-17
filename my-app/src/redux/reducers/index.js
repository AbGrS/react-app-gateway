import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './login';

const appReducer = combineReducers({
	user: userSlice.reducer,
});

export default function rootReducer(state, action) {
	return appReducer(state, action);
}
