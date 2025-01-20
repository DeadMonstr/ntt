import {memo, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {
    OrganizationProfileAnnouncements,
    fetchOrganizationProfileAnnouncements,
    fetchOrganizationProfileDegrees,
    getOrganizationProfileDegrees, deleteAnnouncements,
} from "entities/organizationProfile";
import {
    fetchEducationLanguage,
    getEducationLanguages
} from "entities/oftenUsed";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import {Select} from "shared/ui/select";
import {ConfirmModal} from "shared/ui/confirmModal";
import {API_URL, useHttp} from "shared/api/base";

import cls from "./organizationProfileAnnouncementsModal.module.sass";
import {
    falseAnnouncementsDelete,
    trueAnnouncementsDelete
} from "../../../../entities/organizationProfile/model/thunk/organizationProfileThunk";


export const OrganizationProfileAnnouncementsModal = memo(() => {

    useEffect(() => {
        dispatch(fetchOrganizationProfileAnnouncements())
        dispatch(fetchEducationLanguage())
        dispatch(fetchOrganizationProfileDegrees())
    }, [])

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const languages = useSelector(getEducationLanguages)
    const degrees = useSelector(getOrganizationProfileDegrees)
    const [activeModal, setActiveModal] = useState(false)

    const [isDeleteTrue, setIsDeleteTrue] = useState(false)
    const [isDeleteFalse, setIsDeleteFalse] = useState(false)

    const [addActiveModal, setAddActiveModal] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(false)
    const [selectedDegree, setSelectedDegree] = useState(false)

    const onSubmit = (data) => {
        const res = {
            ...data,
            education_language: selectedLanguage
        }
        request(
            `${API_URL}organizations/organization_landing_page/crud/update/${activeModal?.id}/`,
            "PATCH",
            JSON.stringify(res)
        )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const onCreate = (data) => {
        const res = {
            ...data,
            education_language: selectedLanguage,
            organization: 1,
            year: {
                from_date: data?.start_year,
                to: data?.finish_year
            },
            // expire_date: "2025-11-11",
            degree: selectedDegree,
            grant: isChecked
        }
        request(
            `${API_URL}organizations/organization_landing_page/crud/create/?organization_id=1`,
            "POST",
            JSON.stringify(res)
        )
            .then(res => console.log(res, "create"))
            .catch(err => console.log(err))
    }

    const onDeleteTrue = () => {
        dispatch(trueAnnouncementsDelete({id: isDeleteTrue}))
        dispatch(deleteAnnouncements({type: true, id: isDeleteTrue}))
        setIsDeleteTrue(false)
    }

    const onDeleteFalse = () => {
        dispatch(falseAnnouncementsDelete({id: isDeleteFalse}))
        dispatch(deleteAnnouncements({type: false, id: isDeleteFalse}))
        setIsDeleteFalse(false)
    }

    return (
        <>
            <OrganizationProfileAnnouncements
                isDeleteTrue={setIsDeleteTrue}
                isDeleteFalse={setIsDeleteFalse}
                setActive={setActiveModal}
                isAdd={setAddActiveModal}
            />
            <Modal
                active={addActiveModal}
                setActive={setAddActiveModal}
            >
                <Form
                    onSubmit={handleSubmit(onCreate)}
                    extraClassname={cls.announcements}
                >
                    <h1 className={cls.announcements__title}>Ma’lumot qo'shish</h1>
                    <Input
                        register={register}
                        name={"name_optional"}
                        // value={activeModal?.name_optional}
                        extraClass={cls.announcements__input}
                        placeholder={"Name"}
                    />
                    <Textarea
                        register={register}
                        name={"desc"}
                        // value={activeModal?.desc}
                        extraClass={cls.announcements__input}
                        placeholder={"Desc"}
                    />
                    <Input
                        type={"date"}
                        register={register}
                        name={"start_year"}
                        extraClass={cls.announcements__input}
                        placeholder={"Start year"}
                    />
                    <Input
                        type={"date"}
                        register={register}
                        name={"finish_year"}
                        extraClass={cls.announcements__input}
                        placeholder={"Finish year"}
                    />
                    <Input
                        type={"date"}
                        register={register}
                        name={"expire_date"}
                        extraClass={cls.announcements__input}
                        placeholder={"Expire date"}
                    />
                    <Select
                        register={register}
                        name={"daraja"}
                        extraClass={cls.announcements__input}
                        titleOption={"Daraja"}
                        options={degrees}
                        onChangeOption={setSelectedDegree}
                    />
                    <Select
                        register={register}
                        name={"education_language"}
                        extraClass={cls.announcements__input}
                        titleOption={"Talim tili"}
                        options={languages}
                        onChangeOption={setSelectedLanguage}
                    />
                    {!isChecked && <Input
                        register={register}
                        name={"price"}
                        extraClass={cls.announcements__input}
                        placeholder={"Price"}
                    />
                    }
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
                                <Select
                                    extraClass={cls.announcements__input}
                                    titleOption={"Shift"}
                                />
                                <Select
                                    extraClass={cls.announcements__input}
                                    titleOption={"Fan"}
                                />
                                <Input
                                    register={register}
                                    name={"study_year"}
                                    extraClass={cls.announcements__input}
                                    placeholder={"Study year"}
                                />
                                <Input
                                    register={register}
                                    name={"score"}
                                    extraClass={cls.announcements__input}
                                    placeholder={"Ball"}
                                />
                            </>
                            : null
                    }
                </Form>
            </Modal>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    extraClassname={cls.announcements}
                >
                    <h1 className={cls.announcements__title}>Ma’lumot o'zgartirish</h1>
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
                    <Input
                        value={activeModal?.year_id?.from_date}
                        type={"date"}
                        register={register}
                        name={"start_year"}
                        extraClass={cls.announcements__input}
                        placeholder={"Start year"}
                    />
                    <Input
                        value={activeModal?.year_id?.to}
                        type={"date"}
                        register={register}
                        name={"finish_year"}
                        extraClass={cls.announcements__input}
                        placeholder={"Finish year"}
                    />
                    <Input
                        value={activeModal?.expire_date}
                        type={"date"}
                        register={register}
                        name={"expire_date"}
                        extraClass={cls.announcements__input}
                        placeholder={"Expire date"}
                    />
                    <Select
                        defaultValue={activeModal?.degree_id?.id}
                        register={register}
                        name={"daraja"}
                        extraClass={cls.announcements__input}
                        titleOption={"Daraja"}
                        options={degrees}
                        onChangeOption={setSelectedDegree}
                    />
                    <Select
                        defaultValue={activeModal?.education_language?.id}
                        register={register}
                        name={"education_language"}
                        extraClass={cls.announcements__input}
                        titleOption={"Talim tili"}
                        options={languages}
                        onChangeOption={setSelectedLanguage}
                    />
                    {!isChecked && <Input
                        register={register}
                        name={"price"}
                        extraClass={cls.announcements__input}
                        placeholder={"Price"}
                    />
                    }
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
                                <Select
                                    extraClass={cls.announcements__input}
                                    titleOption={"Shift"}
                                />
                                <Select
                                    extraClass={cls.announcements__input}
                                    titleOption={"Fan"}
                                />
                                <Input
                                    register={register}
                                    name={"study_year"}
                                    extraClass={cls.announcements__input}
                                    placeholder={"Study year"}
                                />
                                <Input
                                    register={register}
                                    name={"score"}
                                    extraClass={cls.announcements__input}
                                    placeholder={"Ball"}
                                />
                            </>
                            : null
                    }
                </Form>
            </Modal>
            <ConfirmModal
                title={isDeleteTrue ? "Grantni o'chirmoqchimisiz" : "o'chirmoqchimisiz"}
                type={"danger"}
                onClick={isDeleteTrue ? onDeleteTrue : onDeleteFalse}
                active={isDeleteTrue ? isDeleteTrue : isDeleteFalse}
                setActive={isDeleteTrue ? setIsDeleteTrue : setIsDeleteFalse}
            />
        </>
    );
})
