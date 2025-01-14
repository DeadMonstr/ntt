import {createSlice} from "@reduxjs/toolkit";
import {fetchOrganizationProfileData} from "../thunk/organizationProfileThunk";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const OrganizationProfileSlice = createSlice({
    name: "OrganizationProfileSlice",
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchOrganizationProfileData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchOrganizationProfileData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchOrganizationProfileData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})


export const {updateData} = OrganizationProfileSlice.actions
export default OrganizationProfileSlice.reducer
