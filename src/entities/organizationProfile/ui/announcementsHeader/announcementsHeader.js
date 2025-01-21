import React, {memo} from 'react';
import classNames from "classnames";

import cls from "./announcementsHeader.module.sass";

export const AnnouncementsHeader = memo(() => {
    return (
        <div className={cls.announcementsHeader}>
            <h1 className={cls.announcementsHeader__title}>E’lonlar</h1>
            <div className={cls.announcementsHeader__icon}>
                <i
                    className={classNames(
                        "fas fa-plus",
                        cls.announcementsHeader__inner
                    )}
                />
            </div>
            <div className={cls.announcementsHeader__menu}>
                <h2 className={classNames({[cls.active]: true})}>Bakalavr</h2>
                <h2>Lorem</h2>
                <h2>Lorem</h2>
            </div>
        </div>
    );
})
