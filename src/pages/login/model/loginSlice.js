
import {createSlice} from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
// import {useNavigate} from "react-router";
//
// import {fetchLoginUser, userRefreshData} from "./loginThunk";

const initialState ={
    userId: null,
    username: "",
    password: "",
    role: null,
    loading: false,
    error: null
}

export const loginSlice =createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            sessionStorage.setItem('token', action.payload.access);
            sessionStorage.setItem('refresh_token', action.payload.refresh);
            if (action.payload.access) {
                const decodedToken = jwtDecode(action.payload.access);
                state.userId = decodedToken.user_id; // Bu yerda user_id ni olasiz
                const oldUserId  = localStorage.getItem('user_id');
                console.log(oldUserId, decodedToken.user_id, "hellllllllo")
                localStorage.setItem('user_id', decodedToken.user_id);
            }
            state.loading = false
            state.error = null
        },
        userRefresh: (state, action) => {
            sessionStorage.setItem('token', action.payload.access);
            if (action.payload.access) {
                const decodedToken = jwtDecode(action.payload.access);
                state.userId = decodedToken.user_id; // Bu yerda user_id ni olasiz
            }
            state.loading = false
            state.error = null
        }
    },

})
export default loginSlice.reducer
export const {getUserData, userRefresh} = loginSlice.actions
