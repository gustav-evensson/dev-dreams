"use client"

import { useState } from "react"
import Image from "next/image"
import search_icon from '@/public/icons/search.svg'

export default function Dropdown(){

    const options = ['Option 1', 'Option 2', 'Option 3']
    const [selected, setSelected] = useState('')

    return (
        <div className="border border-border rounded-xl p-3 max-w-xs">
            <div className="flex items-center gap-3">
                <Image src={search_icon} width={24} height={24} alt="Search icon"/>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
    )
}