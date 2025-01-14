import React from 'react';
import {Box} from "shared/ui/box/box";
import cls from './organizationTypesPage.module.sass'
import {OrganizationTypesFilter} from "../../../features/organizationTypes";


export const OrganizationTypesPage = () => {


    return (
        <Box extraClass={cls.mainBox}>
            <div className={cls.mainBox__extraBox}>
                <div className={cls.mainBox__extraBox__typeBox}>
                    <OrganizationTypesFilter/>
                </div>
            </div>
        </Box>
    );
};

