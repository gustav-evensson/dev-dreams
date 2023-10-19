"use client";

import SideBarBtn from "./SideBarBtn";
import Dropdown from "./DropDown";
import LocationSearch from "./LocationSearch";

import Image from "next/image";

import searchIcon from "@/public/icons/TopBar/search_24x24_clr.svg";
import filterIcon from "@/public/icons/TopBar/filter_24x24_clr.svg";
import globeIcon from "@/public/icons/TopBar/globe_20x20.svg";
import clockIcon from "@/public/icons/TopBar/clock_20x20.svg";
import locationIcon from "@/public/icons/TopBar/location_20x20.svg";

import { useState } from "react";

export default function TopBar() {

    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const onSearchChange = (value: string) => {
        console.log("Received: ", value);
        return value;
    }

    return (
        <div>
            <div className="border-b border-border w-full h-fit flex items-center justify-between p-4">
                {/* For small screens */}
                <SideBarBtn />
                <div className="h-6 flex gap-4 lg:hidden">
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <Image
                            draggable="false"
                            src={searchIcon}
                            width={24}
                            height={24}
                            alt="search icon"
                            className={`${showSearch ? "grayscale-0" : "grayscale"}`}
                        />
                    </button>
                    <button onClick={() => setShowFilter(!showFilter)}>
                        <Image
                            draggable="false"
                            src={filterIcon}
                            width={24}
                            height={24}
                            alt="filter icon"
                            className={`${showFilter ? "grayscale-0" : "grayscale"}`}
                        />
                    </button>
                </div>
                {/* Fore large screens */}
                <div className="gap-3 hidden lg:flex">
                    <LocationSearch icon={locationIcon} onChange={onSearchChange} placeholder="Search location..."/>
                    <Dropdown options={["Remote", "Hybrid", "On site"]} icon={globeIcon} />
                    <Dropdown options={["Full-time", "Part-time", "Internship"]} icon={clockIcon} />
                </div>
            </div>
        </div>
    );
}
