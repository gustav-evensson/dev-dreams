"use client"

import { useSelector } from "react-redux"
import { RootState } from "../app/GlobalRedux/store"


export default function TestFilter() {

    const filter = useSelector((state: RootState) => state.filter)

    return (
        <ul>
            <li>{filter.site}</li>
            <li>{filter.type}</li>
            <li>{filter.location}</li>
            <li>{filter.job}</li>
        </ul>
    )
}