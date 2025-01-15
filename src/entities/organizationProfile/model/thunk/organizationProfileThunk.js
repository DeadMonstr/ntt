import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "shared/api/base";

export const fetchOrganizationProfileData = createAsyncThunk(
    "OrganizationProfileSlice/fetchOrganizationProfileData",
    () => {
        const {request} = useHttp()
        return request(`${API_URL}organizations/organization/get/1/`)
    }
)

export const fetchOrganizationProfileGallery = createAsyncThunk(
    "OrganizationProfileSlice/fetchOrganizationProfileGallery",
    () =>{
        const {request} = useHttp()
        return request(`${API_URL}organizations/organization_gallery/get/?organization_id=1`)
    }
)

export const fetchOrganizationProfileApplications = createAsyncThunk(
    "OrganizationProfileSlice/fetchOrganizationProfileApplications",
    () =>{
        const {request} = useHttp()
        return request(`${API_URL}organizations/organization_landing_page/get/`)
    }
)
