import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name:'theme', 
    intiialState:{
        data:'LIGHT'
    },
    reducers:{
        changeTheme(state, action){
            state.data=action.payload
        }
    }
})

export const {changeTheme}= ThemeSlice.actions
export default  ThemeSlice.reducer