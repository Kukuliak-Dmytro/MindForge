import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import userReducer from './userSlice';
export const store = configureStore({
    reducer: {
        settingsStore: settingsReducer,
        userStore: userReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;