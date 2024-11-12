import React, {useCallback} from 'react';


import cls from "./Popup.module.sass"


const Popup = ({type = "auto",options,children}) => {





    const renderOptions = useCallback(() => {
        return options.map(item => {
            return <div className={cls.item}>
                {!!item.img && <img src={item.img} alt={item.title}/>}

                <h2>{item.title}</h2>
            </div>
        })

    },[options])




    if (type === "handmade") {
        return children
    }

    return (
        <div className={cls.popup}>
            {renderOptions()}
        </div>
    );
};

export default Popup;