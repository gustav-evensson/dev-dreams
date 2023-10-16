"use client";

import { createSlice } from "@reduxjs/toolkit";

export type sideBarState = {
    isClosed: boolean
}

const initialState: sideBarState = {
    isClosed: true
}

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        toggle: (state) => {state.isClosed = !state.isClosed},
        close: (state) => {state.isClosed = true},
        open: (state) => {state.isClosed = false}
    }
})

export const { toggle, close, open } = sideBarSlice.actions

export default sideBarSlice.reducer;