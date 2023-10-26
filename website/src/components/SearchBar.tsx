
// Next assets
import Image from "next/image";

// React
import { useState } from "react";

// Assets
import searchIcon from "@/public/icons/TopBar/search_20x20.svg";

type Props = {
    initial?: string;
    placeholder?: string;
    emit: (value: string) => void;
};

export default function LocationSearch({initial, emit, placeholder }: Props) {
    const [search, setSearch] = useState<string>(initial || "");

    return (
        <label
            htmlFor="searchBar"
            className="cursor-text flex border border-border transition rounded-xl p-3 min-w-[200px] max-w-sm items-center gap-3 relative focus-within:border-text"
        >
            <Image draggable="false" src={searchIcon} width={20} height={20} alt="dropdown icon" />
            <input
                onChange={(e) => {
                    emit(e.target.value);
                    setSearch(e.target.value);
                }}
                value={search}
                className="outline-none font-light"
                type="text"
                placeholder={placeholder}
                name="searchBar"
                id="searchBar"
            />
        </label>
    );
}
