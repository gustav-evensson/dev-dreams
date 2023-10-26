import TestFilter from "@/src/components/TestFilter"

export default function JobFeed({ searchParams, }: { searchParams: {[key: string]: string | string[] | undefined} }){
    
    return(
        <div>
            <p>Job Feed</p>
            <TestFilter searchParams={searchParams}/>
        </div>
        
    )
}