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

export const OrganizationProfileAnnouncementsModal = memo(() => {

    const [isChange, setIsChange] = useState(false)

    return (
        <div className={cls.announcements}>
            {
                isChange ? <Form extraClassname={cls.announcements__form}>
                    <div className={cls.announcements__change}>
                        <Select extraClass={cls.announcements__select} title={"Darajalar"}/>
                        <Select extraClass={cls.announcements__select} title={"Soha"}/>
                        <Select extraClass={cls.announcements__select} title={" Education Langage"}/>
                        <Select extraClass={cls.announcements__select} title={"Shift"}/>
                        <Input extraClass={cls.announcements__input}/>
                        <Input
                            type={"checkbox"}
                            placeholder={"Grant"}
                        />
                        <Textarea title={"Talablar"}/>
                        <Textarea title={"Desc"}/>
                    </div>
                </Form> : <div className={cls.announcements__content}>
                    <AnnouncementsHeader/>
                    <AnnouncementsList setIsChange={setIsChange}/>
                </div>
            }
        </div>
    );
})
