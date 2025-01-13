import {memo, useCallback, useState} from 'react';

import {OrganizationProfileInfo} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Textarea} from "shared/ui/textArea";

import cls from "./organizationProfileInfoModal.module.sass";
import classNames from "classnames";

export const OrganizationProfileInfoModal = memo(() => {

    const [activeModal, setActiveModal] = useState(false)

    const onActiveModal = useCallback(()=>setActiveModal(true), [])

    return (
        <>
            <OrganizationProfileInfo setActive={onActiveModal}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.info}
            >
                <h1 className={cls.info__title}>Ma’lumotni o’zgartirish</h1>
                <div className={cls.info__imageArea}>
                    <i className={classNames("fas fa-image", cls.info__imageIcon)}/>
                </div>
                <Form extraClassname={cls.info__form}>
                    <Input extraClass={cls.info__input} placeholder={"Name"}/>
                    <Select extraClass={cls.info__input} titleOption={"Organazation type"}/>
                    <Select extraClass={cls.info__input} titleOption={"Region"}/>
                    <Select extraClass={cls.info__input} titleOption={"Location"}/>
                    <Textarea extraClass={cls.info__input} placeholder={"Desc"}/>
                </Form>
            </Modal>
        </>
    );
})
