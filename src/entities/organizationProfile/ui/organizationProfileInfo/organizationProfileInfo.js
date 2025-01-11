import React, {memo} from 'react';

import {Input} from "shared/ui/input";

import cls from "./organizationProfileInfo.module.sass";
import image from "shared/assets/images/photo_2024-02-08_12-55-08_hATlV6P_pdyLCyK 1.png";

export const OrganizationProfileInfo = memo(() => {
    return (
        <div className={cls.info}>
            <div className={cls.info__header}>
                <img className={cls.info__ava} src={image} alt=""/>
                <div className={cls.info__user}>
                    <h2>Sevinch Kasimxodjayeva</h2>
                    <p>+998901110022</p>
                </div>
            </div>
            <div className={cls.info__container}>
                <img className={cls.info__image} src={image} alt=""/>
                <div className={cls.info__form}>
                    <Input
                        extraClass={cls.info__input}
                        placeholder={"Name"} disabled
                    />
                    <Input
                        extraClass={cls.info__input}
                        placeholder={"Organazition type"} disabled
                    />
                    <Input
                        extraClass={cls.info__input}
                        placeholder={"Region"} disabled
                    />
                    <Input
                        extraClass={cls.info__input}
                        placeholder={"Location"} disabled
                    />
                    <Input
                        extraClass={cls.info__input}
                        placeholder={"Describe"} disabled
                    />
                </div>
            </div>
        </div>
    );
})
