import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "shared/api/base";

export const fetchRegionsData = createAsyncThunk(
    "oftenUsedSlice/fetchRegionsData",
    () => {
        const {request} = useHttp()
        return request(`${API_URL}region/get/`)
    }
)


