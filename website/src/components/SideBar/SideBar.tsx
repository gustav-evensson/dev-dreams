"use client";

// Scss
import './SideBar.scss'

// Next assets
import Image from "next/image";

// Redux imports
import type { RootState } from "../../app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../../app/GlobalRedux/Features/sideBar/sideBarSlice";

// Assets
import dd_logo from "@/public/images/dd_colorful_48x37.png";
import job_feed from "@/public/icons/SideBar/jobFeed_24x24_clr.svg";
import saved_jobs from "@/public/icons/SideBar/savedJobs_24x24_clr.svg";

// Components
import NavLink from "../NavLink";

export default function SideBar() {

    const isClosed = useSelector((state: RootState) => state.sideBar.isClosed)
    const dispatch = useDispatch()

    return (
        // Custom css classes are used here for more advanced css (see globals.scss)
        <div className={`sideBarContainer ${!isClosed ? "isOpen" : ""}`}>
            <div className="sideBar">

                {/* Tailwind styling */}
                <div className="flex flex-col items-center justify-center gap-4 mt-0 lg:mt-4">
                    <Image src={dd_logo} width={48} height={37} alt="devdreams logo"/>
                    <p className="hidden lg:block text-xl font-medium">DevDreams <span className="text-primary">Jobs</span></p>
                </div>
                <ul className="mt-8">
                    <li><NavLink icon={job_feed} href="/job-board/jobs" text="Job Feed"/></li>
                    <li className="mt-2"><NavLink icon={saved_jobs} href="/job-board/jobs/saved" text="Saved Jobs"/></li>
                </ul>

            </div>
            <button onClick={() => dispatch(close())} className="closeBtn"></button>
        </div>
    );
}
