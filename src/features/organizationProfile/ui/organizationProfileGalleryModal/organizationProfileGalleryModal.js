import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import {
    OrganizationProfileGallery,
    fetchOrganizationProfileGallery, addGallery,
} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";

import cls from "./organizationProfileGalleryModal.module.sass";
import {useDropzone} from "react-dropzone";
import {API_URL, useHttp} from "../../../../shared/api/base";

export const OrganizationProfileGalleryModal = memo(() => {

    useEffect(() => {
        dispatch(fetchOrganizationProfileGallery())
    }, [])

    const {request} = useHttp()
    const formData = new FormData()
    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)
    const [addActiveModal, setAddActiveModal] = useState(false)
    const [newImageFile, setNewImageFile] = useState(null)
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setNewImageFile(acceptedFiles[0])
        }
    })

    useEffect(() => {
        if (!addActiveModal) setNewImageFile(null)
    }, [addActiveModal])

    const onActiveModal = useCallback((data) => setActiveModal(data), [])

    const onSubmit = (e) => {
        e.preventDefault()
        formData.append("url", newImageFile)
        formData.append("type", activeModal?.file?.type)
        formData.append("organization", activeModal?.organization?.id)
        request(
            `${API_URL}organizations/organization_gallery/crud/update/${activeModal?.file?.id}/`,
            "PATCH",
            formData,
            {}
        )
            .then(res => console.log(res))
            .catch(err => console.log(err))
        formData.delete("url")
        formData.delete("type")
        formData.delete("organization")
    }

    const onCreate = (e) => {
        e.preventDefault()
        console.log(true)
        formData.append("url", newImageFile)
        formData.append("type", "img")
        request(`${API_URL}organizations/organization_gallery/crud/create-file/`, "POST", formData,{})
            .then(res => {
                request(
                    `${API_URL}organizations/organization_gallery/crud/create/`,
                    "POST",
                    JSON.stringify({file: res?.id, organization: 1})
                )
                    .then(res => {
                        console.log(res, "res")
                        dispatch(addGallery(res))
                    })
                    .catch(err => console.log(err))
            })
        formData.delete("url")
        formData.delete("type")
    }

    return (
        <>
            <OrganizationProfileGallery setActive={setActiveModal} isAdd={setAddActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form
                    disabled={!newImageFile}
                    extraClassname={cls.gallery}
                    onSubmit={onSubmit}
                >
                    <h1 className={cls.gallery__title}>Rasmni o’zgartirish</h1>
                    <div
                        {...getRootProps()}
                        className={cls.gallery__image}
                    >
                        <input {...getInputProps()}/>
                        {
                            newImageFile
                                ? <img className={cls.gallery__inner} src={URL.createObjectURL(newImageFile)} alt=""/>
                                : <img className={cls.gallery__inner} src={activeModal?.file?.url} alt=""/>
                        }
                    </div>
                </Form>
            </Modal>
            <Modal
                active={addActiveModal}
                setActive={setAddActiveModal}
            >
                <Form
                    disabled={!newImageFile}
                    extraClassname={cls.gallery}
                    onSubmit={onCreate}
                >
                    <h1 className={cls.gallery__title}>Rasm qo'shish</h1>
                    <div
                        {...getRootProps()}
                        className={cls.gallery__image}
                    >
                        <input {...getInputProps()}/>
                        {
                            newImageFile
                                ? <img className={cls.gallery__inner} src={URL.createObjectURL(newImageFile)} alt=""/>
                                : <i className={classNames("fas fa-image", cls.gallery__icon)}/>
                        }
                    </div>
                </Form>
            </Modal>
        </>
    );
})
