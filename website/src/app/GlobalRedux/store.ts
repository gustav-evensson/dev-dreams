"use client";

import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./Features/sideBar/sideBarSlice";
import filterReducer from "./Features/filter/filterSlice";

export const store = configureStore({
    reducer: {
        sideBar: sideBarReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
