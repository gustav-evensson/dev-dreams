"use client"

import { useDispatch, useSelector } from "react-redux"


export default function TestFilter() {

    const dispatch = useDispatch()
    const filter = useSelector((state: any) => state.filter)

    return (
        <ul>
            <li>{filter.site}</li>
            <li>{filter.type}</li>
            <li>{filter.location}</li>
            <li>{filter.job}</li>
        </ul>
    )
}