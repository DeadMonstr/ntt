import React, {useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import {Popup} from "shared/ui/popup";
import {getLanguageSwitcherData} from "../model/languageSwitcherSelector";
import {fetchCurrentLanguage} from "../model/languageSwitcherSlice";

import cls from "./LanguageSwitcher.module.sass";
import languageImage from "shared/assets/icons/language.png";


const optionsLanguage = [
    {
        title: "RU"
    },
    {
        title: "EN"
    },
    {
        title: "UZ"
    }
]


export const LanguageSwitcher = ({active, setActive}) => {

    const dispatch = useDispatch()

    const defaultLanguage = useSelector(getLanguageSwitcherData)
    // const [active, setActive] = useState(false)

    const onChange = (data) => {
        dispatch(fetchCurrentLanguage(data))
    }

    return (
        <div className={cls.switcher}>
            <img
                onClick={() => setActive(active === "language" ? "" : "language")}
                className={cls.switcher__title}
                src={languageImage}
                alt="languageImage"
            />
            <Popup
                onChange={onChange}
                defaultActive={defaultLanguage}
                extraClass={classNames(cls.switcher__popup, {
                    [cls.active]: active === "language"
                })}
                options={optionsLanguage}
            />
        </div>
    );
};
