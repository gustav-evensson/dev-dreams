"use client";

// Components
import SideBarBtn from "./SideBarBtn";
import Dropdown from "./DropDown";
import LocationSearch from "./LocationSearch";
import SearchBar from "./SearchBar";

// TODO: Fix import to be inline on the elements
// Assets
import searchIcon from "@/public/icons/TopBar/search_24x24_clr.svg";
import filterIcon from "@/public/icons/TopBar/filter_24x24_clr.svg";
import globeIcon from "@/public/icons/TopBar/globe_20x20.svg";
import clockIcon from "@/public/icons/TopBar/clock_20x20.svg";

// Next assets
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// React
import { useEffect, useState } from "react";

export default function TopBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Controls the visibility of the search bar and filter bar
    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    // TODO: Error if someone edits the urls query params in the browser
    // Filter states
    const [site, setSite] = useState<string>(searchParams.get('site') || "Show all");
    const [type, setType] = useState<string>(searchParams.get('type') || "Show all");
    const [location, setLocation] = useState<string>(searchParams.get('location') || "");
    const [job, setJob] = useState<string>(searchParams.get('job') || "");

    // Update the filter state in the redux store
    useEffect(() => {
        router.push(`?${new URLSearchParams({ site, type, location, job }).toString()}`);
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
                    <SearchBar initial={job} placeholder="Search job title..." emit={(emit) => setJob(emit)} />
                    <LocationSearch initial={location} onChange={(emit) => setLocation(emit)} placeholder="Search location..." />
                    <Dropdown initial={site} options={["Show all", "Remote", "Hybrid", "On site"]} emit={(emit) => setSite(emit)} icon={globeIcon} />
                    <Dropdown initial={type} options={["Show all", "Full-time", "Part-time", "Internship"]} emit={(emit) => setType(emit)} icon={clockIcon} />
                </div>
            </div>
        </div>
    );
}
