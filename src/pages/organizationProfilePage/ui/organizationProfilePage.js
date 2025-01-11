import React, {useState} from 'react';

import {
    OrganizationProfileAnnouncements,
    OrganizationProfileApplications,
    OrganizationProfileHeader,
    OrganizationProfileInfo
} from "entities/organizationProfile";

import cls from "./organizationProfilePage.module.sass";

export const OrganizationProfilePage = () => {

    const [activeLink, setActiveLink] = useState("")

    return (
        <div className={cls.organization}>
            <OrganizationProfileHeader setActive={setActiveLink}/>
            <div className={cls.organization__container}>
                <OrganizationProfileInfo/>
                {activeLink === "Arizalar" && <OrganizationProfileApplications/>}
                {activeLink === "E’lonlar" && <OrganizationProfileAnnouncements/>}
            </div>
        </div>
    );
}
