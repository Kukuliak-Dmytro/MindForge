import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface settings {
    currentTheme: 'light' | 'dark';
}
const initialState: settings = {
    currentTheme: 'light'
}
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme(state: settings, action: PayloadAction<'light' | 'dark'>) {
            state.currentTheme = action.payload
        }
    }
})
export const {setTheme}=settingsSlice.actions

export default settingsSlice.reducer