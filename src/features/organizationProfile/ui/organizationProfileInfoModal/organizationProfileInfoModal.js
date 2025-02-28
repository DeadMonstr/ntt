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
import {useParams} from "react-router";
import {
    getOrganizationProfileUserImageData
} from "../../../../entities/organizationProfile/model/selector/organizationProfileSelector";
import {getOrganizationImage} from "../../../../entities/organizationProfile/model/slice/organizationProfileSlice";

export const OrganizationProfileInfoModal = memo(({userRole}) => {

    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchRegionsData())
        dispatch(fetchOrganizationProfileAdmin({id}))
    }, [id])

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const formData = new FormData()
    const data = useSelector(getOrganizationProfileData)
    const userProfile = useSelector(getOrganizationProfileUserData)
    const userProfileImage = useSelector(getOrganizationProfileUserImageData)
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

    useEffect(() => {
        if (activeAddModal || activeModal) {
            setNewImageFile(null)
        }
    }, [activeAddModal, activeModal])

    const onActiveModal = useCallback(() => setActiveModal(true), [])

    const onSubmit = (data) => {
        formData.append("name", data?.name)
        formData.append("desc", data?.desc)
        // formData.append("phone", data?.phone)
        formData.append("locations", data?.locations)
        if (newImageFile) formData.append("img", newImageFile)
        request(`${API_URL}organizations/organization/crud/update/${id}/`, "PATCH", formData, {})
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
        if (newImageFile) {
            formData.append("url", newImageFile)
            formData.append("type", "img")
            request(`${API_URL}organizations/organization_gallery/crud/create-file/`, "POST", formData, {})
                .then(res => {
                    dispatch(getOrganizationImage(res))
                    const createData = {
                        organization: +id,
                        user: {
                            file: res?.id,
                            name: data?.name,
                            username: data?.username,
                            surname: data?.surname,
                            phone: data?.phone
                        }
                    }
                    request(
                        `${API_URL}organizations/organization_user/crud/create/`,
                        "POST",
                        JSON.stringify(createData)
                        // formData,
                        // {}
                    )
                        .then(res => {
                            dispatch(createUserData(res))
                        })
                        .catch(err => console.log(err))
                })
            formData.delete("url")
            formData.delete("type")
        } else {
            const createData = {
                organization: +id,
                user: {
                    name: data?.name,
                    username: data?.username,
                    surname: data?.surname,
                    phone: data?.phone
                }
            }
            request(
                `${API_URL}organizations/organization_user/crud/create/`,
                "POST",
                JSON.stringify(createData)
                // formData,
                // {}
            )
                .then(res => {
                    dispatch(createUserData(res))
                })
                .catch(err => console.log(err))
        }
    }

    const onChange = (data) => {
        if (newImageFile) {
            formData.append("url", newImageFile)
            request(
                `${API_URL}organizations/organization_user/crud/update-file/${userProfileImage?.id}/`,
                "PATCH",
                formData,
                {}
            )
                .then(res => {
                    dispatch(getOrganizationImage(res))
                    let obj;
                    if (data?.username !== userProfile?.user?.username) obj = {username: data?.username}
                    if (data?.phone !== userProfile?.user?.phone) obj = {...obj, phone: data?.phone}
                    if (data?.password === data?.confirm_password && data?.password?.length <= 8) {
                        const createData = {
                            user: {
                                file: res?.id,
                                name: data?.name,
                                surname: data?.surname,
                                password: data?.password,
                                ...obj
                            },
                            organization: id,
                            job: 1
                        }
                        request(
                            `${API_URL}organizations/organization_user/crud/update/${userProfile?.id}/`,
                            "PATCH",
                            JSON.stringify(createData)
                        )
                            .then(res => {
                                console.log(res)
                                dispatch(createUserData(res))
                            })
                            .catch(err => console.log(err))
                    }
                })
            formData.delete("url")
        } else {
            let obj;
            if (data?.username !== userProfile?.user?.username) obj = {username: data?.username}
            if (data?.phone !== userProfile?.user?.phone) obj = {...obj, phone: data?.phone}
            if (data?.password === data?.confirm_password && data?.password?.length <= 8) {
                const res = {
                    user: {
                        name: data?.name,
                        surname: data?.surname,
                        password: data?.password,
                        ...obj
                    },
                    organization: id,
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
                userRole={userRole}
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
                                userProfileImage?.url
                                    ? <img
                                        className={cls.imageEdit__image}
                                        src={userProfileImage?.url}
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
