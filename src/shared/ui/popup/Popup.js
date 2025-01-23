import classNames from "classnames";
import React, {useCallback, useEffect, useState} from 'react';


import cls from "./Popup.module.sass"


const Popup = ({type = "auto", options, children, extraClass, defaultActive, onChange}) => {

    const [activeItem, setActiveItem] = useState(defaultActive || "")

    useEffect(() => {
        setActiveItem(defaultActive)
    }, [defaultActive])


    const renderOptions = useCallback(() => {
        return options.map(item => {
            return <div
                key={item.title}
                className={classNames(cls.item, {
                    [cls.active]: +activeItem?.id === item.id
                })}
                onClick={() => {
                    setActiveItem(item)
                    onChange && onChange(item)
                }}
            >
                {!!item.img && <img src={item.img} alt={item.title}/>}

                <h2>{item.title}</h2>
            </div>
        })
    }, [options, activeItem])


    if (type === "handmade") {
        return children
    }

    return (
        <div className={classNames(cls.popup, extraClass)}>
            {renderOptions()}
        </div>
    );
};

export default Popup;