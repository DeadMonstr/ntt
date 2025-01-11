import React, {memo} from 'react';

import cls from "./organizationProfileAnnouncements.module.sass";

export const OrganizationProfileAnnouncements = memo(() => {
    return (
        <div className={cls.announcements}>
            <div className={cls.announcements__container}>
                <h2 className={cls.announcements__title}>E’lonlar</h2>
                <div className={cls.items}>
                    <div className={cls.items__box}>
                        <div className={cls.items__header}>
                            <h3 className={cls.items__headerItem}>
                                1-Kurs
                                <span>(Kunduzgi)</span>
                            </h3>
                            <h3 className={cls.items__headerItem}>Matematika</h3>
                        </div>
                        <div className={cls.items__text}>
                            <h2 className={cls.items__user}>Sevinch</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.announcements__container}>
                <h2>Grantlar</h2>
                <div>

                </div>
            </div>
        </div>
    );
})
