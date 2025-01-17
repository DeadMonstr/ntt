import React, {Suspense, useState} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {Layout} from "app/layout";
import {routersConfig} from "../config/routersConfig";

import "app/styles/index.sass"
import {Login} from "../../../pages/login";


export const AppRouter = () => {



    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/login"}
                    element={<Login/>}
                />

                <Route
                    path={"admin/*"}
                    element={<Layout/>}
                >
                    {
                        routersConfig.map(item => {

                                return (
                                    <>
                                        <Route
                                            key={item.path}
                                            path={item.path}
                                            element={item.element}

                                        />
                                        {/*{item.back ? setBackBtn(true) : setBackBtn(false)}*/}
                                    </>
                                )
                            }
                        )

                    }
                </Route>

                <Route
                    index
                    element={<Navigate to={"admin"}/>}
                />

            </>
        )
    );

    return (

        <Suspense>
            <RouterProvider router={router}/>
        </Suspense>

    );
};
