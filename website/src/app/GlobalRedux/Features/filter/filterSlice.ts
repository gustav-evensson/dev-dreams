"use client";

import { createSlice } from "@reduxjs/toolkit";

export type filterState = {
    location: string,
    site: string,
    type: string,
    job: string
}

const initialState: filterState = {
    location: '',
    site: '',
    type: '',
    job: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setLocation: (state, value) => {state.location = value.payload},
        setSite: (state, value) => {state.site = value.payload},
        setType: (state, value) => {state.type = value.payload},
        setJob: (state, value) => {state.job = value.payload},
        setAll: (state, value) => {
            state.location = value.payload.location
            state.site = value.payload.site
            state.type = value.payload.type
            state.job = value.payload.job
        }
    }
})

export const { setLocation, setSite, setType, setJob, setAll } = filterSlice.actions

export default filterSlice.reducer;