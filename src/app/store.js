import {configureStore} from "@reduxjs/toolkit";

import {languageSwitcherSlice} from "features/languageSwitcher";
import {seasonSwitcherSlice} from "features/seasonSwitcher";

export const store = configureStore({
    reducer: {
        languageSwitcherSlice,
        seasonSwitcherSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== "production",
})
