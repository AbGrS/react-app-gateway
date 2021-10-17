import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleLogin } from './loginApis';
export const login = createAsyncThunk(
    'user/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
			return await handleLogin({email, password});
		} catch (err) {
			return rejectWithValue(err);
		}
    }
  );
  