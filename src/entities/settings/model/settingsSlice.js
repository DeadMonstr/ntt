import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: [
        {name: "Tashkilot turlari ro'yxati", id: 1},
        {name: "Yangi Tashkilotlar", id: 2},
    ],
    loading: false,
    error: null,
}
const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
    }

})

export default settingsSlice.reducer
