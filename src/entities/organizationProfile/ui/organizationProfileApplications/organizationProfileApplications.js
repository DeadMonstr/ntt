import React, {memo} from 'react';
import classNames from "classnames";

import cls from "./organizationProfileApplications.module.sass";
import image from "shared/assets/images/Group 26085539.png";

export const OrganizationProfileApplications = memo(() => {
    return (
        <div className={cls.applications}>
            <div

                className={cls.applications__edit}
            >
                <i className={classNames("fas fa-pen", cls.applications__icon)}/>
            </div>
            <h1 className={cls.applications__title}>Afzalliklar</h1>
            <div className={cls.applications__container}>
                <div className={cls.images}>
                    <img className={cls.images__main} src={image} alt=""/>
                    <img className={cls.images__sub} src={image} alt=""/>
                </div>
                <div className={cls.text}>
                    <h2 className={cls.text__title}>
                        Strategic, Operationl, Programme  &
                        Financial Planning
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    );
})
