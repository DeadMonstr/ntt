import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import {useDispatch} from "react-redux";

import {OrganizationProfileGallery} from "entities/organizationProfile";
import {fetchOrganizationProfileGallery} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";

import cls from "./organizationProfileGalleryModal.module.sass";

export const OrganizationProfileGalleryModal = memo(() => {

    useEffect(() => {
        dispatch(fetchOrganizationProfileGallery())
    }, [])

    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)

    const onActiveModal = useCallback(() => setActiveModal(true), [])

    return (
        <>
            <OrganizationProfileGallery setActive={onActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <Form extraClassname={cls.gallery}>
                    <h1 className={cls.gallery__title}>Ma’lumotni o’zgartirish</h1>
                    <div className={cls.gallery__image}>
                        <i className={classNames("fas fa-image", cls.gallery__icon)}/>
                    </div>
                </Form>
            </Modal>
        </>
    );
})
