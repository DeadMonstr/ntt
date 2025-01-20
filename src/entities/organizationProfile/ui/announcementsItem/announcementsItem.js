import {memo} from 'react';
import {motion} from "framer-motion";

import cls from "./announcementsItem.module.sass";
import classNames from "classnames";

export const AnnouncementsItem = memo(({onDelete, setActive, item}) => {
    return (
        <motion.div
            transition={{duration: 1}}
            className={cls.wrapper}
        >
            <div
                className={cls.item}
            >
                <div className={cls.item__header}>
                    <h3 className={cls.item__headerItem}>
                        1-Kurs
                        <span>(Kunduzgi)</span>
                    </h3>
                    <h3 className={cls.item__headerItem}>Matematika</h3>
                </div>
                <div className={cls.item__text}>
                    <div className={cls.item__wrapper}>
                        <h2 className={cls.item__user}>{item?.name_optional}</h2>
                        <p className={cls.item__info}>{item?.desc}</p>
                    </div>
                    <div className={cls.item__footer}>
                        <h3>Year: <span>2023-2024</span></h3>
                        <h3>Day: <span>2023-08-09</span></h3>
                    </div>
                    <div className={cls.item__footer}>
                        <h3>Price: <span>2 000 000</span></h3>
                        <h3>Study year: <span>2023</span></h3>
                    </div>
                </div>
            </div>
            <div className={cls.wrapper__container}>
                <div className={cls.wrapper__edit}>
                    <div className={cls.wrapper__inner}>
                        <i
                            className={classNames(
                                "fas fa-pen",
                                cls.wrapper__icon
                            )}
                            onClick={setActive}
                        />
                    </div>
                </div>
                <div className={cls.wrapper__edit}>
                    <div className={cls.wrapper__inner}>
                        <i
                            className={classNames(
                                "fas fa-trash",
                                cls.wrapper__icon
                            )}
                            onClick={onDelete}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
})
