

import cls from "./settings.module.sass"
import {useSelector} from "react-redux";
import {getSettingsData, getSettingsHeader} from "../../../entities/settings/model/settingsSelector";
import {SettingsHeader} from "../../../entities/settings";
import {useState} from "react";
import {SettingsFilter} from "../../../features/settings";

const filter = [
    {name: "Yo’nalishlar" , id: 1},
    {name: "Darajalar" , id: 2},
]

export const SettingsPage = () => {
    const settingsData = useSelector(getSettingsData)
    const settingsHeader = useSelector(getSettingsHeader)
    const [active, setActive] = useState(settingsHeader[0].id)

    const [activeFilter , setActiveFilter] = useState(filter[0].id)


    return (
        <div className={cls.settings}>
            <h2>Organizations</h2>

            <SettingsHeader active={active} setActive={setActive} settingsHeader={settingsHeader}/>

            <SettingsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} filterItem={filter}/>




        </div>
    );
};

