import {createSlice} from "@reduxjs/toolkit";
import {fetchEducationLanguage, fetchRegionsData} from "../thunk/oftenUsedThunk";

const initialState = {
    regions: null,
    educationLanguages: [],
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
                state.regions = action.payload.results
                state.loading = "regionSuccess"
                state.error = null
            })
            .addCase(fetchRegionsData.rejected, (state) => {
                state.loading = null
                state.error = "error"
            })
            .addCase(fetchEducationLanguage.pending, (state) => {
                state.loading = "regionLoading"
                state.error = null
            })
            .addCase(fetchEducationLanguage.fulfilled, (state, action) => {
                state.educationLanguages = action.payload?.results
                state.loading = "regionSuccess"
                state.error = null
            })
            .addCase(fetchEducationLanguage.rejected, (state) => {
                state.loading = null
                state.error = "error"
            })
})

export default oftenUsedSlice.reducer
