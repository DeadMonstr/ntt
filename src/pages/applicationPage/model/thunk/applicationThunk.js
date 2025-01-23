import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, ParamUrl, useHttp} from "shared/api/base";

function ParamUrls(params) {
    return Object.entries(params)
        .filter(([key, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

// agar ParamUrl ishlasa uni qaytarib qo'ysela bo'ladi prosta man ishlatomadim )


export const fetchApplicationData = createAsyncThunk(
    "applicationSlice/fetchApplicationData",
    async (data) => {
        const {request} = useHttp()

        const params = ParamUrl(data);  // bu paramurlga uncha tushinmadim routega xato qo'yvoti masalan search=&type_id=1 bo'lishi kere lekin uni o'rniga search=type_id_1& shunaqa qivoti shundan boshqa funksiya yozib qo'ydim )

        return request(`${API_URL}students/student_requests/list/?${ParamUrls(data)}`,"GET", null )
    }
)




export const fetchApplicationFiltersData = createAsyncThunk(
    "applicationSlice/fetchApplicationFiltersData",
    async ({id}) => {
        const {request} = useHttp()


        return request(`${API_URL}students/student_requests/filter_items/?${id ? `type_id=${id}` : ``}`,"GET", null )
    }
)