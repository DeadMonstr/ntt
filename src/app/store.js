import {configureStore} from "@reduxjs/toolkit";

import {languageSwitcherSlice} from "features/languageSwitcher";
import {seasonSwitcherSlice} from "features/seasonSwitcher";
import {applicationProfileSlice} from "entities/applicationProfile";
import {applicationSlice} from "pages/applicationPage";
import {organizationsSlice} from "features/organizations";
import {settingsSlice} from "entities/settings";
import {organizationProfileItemSlice, organizationSlice} from "../entities/organizationProfileItem";
import {OrganizationProfileSlice} from "entities/organizationProfile";
import {oftenUsedSlice} from "entities/oftenUsed";


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
        applicationSlice,
        organizationsSlice,
        settingsSlice,
        organizationProfileItemSlice,
        OrganizationProfileSlice,
        oftenUsedSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})
