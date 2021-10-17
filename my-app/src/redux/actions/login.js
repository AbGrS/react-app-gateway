import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
export const login = createAsyncThunk(
    'counter/fetchCount',
    async ({amount}, {rejectWithValue}) => {
        try {
			return await fetchCount(amount);
		} catch (err) {
			return rejectWithValue(err);
		}
    }
  );
  