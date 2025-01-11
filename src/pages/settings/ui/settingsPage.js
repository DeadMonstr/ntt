import cls from "./settings.module.sass"
import {useSelector} from "react-redux";
import {
    getSettingsData, getSettingsDegree,
    getSettingsDirection,
    getSettingsHeader
} from "../../../entities/settings/model/settingsSelector";

import {useState} from "react";
import {SettingsFilter, SettingsHeader, SettingsLists} from "../../../features/settings";

const filter = [
    {name: "Yo’nalishlar", id: 1},
    {name: "Darajalar", id: 2},
]

export const SettingsPage = () => {
    const settingsDirection = useSelector(getSettingsDirection)
    const settingsDegree = useSelector(getSettingsDegree)
    const settingsHeader = useSelector(getSettingsHeader)
    const [active, setActive] = useState(settingsHeader[0].id)


    const [activeFilter, setActiveFilter] = useState(filter[0].id)

    return (
        <div className={cls.settings}>


            <SettingsHeader active={active} setActive={setActive} settingsHeader={settingsHeader}/>

            <SettingsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} filterItem={filter}/>


            <SettingsLists activeFilter={activeFilter} data={activeFilter === 1 ? settingsDirection : settingsDegree}/>
        </div>
    );
};

