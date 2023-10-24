"use client";

// React
import { useState } from "react";

// Next assets
import Image from "next/image";

type Props = {
    initial?: string;
    options: string[];
    icon: any;
    emit: (value: string) => void;
};

export default function Dropdown({ initial, options, icon, emit }: Props) {
    const [selected, setSelected] = useState(initial || options[0]);
    const [show, setShow] = useState(false);

    function handleKeyDown(e: any) {
        if (e.key === "Enter" || e.key === " ") {
            setShow(!show);
        }
        if(e.key === "Escape"){
            setShow(false)
        }
    }

    function handleSelect(value: string) {
        setSelected(value);
        emit(value);
        setShow(false);
    }

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={() => setShow(!show)}
            className={`outline-none cursor-pointer flex border border-border rounded-xl p-3 min-w-[200px] max-w-xs items-center gap-3 relative transition focus:border-text ${
                show ? "border-text" : ""
            }`}
        >
            <Image src={icon} width={20} height={20} alt="dropdown icon" />
            <span>{selected}</span>
            <div
                className={`overflow-auto max-h-sm absolute bottom-[-4px] left-0 translate-y-full w-full min-w-fit bg-bg border border-border rounded-xl transition ${
                    !show ? "scale-90 translate-y-[95%] opacity-0 pointer-events-none" : ""
                }`}
            >
                {options.map((option, index) => (
                    <button
                        key={index}
                        tabIndex={show ? 0 : -1}
                        className="w-full text-sm p-3 outline-none hover:bg-bg2 focus:bg-bg2 text-left"
                        onClick={() => {
                            handleSelect(option);
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
