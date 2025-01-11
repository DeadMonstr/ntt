import React, {memo, useState} from 'react';

import {OrganizationProfileApplications} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";

import cls from "./organizationApplicationModal.module.sass";

export const OrganizationApplicationModal = memo(() => {

    const [activeModal, setActiveModal] = useState(false)

    return (
        <>
            <OrganizationProfileApplications/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.editModal}
            >
                <h1 className={cls.editModal__title}>Ma’lumotni o’zgartirish</h1>
                <div className={cls.editModal__container}>
                    <Form extraClassname={cls.editModal__form}>

                    </Form>
                </div>
            </Modal>
        </>
    );
})
