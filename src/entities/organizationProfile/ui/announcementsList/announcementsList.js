import {memo, useEffect, useState} from 'react';

import {AnnouncementsItem} from "../announcementsItem/announcementsItem";

import cls from "./announcementsList.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {
    getOrganizationProfileAnnouncements
} from "entities/organizationProfile/model/selector/organizationProfileSelector";
import {fetchOrganizationProfileAnnouncements} from "entities/organizationProfile/model/thunk/organizationProfileThunk";
import {useParams} from "react-router";

export const AnnouncementsList = memo(({userRole,setIsChange}) => {

    const listAnn = useSelector(getOrganizationProfileAnnouncements)
    const {id} = useParams()




    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(fetchOrganizationProfileAnnouncements(id))
    },[id])




    return (
        <div className={cls.announcements}>
            {
                listAnn.map(item => {
                    return (
                        <AnnouncementsItem userRole={userRole} item={item}/>
                    )
                })
            }

        </div>
    );
})
