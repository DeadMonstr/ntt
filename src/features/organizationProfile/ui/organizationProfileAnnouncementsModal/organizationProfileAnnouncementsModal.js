import React, {memo, useCallback, useState} from 'react';

import {OrganizationProfileAnnouncements} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Select} from "shared/ui/select";

import cls from "./organizationProfileAnnouncementsModal.module.sass";


export const OrganizationProfileAnnouncementsModal = memo(() => {

    const [activeModal, setActiveModal] = useState(false)

    const onActiveModal = useCallback(() => setActiveModal(true), [activeModal])

    return (
        <>
            <OrganizationProfileAnnouncements setActive={setActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form extraClassname={cls.announcements}>
                    <h1 className={cls.announcements__title}>Ma’lumotni o’zgartirish</h1>
                    <Input extraClass={cls.announcements__input} placeholder={"Name"}/>
                    <Textarea extraClass={cls.announcements__input} placeholder={"Desc"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Year"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Day"}/>
                    <Select extraClass={cls.announcements__input} titleOption={"Daraja"}/>
                    <Input extraClass={cls.announcements__input} type={"checkbox"} placeholder={"Grant"}/>
                    <Select extraClass={cls.announcements__input} titleOption={"Shift"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Price"}/>
                    <Select extraClass={cls.announcements__input} titleOption={"Fan"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Study year"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Ball"}/>
                    <Textarea extraClass={cls.announcements__input} placeholder={"Desc"}/>
                </Form>
            </Modal>
        </>
    );
})
