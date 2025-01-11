import React, {useEffect, useState} from 'react';
import {isMobile} from "react-device-detect";

import cls from "./Layout.module.sass"
import {Header} from "widgets/header";
import {MenuBar} from "widgets/menuBar/ui/MenuBar";
import {Outlet, useNavigate} from "react-router";
import {Button} from "../../../shared/ui/button/button";



export const Layout = ({back}) => {

    const navigate = useNavigate()

    return (
        <>
            <div className={cls.layout}>

                <Header/>

                <main>
                    {!isMobile && <MenuBar/>}




                    <div className={cls.page}>



                        <Button onClick={() => navigate(-1)}>
                            <i className={"fa fa-arrow-left"}/>
                            Back
                        </Button>


                        <Outlet/>
                    </div>

                </main>


            </div>
            {isMobile && <MenuBar/>}
        </>
    );
};



