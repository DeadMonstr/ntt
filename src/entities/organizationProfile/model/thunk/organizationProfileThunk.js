import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "shared/api/base";

export const fetchOrganizationProfileData =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileData",
        (id) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization/get/${id}/`)
        }
    )

export const fetchOrganizationProfileGallery =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileGallery",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_gallery/get/?organization_id=${id}`)
        }
    )

export const fetchOrganizationProfileApplications =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileApplications",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}students/student_request_list/?organization_id=${id}`)
        }
    )

export const fetchOrganizationProfileReadMore =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileReadMore",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_advantage/get/${id}/`)
        }
    )

export const fetchOrganizationProfileAdmin =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileAdmin",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_user/get/${id}/`)
        }
    )

export const fetchOrganizationProfileDegrees =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileDegrees",
        (id) => {
            const {request} = useHttp()
            return request(`${API_URL}organization-degrees/organization-degree/get/list/${id}`)
        }
    )
