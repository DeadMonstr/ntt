import {memo, useState} from 'react';

import {
    AnnouncementsHeader,
    AnnouncementsList
} from "entities/organizationProfile";
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Form} from "shared/ui/form";

import cls from "./organizationProfileAnnouncementsModal.module.sass";

import {
    OrganizationAccouncementsForm
} from "../organizationAccouncementsForm/organizationAccouncementsForm";

export const OrganizationProfileAnnouncementsModal = memo(() => {

    const [isChange, setIsChange] = useState(false)

    return (
        <div className={cls.announcements}>
            {
                isChange ? <OrganizationAccouncementsForm setIsChange={setIsChange}/>
                    :
                <div className={cls.announcements__content}>
                    <AnnouncementsHeader setIsChange={setIsChange}/>
                    <AnnouncementsList setIsChange={setIsChange}/>
                </div>
            }
        </div>
    );
})



