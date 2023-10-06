import Image from "next/image"

import dd_logo from '@/public/images/dd_colorful_48x37.png'
import job_feed from '@/public/icons/job_feed.svg'
import search_jobs from '@/public/icons/search_jobs.svg'
import saved_jobs from '@/public/icons/saved_jobs.svg'

import NavLink from "./NavLink"

export default function SideBar(){
    return(
        <div className="row-span-2 border-r border-border h-full">
            <div className="flex flex-col items-center justify-center gap-3 p-6 lg:p-8"> 
                <Image src={dd_logo} width={48} height={37} alt="DevDreams logo"/>                   
                <h2 className="text-xl font-semibold hidden lg:block">DevDreams <span className="text-secondary">Jobs</span></h2>
            </div>

            <ul className="flex flex-col gap-2 mt-4 lg:px-4">
                <li><NavLink href="/jobs" text="Job feed" icon={job_feed}/></li>
                <li><NavLink href="/jobs/search" text="Search jobs" icon={search_jobs}/></li>
                <li><NavLink href="/jobs/saved" text="Saved jobs" icon={saved_jobs}/></li>
            </ul>
        </div>
    )
}