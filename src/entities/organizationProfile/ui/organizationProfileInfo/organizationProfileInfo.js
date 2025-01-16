import React, {memo} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {Input} from "shared/ui/input";
import {getOrganizationProfileData} from "../../model/selector/organizationProfileSelector";

import cls from "./organizationProfileInfo.module.sass";
import image from "shared/assets/images/photo_2024-02-08_12-55-08_hATlV6P_pdyLCyK 1.png";

export const OrganizationProfileInfo = memo(({setActive}) => {

        const data = useSelector(getOrganizationProfileData)

        return (
            <div className={cls.info}>
                <i
                    className={classNames(
                        "fas fa-pen",
                        cls.info__icon
                    )}
                    onClick={setActive}
                />
                <div className={cls.info__header}>
                    <img className={cls.info__ava} src={image} alt=""/>
                    <div className={cls.info__user}>
                        <h2>Sevinch Kasimxodjayeva</h2>
                        <p>+998901110022</p>
                    </div>
                </div>
                <div className={cls.info__container}>
                    <img className={cls.info__image} src={data?.img} alt=""/>
                    <div className={cls.info__form}>
                        <Input
                            value={data?.name}
                            extraClass={cls.info__input}
                            placeholder={"Name"}
                            disabled
                        />
                        <Input
                            value={data?.organization_type?.name}
                            extraClass={cls.info__input}
                            placeholder={"Organazition type"}
                            disabled
                        />
                        <Input
                            value={data?.region?.name}
                            extraClass={cls.info__input}
                            placeholder={"Region"}
                            disabled
                        />
                        <Input
                            value={data?.locations}
                            extraClass={cls.info__input}
                            placeholder={"Location"}
                            disabled
                        />
                        <Input
                            value={data?.desc}
                            extraClass={cls.info__input}
                            placeholder={"Describe"}
                            disabled
                        />
                    </div>
                </div>
            </div>
        );
    }
)