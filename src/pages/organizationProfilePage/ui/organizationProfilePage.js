import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {
    fetchOrganizationProfileData,
    OrganizationProfileApplications,
    OrganizationProfileHeader,
} from "entities/organizationProfile";
import {
    OrganizationProfileAnnouncementsModal,
    OrganizationProfileGalleryModal,
    OrganizationProfileInfoModal,
    OrganizationProfileReadMoreModal
} from "features/organizationProfile";

import cls from "./organizationProfilePage.module.sass";

export const OrganizationProfilePage = () => {

    const dispatch = useDispatch()

    const [activeLink, setActiveLink] = useState("")

    useEffect(() => {
        dispatch(fetchOrganizationProfileData())
    }, [])

    return (
        <div className={cls.organization}>
            <OrganizationProfileHeader setActive={setActiveLink}/>
            <div className={cls.organization__container}>
                <OrganizationProfileInfoModal/>
                {activeLink === "Batafsil" && <OrganizationProfileReadMoreModal/>}
                {activeLink === "E’lonlar" && <OrganizationProfileAnnouncementsModal/>}
                {activeLink === "Gallereya" && <OrganizationProfileGalleryModal/>}
                {activeLink === "Arizalar" && <OrganizationProfileApplications/>}
            </div>
        </div>
    );
}
