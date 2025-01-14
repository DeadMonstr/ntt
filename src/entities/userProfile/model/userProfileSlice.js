import {createSlice} from "@reduxjs/toolkit";
import {fetchUserProfileData} from "./userProfileThunk";


const initialState = {
    userJob: null,
    loading: false,
    error: null
}

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchUserProfileData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUserProfileData.fulfilled, (state, action) => {



                state.userData = action.payload
                state.userBranchId = action.payload?.branch?.id
                state.userJob = action.payload?.role
                localStorage.setItem("role", action.payload?.role)

                localStorage.setItem("phone",  action.payload.phone)

                // state.userSystemId = action.payload.user.branch.location.system.id
                state.loading = false
                state.error = null
            })
            .addCase(fetchUserProfileData.rejected, (state, action) => {
                state.loading = false
                state.error = "error"
            })

})

export default userProfileSlice.reducer
