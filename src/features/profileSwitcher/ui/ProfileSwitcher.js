import React, {useCallback, useState} from 'react';
import classNames from "classnames";

import {Popup} from "shared/ui/popup";

import cls from "./ProfileSwitcher.module.sass";
import logoImage from "shared/assets/logo/logo.png";


const optionsSeason = [
    {
        icon: "far fa-user-circle",
        title: "Profil"
    },
    {
        icon: ["fas fa-sign-out-alt", cls.exit],
        title: "Chiqish"
    },
]

export const ProfileSwitcher = ({active, setActive}) => {

    // const [active, setActive] = useState(false)

    const renderList = useCallback(() => {
        return optionsSeason.map(item => {
            return (
                <div key={item.title} className={cls.item}>
                    <i className={classNames(item.icon)}/>
                    <h2>{item.title}</h2>
                </div>
            )
        })
    }, [])

    return (
        <div className={cls.switcher}>
            <img
                onClick={() => setActive(active === "profile" ? "" : "profile")}
                className={cls.switcher__title}
                src={logoImage}
                alt=""
            />
            <Popup type="handmade">
                <div
                    className={classNames(cls.popup, {
                        [cls.active]: active === "profile"
                    })}
                >
                    {renderList()}
                </div>
            </Popup>
        </div>
    );
};

