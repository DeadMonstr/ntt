import {createSlice} from "@reduxjs/toolkit";
import {fetchRegionsData} from "../thunk/oftenUsedThunk";

const initialState = {
    regions: null,
    loading: null,
    error: null
}

const oftenUsedSlice = createSlice({
    name: "oftenUsedSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchRegionsData.pending, (state) => {
                state.loading = "regionLoading"
                state.error = null
            })
            .addCase(fetchRegionsData.fulfilled, (state, action) => {
                state.regions = action.payload
                state.loading = "regionSuccess"
                state.error = null
            })
            .addCase(fetchRegionsData.rejected, (state) => {
                state.loading = null
                state.error = "error"
            })
})

export default oftenUsedSlice.reducer
