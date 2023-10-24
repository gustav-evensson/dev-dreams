// Next
import Image from "next/image";

// React
import { useState } from "react";

// Assets
import locationIcon from "@/public/icons/TopBar/location_20x20.svg";

type Props = {
    initial?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
};

export default function LocationSearch({initial, onChange, placeholder }: Props) {
    const [options, setOptions] = useState<string[]>([]);
    const [search, setSearch] = useState<string>(initial || "");

    async function getResults(value: string) {
        const res = await fetch(`http://localhost:3000/api/geoLocation?query=${value}`);
        const data = await res.json();
        return data;
    }

    async function handleInput(value: string) {
        // fetch options from server
        const results = await getResults(value);
        setOptions(results.value);
    }

    function handleSelect(value: string) {
        setSearch(value);
        setOptions([]);
        onChange && onChange(value);
    }

    return (
        <label
            htmlFor="searchBar"
            className="dd_action_object cursor-text flex min-w-[200px] max-w-sm items-center gap-3 relative"
        >
            <Image src={locationIcon} width={20} height={20} alt="dropdown icon" className="grayscale" />
            <input
                onChange={(e) => {
                    handleInput(e.target.value);
                    setSearch(e.target.value);
                }}
                value={search}
                className="outline-none font-light"
                type="text"
                placeholder={placeholder}
                name="searchBar"
                id="searchBar"
            />
            <div
                className={`overflow-auto max-h-sm absolute bottom-[-4px] left-0 translate-y-full w-full min-w-fit bg-bg border border-border rounded-xl transition ${
                    options.length == 0 ? "scale-90 translate-y-[95%] opacity-0 pointer-events-none" : ""
                }`}
            >
                {options.length > 0 && options.map((option, index) => (
                    <button
                        key={index}
                        tabIndex={options.length > 0 ? 0 : -1}
                        className="w-full text-sm p-3 outline-none hover:bg-bg2 focus:bg-bg2 text-left"
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </label>
    );
}
