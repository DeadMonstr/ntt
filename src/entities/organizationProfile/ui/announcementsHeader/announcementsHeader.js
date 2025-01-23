import React, {memo, useState} from 'react';
import classNames from "classnames";

import cls from "./announcementsHeader.module.sass";
import {useNavigate} from "react-router";



const typesData = [
    "Bakalavr","Jeki",
]



export const AnnouncementsHeader = memo(({userRole,setIsChange}) => {

    const [activeType,setActiveType] = useState(typesData[0])
    const [types,setTypes] = useState(typesData)









    
    
    
    const onChangeType = (item) => {
        setActiveType(item)
    }



    const onNavigate = () => {
        setIsChange(true)
    }



    return (
        <div className={cls.announcementsHeader}>
            <h1 className={cls.announcementsHeader__title}>E’lonlar</h1>
            <div className={cls.announcementsHeader__icon}>
                {userRole&&<i
                    onClick={onNavigate}
                    className={classNames(
                        "fas fa-plus",
                        cls.announcementsHeader__inner
                    )}
                />}
            </div>
            <div className={cls.announcementsHeader__menu}>
                {
                    types.map(item => {
                        return (
                            <h2
                                onClick={() => onChangeType(item)}
                                className={classNames({[cls.active]: activeType === item})}
                            >
                                {item}
                            </h2>
                        )
                    })
                }

            </div>
        </div>
    );
})
