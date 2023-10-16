import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobs Dashboard",
    description: "Browse, Search and Save Jobs",
};

import SideBar from "@/src/components/SideBar/SideBar";

export default function JobsDashboard({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen flex overflow-hidden">
            <SideBar />
            {children}
        </main>
    );
}
