import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {Layout} from "app/layout";
import {routersConfig} from "../config/routersConfig";

import "app/styles/index.sass"

export const AppRouter = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"admin/*"}
                    element={<Layout/>}
                >
                    {
                        routersConfig.map(item =>
                            <Route
                                key={item.path}
                                path={item.path}
                                element={item.element}
                            />
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
