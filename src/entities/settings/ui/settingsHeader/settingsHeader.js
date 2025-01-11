import cls from "./settingsHeader.module.sass"
import {useState} from "react";

export const SettingsHeader = ({settingsHeader , setActive , active}) => {



    const renderTable = () => {
        return settingsHeader.map(item => (
            <li
                onClick={() => setActive(item.id)}

                className={active === item.id ? cls.active_list : ""}
            >
                {item.name}
            </li>
        ))
    }

    const render = renderTable()

    return (
        <div>
            <ul className={cls.settings__header}>
                {render}
            </ul>


        </div>
    );
};

