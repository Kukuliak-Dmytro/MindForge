import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface user{
    role: 'employee' | 'employer';
    isLogged: boolean;
}
const initialState: user = {
    role: 'employer',
    isLogged: false
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setRole(state:user,action:PayloadAction<'employee' | 'employer'>){
            state.role=action.payload
        },
        setIsLogged(state:user,action:PayloadAction<boolean>){
            state.isLogged=action.payload
        }
    }
})
export const {setRole,setIsLogged}=userSlice.actions

export default userSlice.reducer