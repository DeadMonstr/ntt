import {memo, useCallback} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {getOrganizationProfileGallery} from "../../model/selector/organizationProfileSelector";

import cls from "./organizationProfileGallery.module.sass";
import image from "shared/assets/images/Rectangle 640.png";

export const OrganizationProfileGallery = memo(({setActive, isAdd}) => {

    const data = useSelector(getOrganizationProfileGallery)

    const renderImages = useCallback(() => {
        return data?.map((item, index) => {
            return (
                <div
                    key={index}
                    className={cls.images__item}
                >
                    <div
                        className={cls.images__edit}
                        onClick={() => setActive(item)}
                    >
                        <i className={classNames("fas fa-pen", cls.images__editIcon)}/>
                    </div>
                    <img src={item?.file?.url ?? image} alt=""/>
                </div>
            )
        })
    }, [setActive, data])

    return (
        <div className={cls.images}>
            {renderImages()}
            <div
                onClick={() => isAdd(true)}
                className={cls.images__add}
            >
                <i className={classNames("fas fa-plus", cls.images__editIcon)}/>
            </div>
        </div>
    );
})
