"use client"

import { useState } from "react"
import Image from "next/image"

type Props = {
    options: string[],
    icon: any,
}

export default function Dropdown({ options, icon }: Props){

    const [selected, setSelected] = useState(options[0])
    const [show, setShow] = useState(false)

    function handleKeyDown(e: any){
        if(e.key === 'Enter' || e.key === ' '){
            setShow(!show)
        }
    }

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} onClick={() => setShow(!show)} className="cursor-pointer flex border border-border rounded-xl p-3 min-w-[200px] max-w-xs items-center gap-3 relative">
            <Image src={icon} width={20} height={20} alt="dropdown icon"/>
            <span>{selected}</span>
            <div className={`overflow-auto max-h-sm absolute bottom-[-4px] left-0 translate-y-full w-full min-w-fit bg-bg border border-border rounded-xl transition ${!show ? 'scale-90 translate-y-[95%] opacity-0' : ''}`}>
                {options.map((option, index) => (
                    <button key={index} tabIndex={show ? 0 : -1} className="w-full text-sm p-3 hover:bg-bg2 text-left" onClick={() => {setSelected(option)}}>{option}</button>
                ))}
            </div>
        </div>
    )
}