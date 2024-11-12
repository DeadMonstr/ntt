import React from 'react';


import cls from "./SeasonSwitcher.module.sass"

import Popup from "shared/ui/popup/Popup";

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
export const SeasonSwitcher = () => {





    return (
        <div className={cls.switcher}>
            <h1>Mavsumni uzgartirish</h1>

            <Popup options={optionsSeason}/>
        </div>
    );
};

