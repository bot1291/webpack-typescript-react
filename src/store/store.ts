import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './reducers/SampleSlice';

export const store = configureStore({
	reducer: {
		sampleReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
