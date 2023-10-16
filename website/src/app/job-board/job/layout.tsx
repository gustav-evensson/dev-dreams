import BackBtn from "@/src/components/BackBtn"

export default function JobsBoardTopBar({ children }: { children: React.ReactNode }){

    return(
        <div className="h-screen w-full flex flex-col">
            <div className="border-b border-border h-fit w-full flex items-center p-4">
               <BackBtn/> 
            </div>
            <div className="h-full overflow-auto">
                {children}
            </div>
        </div>
    )
}