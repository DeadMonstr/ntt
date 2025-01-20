import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import classNames from "classnames";
import {useSelector} from "react-redux";

import {AnnouncementsItem} from "../announcementsItem/announcementsItem";
import {ScholarshipsItem} from "../scholarshipsItem/scholarshipsItem";
import {
    getOrganizationProfileAnnouncementsFalse,
    getOrganizationProfileAnnouncementsTrue
} from "../../model/selector/organizationProfileSelector";

import cls from "./organizationProfileAnnouncements.module.sass";

const list = [1, 2, 3]

export const OrganizationProfileAnnouncements = memo((props) => {

    const {
        isDeleteTrue,
        isDeleteFalse,
        setActive,
        isAdd
    } = props

    const trueData = useSelector(getOrganizationProfileAnnouncementsTrue)
    const falseData = useSelector(getOrganizationProfileAnnouncementsFalse)
    const announcementsRef = useRef()
    const scholarshipsRef = useRef()
    const [announcementsWidth, setAnnouncementsWidth] = useState(NaN)
    const [scholarshipsWidth, setScholarshipsWidth] = useState(NaN)

    useEffect(() => {
        setAnnouncementsWidth(announcementsRef.current?.scrollWidth - announcementsRef.current?.offsetWidth)
    }, [trueData?.length])

    useEffect(() => {
        setScholarshipsWidth(scholarshipsRef.current?.scrollWidth - scholarshipsRef.current?.offsetWidth)
    }, [falseData?.length])

    const renderAnnouncementsItem = useCallback(() => {
        return falseData?.map((item, index) => {
            return (
                <AnnouncementsItem
                    onDelete={() => isDeleteFalse(item?.id)}
                    setActive={() => setActive({change: item, type: false})}
                    item={item}
                    key={index}
                />
            )
        })
    }, [falseData, setActive])

    const renderScholarshipsItem = useCallback(() => {
        return trueData?.map((item, index) => {
            return (
                <ScholarshipsItem
                    onDelete={() => isDeleteTrue(item?.id)}
                    setActive={() => setActive({change: item, type: true})}
                    item={item}
                    key={index}
                />
            )
        })
    }, [trueData, setActive])

    return (
        <div className={cls.announcements}>
            <div className={cls.announcements__container}>
                <div className={cls.announcements__wrapper}>
                    <h2 className={cls.announcements__title}>E’lonlar</h2>
                    <i
                        onClick={() => isAdd(true)}
                        className={classNames(
                            "fas fa-plus",
                            cls.announcements__icon
                        )}
                    />
                </div>
                <motion.div
                    ref={announcementsRef}
                    className={cls.items}
                >
                    <motion.div
                        className={cls.items__wrapper}
                        drag={"x"}
                        dragConstraints={{left: -announcementsWidth, right: 0}}
                    >
                        {renderAnnouncementsItem()}
                    </motion.div>
                </motion.div>
            </div>
            <div className={cls.announcements__container}>
                <h2 className={cls.announcements__subTitle}>Grantlar</h2>
                <motion.div
                    ref={scholarshipsRef}
                    className={cls.items}
                >
                    <motion.div
                        className={cls.items__wrapper}
                        drag={"x"}
                        dragConstraints={{left: -scholarshipsWidth, right: 0}}
                    >
                        {renderScholarshipsItem()}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
})
