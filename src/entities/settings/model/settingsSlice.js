import {createSlice} from "@reduxjs/toolkit";


const initialState = {

    list: [
        {name: "Maktabgacha ta’lim tashkiloti", id: 1},
        {name: "Maktablar", id: 2},
        {name: "Professional ta’lim tashkiloti", id: 3},
        {name: "Oliy ta’lim tashkiloti", id: 4},
    ],

    direction: [
        {
            name: "University of Business and Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            id: 1
        },
        {
            name: "University of Business and Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            id: 2
        },{
            name: "University of Business and Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            id: 3
        },{
            name: "University of Business and Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            id: 4
        },
    ],
    degree: [
        {name: "degree" , description: "" , id: 1}
    ],
    loading: false,
    error: null,
}
const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState,
    reducers: {
        onAddHeaderItem: (state, action) => {
            state.list = [...state.list, action.payload]
        },
        onEditHeaderItem: (state, action) => {
            console.log(action.payload)
            state.list = state.list.map(item => item.id === action.payload.id ? {
                ...item,
                name: action.payload.data
            } : item)
        },
        onDeleteHeaderItem: (state, action) => {
            console.log(action.payload)
            state.list = state.list.filter(item => item.id !== action.payload)
        },


        onAddDirection : (state , action) => {
            state.direction = [...state.direction, action.payload]
        },

        onEditDirection: (state, action) => {
            state.direction = state.direction.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.data.name,
                        description: action.payload.data.description
                    }
                }
                return item
            })
        },
        onDeleteDirection: (state, action) => {

            state.direction = state.direction.filter(item => item.id !== action.payload)

        },



        onAddDegree : (state , action) => {
            state.degree = [...state.degree, action.payload]
        },

        onEditDegree: (state, action) => {
            state.degree = state.degree.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.data.name,
                        description: action.payload.data.description
                    }
                }
                return item
            })
        },
        onDeleteDegree: (state, action) => {

            state.degree = state.degree.filter(item => item.id !== action.payload)

        },



    },
    extraReducers: builder => {
    }

})

export const {
    onEditHeaderItem,
    onAddHeaderItem,
    onDeleteHeaderItem ,
    onAddDirection ,
    onEditDirection ,
    onDeleteDirection,
    onAddDegree,
    onEditDegree,
    onDeleteDegree
} = settingsSlice.actions

export default settingsSlice.reducer
