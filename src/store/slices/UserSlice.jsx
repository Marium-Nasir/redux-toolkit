import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload);
        },
        dltUser(state,action) {
            state.splice(action.payload,1)
        },
        dltAllUsers(state,action) {
            state.length = 0
        }
    }
});
export default userSlice.reducer;
export const {addUser,dltUser,dltAllUsers} = userSlice.actions;