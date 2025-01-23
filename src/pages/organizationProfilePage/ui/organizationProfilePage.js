import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
    fetchOrganizationProfileData,
    OrganizationProfileApplications,
    OrganizationProfileHeader,
} from "entities/organizationProfile";
import {
    OrganizationProfileAnnouncementsModal,
    OrganizationProfileGalleryModal,
    OrganizationProfileInfoModal,
    OrganizationProfileReadMoreModal,
    OrganizationProfileInfoAbout,
    OrganizationProfileGrants
} from "features/organizationProfile";

import cls from "./organizationProfilePage.module.sass";
import {useParams} from "react-router";
import {getSeasonSwitcherData} from "features/seasonSwitcher";

export const OrganizationProfilePage = () => {


    const {id} = useParams()

    const dispatch = useDispatch()

    const currentSeason = useSelector(getSeasonSwitcherData)


    const [activeLink, setActiveLink] = useState("")

    useEffect(() => {
        dispatch(fetchOrganizationProfileData(id))
    }, [])



    return (
        <div className={cls.organization}>
            <OrganizationProfileHeader setActive={setActiveLink}/>
            <div className={cls.organization__container}>
                <div className={cls.left}>
                    <OrganizationProfileInfoModal/>
                </div>
                <div className={cls.right}>
                    {activeLink === "Haqida" && <OrganizationProfileInfoAbout/>}
                    {activeLink === "Grantlar" && <OrganizationProfileGrants/>}
                    {activeLink === "E’lonlar" && <OrganizationProfileAnnouncementsModal seasonId={currentSeason?.id}/>}
                    {activeLink === "Gallereya" && <OrganizationProfileGalleryModal/>}
                    {activeLink === "Arizalar" && <OrganizationProfileApplications/>}
                </div>
            </div>
        </div>
    );
}
