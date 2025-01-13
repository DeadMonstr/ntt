import {memo, useCallback} from 'react';
import classNames from "classnames";

import cls from "./organizationProfileGallery.module.sass";
import image from "shared/assets/images/Rectangle 640.png";

export const OrganizationProfileGallery = memo(({setActive}) => {

    const renderImages = useCallback(() => {
        return [1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
                <div
                    key={index}
                    className={cls.images__item}
                >
                    <div
                        className={cls.images__edit}
                        onClick={setActive}
                    >
                        <i className={classNames("fas fa-pen", cls.images__editIcon)}/>
                    </div>
                    <img src={image} alt=""/>
                </div>
            )
        })
    }, [setActive])

    return (
        <div className={cls.images}>
            {renderImages()}
        </div>
    );
})
