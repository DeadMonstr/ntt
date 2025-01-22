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
        () => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_gallery/get/?organization_id=1`)
        }
    )

export const fetchOrganizationProfileAnnouncements =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileAnnouncements",
        () => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_landing_page/get/?organization_id=1`)
        }
    )

export const fetchOrganizationProfileApplications =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileApplications",
        () => {
            const {request} = useHttp()
            return request(`${API_URL}students/student_request_list/?organization_id=1`)
        }
    )

export const fetchOrganizationProfileReadMore =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileReadMore",
        () => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_advantage/get/1/`)
        }
    )

export const fetchOrganizationProfileAdmin =
    createAsyncThunk(
        "OrganizationProfileSlice/fetchOrganizationProfileAdmin",
        () => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_user/get/1/`)
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

export const trueAnnouncementsDelete =
    createAsyncThunk(
        "OrganizationProfileSlice/trueAnnouncementsDelete",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_landing_page/crud/delete/${id}/`, "DELETE")
        }
    )

export const falseAnnouncementsDelete =
    createAsyncThunk(
        "OrganizationProfileSlice/falseAnnouncementsDelete",
        ({id}) => {
            const {request} = useHttp()
            return request(`${API_URL}organizations/organization_landing_page/crud/delete/${id}/`, "DELETE")
        }
    )
