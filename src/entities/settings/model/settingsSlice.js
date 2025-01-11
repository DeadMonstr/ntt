import {createSlice} from "@reduxjs/toolkit";


const initialState = {

    list: [
        {name: "Maktabgacha ta’lim tashkiloti" , id: 1},
        {name: "Maktablar" , id: 2},
        {name: "Professional ta’lim tashkiloti" , id: 3},
        {name: "Oliy ta’lim tashkiloti" , id: 4},
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
