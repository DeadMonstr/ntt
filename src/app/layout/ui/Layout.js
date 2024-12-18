import React, {useEffect, useState} from 'react';
import {isMobile} from "react-device-detect";

import cls from "./Layout.module.sass"
import {Header} from "widgets/header";
import {MenuBar} from "widgets/menuBar/ui/MenuBar";
import {Outlet} from "react-router";


export const Layout = () => {




    return (
        <>
            <div className={cls.layout}>

                <Header/>

                <main>
                    {!isMobile && <MenuBar/>}


                    <div className={cls.page}>
                        <Outlet/>
                    </div>

                </main>


            </div>
            {isMobile && <MenuBar/>}
        </>
    );
};



