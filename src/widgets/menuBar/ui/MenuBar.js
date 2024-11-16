import React, {useCallback} from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {menuConfig} from "../model/config/menuConfig";

import cls from "./MenuBar.module.sass"

export const MenuBar = () => {

    const renderMenuList = useCallback(() => {
        return menuConfig.map(item => {
            return (
                <NavLink
                    key={item.to}
                    className={
                        ({isActive}) =>
                            isActive ? classNames(cls.menubar__item, cls.active) : cls.menubar__item
                    }
                    to={item.to}
                >
                    <i className={classNames(item.icon)}/>
                    {item.label}
                </NavLink>
            )
        })
    }, [menuConfig])

    return (
        <div className={cls.menubar}>
            {renderMenuList()}
        </div>
    );
};

