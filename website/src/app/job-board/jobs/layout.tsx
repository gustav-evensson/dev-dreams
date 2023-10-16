import TopBar from "@/src/components/TopBar"

export default function JobsBoardTopBar({ children }: { children: React.ReactNode }){

    return(
        <div className="h-screen w-full flex flex-col">
            <TopBar/>
            <div className="h-full overflow-auto p-4">
                {children}
            </div>
        </div>
    )
}