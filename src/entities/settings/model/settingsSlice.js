import {createSlice} from "@reduxjs/toolkit";


const initialState = {

    list: [
        {name: "Maktabgacha ta’lim tashkiloti", id: 1},
        {name: "Maktablar", id: 2},
        {name: "Professional ta’lim tashkiloti", id: 3},
        {name: "Oliy ta’lim tashkiloti", id: 4},
    ],

    loading: false,
    error: null,
}
const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState,
    reducers: {
        onAddHeaderItem: (state, action) => {
          state.list = [...state.list , action.payload]
        },
        onEditHeaderItem: (state, action) => {
            console.log(action.payload)
            state.list = state.list.map(item => item.id === action.payload.id ? {...item, name: action.payload.data} : item)
        }


    },
    extraReducers: builder => {
    }

})

export const {onEditHeaderItem , onAddHeaderItem} = settingsSlice.actions

export default settingsSlice.reducer
