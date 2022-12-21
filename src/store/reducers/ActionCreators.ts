import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISample } from '../../interfaces/ISample';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<ISample[]>('url');
			return response.data;
		} catch (error) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue(error);
			}
			return;
		}
	}
);
