"use client";

import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./Features/sideBar/sideBarSlice";
import { config } from "process";

export const store = configureStore({
    reducer: {
        sideBar: sideBarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
