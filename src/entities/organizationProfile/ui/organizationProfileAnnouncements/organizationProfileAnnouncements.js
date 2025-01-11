import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";

import {AnnouncementsItem} from "../announcementsItem/announcementsItem";
import {ScholarshipsItem} from "../scholarshipsItem/scholarshipsItem";

import cls from "./organizationProfileAnnouncements.module.sass";

const list = [1, 2, 3]

export const OrganizationProfileAnnouncements = memo(() => {

    const announcementsRef = useRef()
    const scholarshipsRef = useRef()
    const [announcementsWidth, setAnnouncementsWidth] = useState(NaN)
    const [scholarshipsWidth, setScholarshipsWidth] = useState(NaN)

    useEffect(() => {
        setAnnouncementsWidth(announcementsRef.current?.scrollWidth - announcementsRef.current?.offsetWidth)
    }, [list?.length])

    useEffect(() => {
        setScholarshipsWidth(scholarshipsRef.current?.scrollWidth - scholarshipsRef.current?.offsetWidth)
    }, [list?.length])

    const renderAnnouncementsItem = useCallback(() => {
        return list.map((item, index) => {
            return (
                <AnnouncementsItem key={index}/>
            )
        })
    }, [])

    const renderScholarshipsItem = useCallback(() => {
        return list.map((item, index) => {
            return (
                <ScholarshipsItem key={index}/>
            )
        })
    }, [])

    return (
        <div className={cls.announcements}>
            <div className={cls.announcements__container}>
                <h2 className={cls.announcements__title}>E’lonlar</h2>
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
