import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useDropzone} from "react-dropzone";

import {
    getOrganizationProfileError,
    getOrganizationProfileLoading,
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

export const OrganizationProfileInfoModal = memo(() => {

    useEffect(() => {
        dispatch(fetchRegionsData())
    }, [])

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const dispatch = useDispatch()
    const formData = new FormData()
    const data = useSelector(getOrganizationProfileData)
    const regionsData = useSelector(getRegions)
    const loading = useSelector(getOrganizationProfileLoading)
    const error = useSelector(getOrganizationProfileError)
    const [activeModal, setActiveModal] = useState(false)
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

    return (
        <>
            <OrganizationProfileInfo setActive={onActiveModal}/>
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
        </>
    );
})
