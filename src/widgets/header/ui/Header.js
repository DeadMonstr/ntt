import React, {useState} from 'react';

import cls from "./Header.module.sass"
import Logo from "shared/assets/logo/Layer_1.svg"


import {SeasonSwitcher} from "features/seasonSwitcher";
import {LanguageSwitcher} from "features/languageSwitcher";
import {ProfileSwitcher} from "features/profileSwitcher";

export const Header = () => {

    const [active, setActive] = useState("")

    return (
        <div className={cls.header}>

            <div className={cls.container}>

                <img className={cls.container__img} src={Logo} alt="Logo"/>
                <h1>Qabul 2024-2025</h1>

            </div>

            <div className={cls.container}>
                <SeasonSwitcher setActive={setActive} active={active}/>
                <LanguageSwitcher setActive={setActive} active={active}/>
                <ProfileSwitcher setActive={setActive} active={active}/>
            </div>

        </div>
    );
};

