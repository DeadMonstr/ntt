import React, {memo, useCallback, useEffect, useState} from 'react';

import {OrganizationProfileAnnouncements} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Select} from "shared/ui/select";

import cls from "./organizationProfileAnnouncementsModal.module.sass";
import {useDispatch} from "react-redux";
import {
    fetchOrganizationProfileAnnouncements
} from "../../../../entities/organizationProfile/model/thunk/organizationProfileThunk";
import {useForm} from "react-hook-form";
import {API_URL, useHttp} from "../../../../shared/api/base";


export const OrganizationProfileAnnouncementsModal = memo(() => {

    useEffect(() => {
        dispatch(fetchOrganizationProfileAnnouncements())
    }, [])

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const onActiveModal = useCallback(() => setActiveModal(true), [activeModal])

    const onSubmit = (data) => {
        console.log(data, "data")
        request(`${API_URL}organizations/organization_landing_page/crud/update/${activeModal?.id}/`, "PATCH", JSON.stringify(data))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <OrganizationProfileAnnouncements setActive={setActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    extraClassname={cls.announcements}
                >
                    <h1 className={cls.announcements__title}>Ma’lumotni o’zgartirish</h1>
                    <Input
                        register={register}
                        name={"name_optional"}
                        value={activeModal?.name_optional}
                        extraClass={cls.announcements__input}
                        placeholder={"Name"}
                    />
                    <Textarea
                        register={register}
                        name={"desc"}
                        value={activeModal?.desc}
                        extraClass={cls.announcements__input}
                        placeholder={"Desc"}
                    />
                    <Input extraClass={cls.announcements__input} placeholder={"Year"}/>
                    <Input extraClass={cls.announcements__input} placeholder={"Day"}/>
                    <Select extraClass={cls.announcements__input} titleOption={"Daraja"}/>
                    {!isChecked && <Input extraClass={cls.announcements__input} placeholder={"Price"}/>}
                    <Input
                        onChange={() => setIsChecked(!isChecked)}
                        checked={isChecked}
                        extraClass={cls.announcements__input}
                        type={"checkbox"}
                        placeholder={"Grant"}
                    />
                    {
                        isChecked
                            ? <>
                                <Select extraClass={cls.announcements__input} titleOption={"Shift"}/>
                                <Select extraClass={cls.announcements__input} titleOption={"Fan"}/>
                                <Input extraClass={cls.announcements__input} placeholder={"Study year"}/>
                                <Input extraClass={cls.announcements__input} placeholder={"Ball"}/>
                            </>
                            : null
                    }
                </Form>
            </Modal>
        </>
    );
})
