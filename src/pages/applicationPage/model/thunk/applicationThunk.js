import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, ParamUrl, useHttp} from "shared/api/base";


export const fetchApplicationData = createAsyncThunk(
    "applicationSlice/fetchApplicationData",
    async (data) => {
        const {request} = useHttp()

        const params = ParamUrl(data);

        return request(`${API_URL}students/student_request_list`,"GET", null )
    }
)


export const fetchApplicationFiltersData = createAsyncThunk(
    "applicationSlice/fetchApplicationFiltersData",
    async ({id}) => {
        const {request} = useHttp()

        console.log(id)

        return request(`${API_URL}students/student_requests/filter_items/?${id ? `type_id=${id}` : ``}`,"GET", null )
    }
)