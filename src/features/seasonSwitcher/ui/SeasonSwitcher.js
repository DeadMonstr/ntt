import classNames from "classnames";
import {getSeasonSwitcherData} from "features/seasonSwitcher/model/seasonSwitcherSelector";
import {fetchCurrentSeason} from "features/seasonSwitcher/model/seasonSwitcherSlice";
import React, {useEffect, useState} from 'react';
import {isMobile} from "react-device-detect";
import {useDispatch, useSelector} from "react-redux";

import {Popup} from "shared/ui/popup";

import cls from "./SeasonSwitcher.module.sass"
import {useHttp} from "shared/api/base";
import {fetchAcademicYear} from "entities/oftenUsed/model/thunk/oftenUsedThunk";
import {getAcademicYears} from "entities/oftenUsed/model/selector/oftenUsedSelector";

const optionsSeason = [
    {
        title: "Qabul 2022-2023"
    },
    {
        title: "Qabul 2023-2024"
    },
    {
        title: "Qabul 2024-2025"
    }
]
const telOptionsSeason = [
    {
        title: "21-22"
    },
    {
        title: "22-23"
    },
    {
        title: "24-25"
    }
]

export const SeasonSwitcher = ({active, setActive}) => {

    const dispatch = useDispatch()
    const currentLanguage = useSelector(getSeasonSwitcherData)
    const years = useSelector(getAcademicYears)

    
    const {request} = useHttp()


    useEffect(() => {
        dispatch(fetchAcademicYear())
    },[])



    const onChange = (data) => {
        dispatch(fetchCurrentSeason(data))
    }

    const onToggle = () => setActive(active === "season" ? "" : "season")




    return (
        <div className={cls.switcher}>
            <h1
                className={cls.switcher__title}
                onClick={onToggle}
            >
                Mavsumni uzgartirish
            </h1>
            <i
                onClick={onToggle}
                className={classNames(
                    "fas " + (active === "season" ? "fa-chevron-up" : "fa-chevron-down"),
                    cls.switcher__icon
                )}
            />

            <Popup
                defaultActive={years.filter(item => item.current_year)[0]?.id}
                onChange={onChange}
                extraClass={classNames(cls.switcher__popup, {
                    [cls.active]: active === "season"
                })}
                options={isMobile ? telOptionsSeason : years.map(item => ({...item,title: item.date}))}
            />
        </div>
    );
};

