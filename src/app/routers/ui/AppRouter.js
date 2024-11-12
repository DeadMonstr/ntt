import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import "app/styles/index.sass"
import {Layout} from "app/layout";


export const AppRouter = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"admin/"}
                    element={<Layout/>}
                >


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
