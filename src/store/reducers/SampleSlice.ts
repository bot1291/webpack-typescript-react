import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISampleState {
	sample: [];
}

export const initialState: ISampleState = {
	sample: [],
};

export const sampleSlice = createSlice({
	name: 'sample',
	initialState,
	reducers: {
		addPizza: (state, action: PayloadAction<[]>) => {
			state.sample = action.payload;
		},
	},
});

export default sampleSlice.reducer;
