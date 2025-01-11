import {memo, useCallback, useState} from 'react';
import classNames from "classnames";

import {OrganizationProfileApplications} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";

import cls from "./organizationApplicationModal.module.sass";

export const OrganizationApplicationModal = memo(() => {

    const [activeModal, setActiveModal] = useState(false)

    const onToggle = useCallback(() => setActiveModal(!activeModal), [])

    return (
        <>
            <OrganizationProfileApplications setActive={onToggle}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.editModal}
            >
                <h1 className={cls.editModal__title}>Ma’lumotni o’zgartirish</h1>
                <div className={cls.editModal__container}>
                    <div className={cls.imageEdit}>
                        <i className={classNames("far fa-image", cls.imageEdit__icon)}/>
                    </div>
                    <Form extraClassname={cls.editModal__form}>
                        <Input/>
                    </Form>
                </div>
            </Modal>
        </>
    );
})
