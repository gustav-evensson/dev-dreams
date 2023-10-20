"use client";

// Components
import SideBarBtn from "./SideBarBtn";
import Dropdown from "./DropDown";
import LocationSearch from "./LocationSearch";

// Assets
import searchIcon from "@/public/icons/TopBar/search_24x24_clr.svg";
import filterIcon from "@/public/icons/TopBar/filter_24x24_clr.svg";
import globeIcon from "@/public/icons/TopBar/globe_20x20.svg";
import clockIcon from "@/public/icons/TopBar/clock_20x20.svg";
import locationIcon from "@/public/icons/TopBar/location_20x20.svg";

// Redux imports
import { useDispatch } from "react-redux";
import { setAll } from "../app/GlobalRedux/Features/filter/filterSlice";

// Next assets
import Image from "next/image";

// React
import { useEffect, useState } from "react";

export default function TopBar() {
    const dispatch = useDispatch();

    // Controls the visibility of the search bar and filter bar
    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    // Filter states
    const [site, setSite] = useState<string>("Show all");
    const [type, setType] = useState<string>("Show all");
    const [location, setLocation] = useState<string>("");
    const [job, setJob] = useState<string>("");

    // Update the filter state in the redux store
    useEffect(() => {
        dispatch(setAll({ site, type, location, job }));
    }, [site, type, location, job]);

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
                    <LocationSearch icon={locationIcon} onChange={(emit) => setLocation(emit)} placeholder="Search location..." />
                    <Dropdown options={["Show all", "Remote", "Hybrid", "On site"]} emit={(emit) => setSite(emit)} icon={globeIcon} />
                    <Dropdown options={["Show all", "Full-time", "Part-time", "Internship"]} emit={(emit) => setType(emit)} icon={clockIcon} />
                </div>
            </div>
        </div>
    );
}
