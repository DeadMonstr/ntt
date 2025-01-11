import {Settings} from "../../../entities/settings";

import cls from "./settings.module.sass"
import {useSelector} from "react-redux";
import {getSettingsData} from "../../../entities/settings/model/settingsSelector";

export const SettingsPage = () => {

    const settingsData = useSelector(getSettingsData)

    return (
        <div className={cls.settings}>
            <h2>Sozlamalar</h2>

            <Settings data={settingsData} />
        </div>
    );
};

