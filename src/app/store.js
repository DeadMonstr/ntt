import {configureStore} from "@reduxjs/toolkit";

import {languageSwitcherSlice} from "features/languageSwitcher";
import {seasonSwitcherSlice} from "features/seasonSwitcher";
import {applicationProfileSlice} from "entities/applicationProfile";
import {applicationSlice} from "pages/applicationPage";


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


export const store = configureStore({
    reducer: {
        languageSwitcherSlice,
        seasonSwitcherSlice,
        applicationProfileSlice,
        applicationSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})
