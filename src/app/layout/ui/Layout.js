import React, {useEffect, useState} from 'react';

import cls from "./Layout.module.sass"
import {Header} from "widgets/header";
import {MenuBar} from "widgets/menuBar/ui/MenuBar";
import {Outlet} from "react-router";


export const Layout = () => {




    return (
        <div className={cls.layout}>

            <Header/>

            <main>
                <MenuBar/>


                <div className={cls.page}>
                    <Outlet/>
                </div>

            </main>


        </div>
    );
};



