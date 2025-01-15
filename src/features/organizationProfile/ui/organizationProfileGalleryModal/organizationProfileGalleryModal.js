import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import {
    OrganizationProfileGallery,
    fetchOrganizationProfileGallery,
} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";

import cls from "./organizationProfileGalleryModal.module.sass";
import {useDropzone} from "react-dropzone";
import {API_URL, useHttp} from "../../../../shared/api/base";
import {Logger} from "sass";

export const OrganizationProfileGalleryModal = memo(() => {

    useEffect(() => {
        dispatch(fetchOrganizationProfileGallery())
    }, [])

    const {request} = useHttp()
    const formData = new FormData()
    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)
    const [newImageFile, setNewImageFile] = useState(null)
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setNewImageFile(acceptedFiles[0])
        }
    })

    const onActiveModal = useCallback((data) => setActiveModal(data), [])

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(activeModal?.organization?.id)
        formData.append("url", newImageFile)
        formData.append("type", activeModal?.file?.type)
        formData.append("organization", activeModal?.organization?.id)
        request(
            `${API_URL}organizations/organization_gallery/crud/update/${activeModal?.file?.id}/`,
            "PATCH",
            formData,
            {}
        )
    }

    return (
        <>
            <OrganizationProfileGallery setActive={onActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form
                    extraClassname={cls.gallery}
                    onSubmit={onSubmit}
                >
                    <h1 className={cls.gallery__title}>Ma’lumotni o’zgartirish</h1>
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
