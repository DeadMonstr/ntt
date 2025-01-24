import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {userRefreshData} from "../../../pages/login/model/loginThunk";

export const RequireAuth = () => {

    const dispatch = useDispatch()
    const refresh_token = sessionStorage.getItem("refresh_token")

    useEffect(() => {
        dispatch(userRefreshData({refresh: refresh_token}))
    },[])

    return (
        <div>

        </div>
    );
}
