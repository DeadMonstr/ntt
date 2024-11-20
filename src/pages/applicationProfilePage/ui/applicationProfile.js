import {
    ApplicationProfileHeader,
    ApplicationProfileInfo,
    ApplicationProfileInfoDocument,
    ApplicationProfileInfoEducation,
    ApplicationProfileUserDocument,
    fetchApplicationProfileData
} from "entities/applicationProfile";
import cls from "./application.module.sass"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {applicationProfileSelectors} from "entities/applicationProfile";

export const ApplicationProfile = () => {



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchApplicationProfileData({id: 2}))
    },[dispatch])



    return (
        <div className={cls.application}>
            <ApplicationProfileHeader/>
            <ApplicationProfileInfo/>
            <ApplicationProfileInfoDocument/>
            <ApplicationProfileUserDocument/>
            <ApplicationProfileInfoEducation/>
        </div>
    );
};

