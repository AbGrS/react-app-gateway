import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleLogin, fetchResults as fetchResultsApi } from './loginApis';
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

export const fetchResults = createAsyncThunk(
  'user/fetchResults',
  async (token, {rejectWithValue}) => {
      try {
    return await fetchResultsApi(token);
  } catch (err) {
    return rejectWithValue(err);
  }
  }
);


  