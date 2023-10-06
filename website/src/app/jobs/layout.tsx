import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobs Dashboard",
    description: "Browse, Search and Save Jobs",
};

import SideBar from "@/src/components/SideBar";
import TopBar from "@/src/components/TopBar";
import MainView from "@/src/components/MainView";

export default function JobsDashboard({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen main_grid">
            <SideBar />
            <TopBar />
            {children}
        </main>
    );
}
