import {memo, useCallback, useState} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {OrganizationProfileInfo} from "entities/organizationProfile";
import {getOrganizationProfileData} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Textarea} from "shared/ui/textArea";

import cls from "./organizationProfileInfoModal.module.sass";
import {useForm} from "react-hook-form";
import {API_URL, useHttp} from "shared/api/base";

export const OrganizationProfileInfoModal = memo(() => {

    const {
        register,
        handleSubmit
    } = useForm()
    const {request} = useHttp()
    const data = useSelector(getOrganizationProfileData)
    const [activeModal, setActiveModal] = useState(false)

    const onActiveModal = useCallback(() => setActiveModal(true), [])

    const onSubmit = (data) => {
        console.log(data)
        request(`${API_URL}organizations/organization/crud/update/1/`, "PATCH", JSON.stringify(data))
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                <div className={cls.info__imageArea}>
                    <i className={classNames("fas fa-image", cls.info__imageIcon)}/>
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
                    <Select extraClass={cls.info__input} titleOption={"Organazation type"}/>
                    <Select extraClass={cls.info__input} titleOption={"Region"}/>
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
