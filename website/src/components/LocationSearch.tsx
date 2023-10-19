import Image from "next/image";
import { useState } from "react";

type Props = {
    icon: any;
    placeholder?: string;
    onChange?: (value: string) => void;
};

export default function LocationSearch({ icon, onChange, placeholder }: Props) {
    const [options, setOptions] = useState<string[]>([]);
    const [search, setSearch] = useState<string>("");

    async function getResults(value: string) {
        const res = await fetch(`http://localhost:3000/api/geoLocation?query=${value}`);
        const data = await res.json();
        return data;
    }

    async function handleInput(value: string) {
        // fetch options from server
        console.log("fetching options from server...", value);
        const results = await getResults(value);
        console.log("results", results.value);
        setOptions(results.value);
        console.log("options", options);
    }

    function handleSelect(value: string) {
        setSearch(value);
        setOptions([]);
        onChange && onChange(value);
    }

    return (
        <label
            htmlFor="searchBar"
            className="cursor-text flex border border-border transition rounded-xl p-3 min-w-[200px] w-80 items-center gap-3 relative focus-within:border-text"
        >
            <Image src={icon} width={20} height={20} alt="dropdown icon" className="grayscale" />
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
                        className="w-full text-sm p-3 hover:bg-bg2 text-left"
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </label>
    );
}