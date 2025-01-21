import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useDropzone} from "react-dropzone";

import {
    createUserData,
    deleteUserData,
    fetchOrganizationProfileAdmin,
    getOrganizationProfileError,
    getOrganizationProfileLoading, getOrganizationProfileUserData,
    OrganizationProfileInfo,
    updateData
} from "entities/organizationProfile";
import {getOrganizationProfileData} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Textarea} from "shared/ui/textArea";
import {API_URL, headersImg, useHttp} from "shared/api/base";

import cls from "./organizationProfileInfoModal.module.sass";
import {fetchRegionsData, getRegions} from "entities/oftenUsed";
import {ConfirmModal} from "../../../../shared/ui/confirmModal";

export const OrganizationProfileInfoModal = memo(() => {

    useEffect(() => {
        dispatch(fetchRegionsData())
        dispatch(fetchOrganizationProfileAdmin())
    }, [])

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const formData = new FormData()
    const data = useSelector(getOrganizationProfileData)
    const userProfile = useSelector(getOrganizationProfileUserData)
    const regionsData = useSelector(getRegions)
    const loading = useSelector(getOrganizationProfileLoading)
    const error = useSelector(getOrganizationProfileError)
    const [activeModal, setActiveModal] = useState(false)
    const [activeAddModal, setActiveAddModal] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [newImageFile, setNewImageFile] = useState(null)
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles[0])
            setNewImageFile(acceptedFiles[0])
        }
    })

    const onActiveModal = useCallback(() => setActiveModal(true), [])

    const onSubmit = (data) => {
        formData.append("name", data?.name)
        formData.append("desc", data?.desc)
        // formData.append("phone", data?.phone)
        formData.append("locations", data?.locations)
        if (newImageFile) formData.append("img", newImageFile)
        request(`${API_URL}organizations/organization/crud/update/1/`, "PATCH", formData, {})
            .then(res => {
                dispatch(updateData(res))
                console.log(res, "update")
            })
            .catch(err => console.log(err))
        formData.delete("name")
        formData.delete("desc")
        formData.delete("locations")
        formData.delete("img")
    }

    const onCreate = (data) => {
        const res = {
            organization: 1,
            job: 1,
            user: {
                name: data?.name,
                username: data?.username,
                surname: data?.surname,
                phone: data?.phone
            }
        }
        console.log(data, "data")
        request(
            `${API_URL}organizations/organization_user/crud/create/`,
            "POST",
            JSON.stringify(res)
        )
            .then(res => {
                console.log(res)
                dispatch(createUserData(res))
            })
            .catch(err => console.log(err))
    }

    const onChange = (data) => {
        let obj;
        if (data?.username !== userProfile?.user?.username) obj = {username: data?.username}
        if (data?.phone !== userProfile?.user?.phone) obj = {...obj, phone: data?.phone}
        console.log(data?.password, "password")
        console.log(data?.confirm_password, "confirn_password")
        console.log(data?.password === data?.confirm_password, "tie")
        if (data?.password === data?.confirm_password && data?.password?.length <= 8) {
            const res = {
                user: {
                    name: data?.name,
                    surname: data?.surname,
                    password: data?.password,
                    ...obj
                },
                organization: 1,
                job: 1
            }
            request(
                `${API_URL}organizations/organization_user/crud/update/${userProfile?.id}/`,
                "PATCH",
                JSON.stringify(res)
            )
                .then(res => {
                    console.log(res)
                    dispatch(createUserData(res))
                })
                .catch(err => console.log(err))
        }
    }

    const onDelete = () => {
        request(
            `${API_URL}organizations/organization_user/crud/delete/${userProfile?.id}/`,
            "DELETE"
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        dispatch(deleteUserData())
        setIsDelete(false)
    }

    return (
        <>
            <OrganizationProfileInfo
                setActive={setActiveModal}
                isAdd={setActiveAddModal}
                isDel={setIsDelete}
            />
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.info}
            >
                <h1 className={cls.info__title}>Ma’lumotni o’zgartirish</h1>
                <div {...getRootProps()}
                     className={cls.info__imageArea}
                >
                    <input {...getInputProps()}/>
                    {
                        newImageFile
                            ? <img className={cls.info__image} src={URL.createObjectURL(newImageFile)} alt=""/>
                            : data?.img
                                ? <img className={cls.info__image} src={data?.img} alt=""/>
                                : <i className={classNames("fas fa-image", cls.info__imageIcon)}/>
                    }
                </div>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    extraClassname={cls.info__form}
                >
                    <Input
                        required
                        name={"name"}
                        value={data?.name}
                        register={register}
                        extraClass={cls.info__input}
                        placeholder={"Name"}
                    />
                    <Select

                        extraClass={cls.info__input}
                        titleOption={"Organazation type"}
                    />
                    <Select
                        defaultValue={data?.region?.name}
                        onChangeOption={setSelectedRegion}
                        keyValue={"name"}
                        options={regionsData}
                        extraClass={cls.info__input}
                        titleOption={"Region"}
                    />
                    <Input
                        required
                        name={"locations"}
                        value={data?.locations}
                        register={register}
                        extraClass={cls.info__input}
                        placeholder={"Location"}
                    />
                    <Textarea
                        required
                        name={"desc"}
                        value={data?.desc}
                        register={register}
                        extraClass={cls.info__input}
                        placeholder={"Desc"}
                    />
                </Form>
            </Modal>
            <Modal
                active={activeAddModal}
                setActive={setActiveAddModal}
                extraClass={cls.addModal}
            >
                <h1 className={cls.addModal__title}>Ma’lumotni o’zgartirish</h1>
                <div className={cls.addModal__container}>
                    <div
                        className={classNames(cls.imageEdit, {
                            [cls.active]: newImageFile || data?.file?.url
                        })}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}/>
                        {
                            newImageFile
                                ? <img
                                    className={cls.imageEdit__image}
                                    src={URL.createObjectURL(newImageFile)}
                                    alt=""
                                /> :
                                data?.file?.url
                                    ? <img
                                        className={cls.imageEdit__image}
                                        src={data?.file?.url}
                                        alt=""
                                    />
                                    : <i className={classNames("far fa-image", cls.imageEdit__icon)}/>
                        }
                    </div>
                    {
                        activeAddModal === "add" ?
                            <Form
                                extraClassname={cls.addModal__form}
                                onSubmit={handleSubmit(onCreate)}
                            >
                                <Input
                                    required
                                    register={register}
                                    name={"username"}
                                    placeholder={"Username"}
                                    extraClass={cls.addModal__input}
                                />
                                <Input
                                    required
                                    register={register}
                                    name={"name"}
                                    placeholder={"Name"}
                                    extraClass={cls.addModal__input}
                                />
                                <Input
                                    required
                                    register={register}
                                    name={"surname"}
                                    placeholder={"Surname"}
                                    extraClass={cls.addModal__input}
                                />
                                <Input
                                    required
                                    register={register}
                                    name={"phone"}
                                    placeholder={"Phone"}
                                    extraClass={cls.addModal__input}
                                />
                            </Form> :
                            activeAddModal === "change" ?
                                <Form
                                    extraClassname={cls.addModal__form}
                                    onSubmit={handleSubmit(onChange)}
                                >
                                    <Input
                                        required
                                        value={userProfile?.user?.username}
                                        register={register}
                                        name={"username"}
                                        placeholder={"Username"}
                                        extraClass={cls.addModal__input}
                                    />
                                    <Input
                                        required
                                        value={userProfile?.user?.name}
                                        register={register}
                                        name={"name"}
                                        placeholder={"Name"}
                                        extraClass={cls.addModal__input}
                                    />
                                    <Input
                                        required
                                        value={userProfile?.user?.surname}
                                        register={register}
                                        name={"surname"}
                                        placeholder={"Surname"}
                                        extraClass={cls.addModal__input}
                                    />
                                    <Input
                                        required
                                        value={userProfile?.user?.phone}
                                        register={register}
                                        name={"phone"}
                                        placeholder={"Phone"}
                                        extraClass={cls.addModal__input}
                                    />
                                    <Input
                                        type={"password"}
                                        value={"12345678"}
                                        required
                                        placeholder={"Password"}
                                        name={"password"}
                                        register={register}
                                    />
                                    <Input
                                        type={"password"}
                                        value={"12345678"}
                                        required
                                        placeholder={"Confirm password"}
                                        name={"confirm_password"}
                                        register={register}
                                    />
                                </Form> : null
                    }
                </div>
            </Modal>
            <ConfirmModal
                type={"danger"}
                setActive={setIsDelete}
                active={isDelete}
                onClick={onDelete}
            />
        </>
    );
})
