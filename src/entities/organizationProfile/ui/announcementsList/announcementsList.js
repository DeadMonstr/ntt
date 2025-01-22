import {memo} from 'react';

import {AnnouncementsItem} from "../announcementsItem/announcementsItem";

import cls from "./announcementsList.module.sass";

export const AnnouncementsList = memo(({setIsChange}) => {

    return (
        <div className={cls.announcements}>
            <AnnouncementsItem onChange={() => setIsChange(true)}/>
            <AnnouncementsItem/>
        </div>
    );
})
