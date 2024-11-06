
import {ApplicationList} from "entities/application";
import {Filter} from "features/filter";

import cls from "./applicationPage.module.sass";

export const ApplicationPage = () => {
    return (
        <div className={cls.applicationPage}>
            <div className={cls.applicationPage__header}>
                <h1 className={cls.applicationPage__title}>Barcha arizalar</h1>
                <Filter/>
            </div>
            <ApplicationList/>
        </div>
    )
}
