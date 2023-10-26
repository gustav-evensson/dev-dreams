export default function TestFilter({ searchParams, }: { searchParams: {[key: string]: string | string[] | undefined}  }) {
    
    const site = searchParams.site || ""
    const type = searchParams.type || ""
    const location = searchParams.location || ""
    const job = searchParams.job || ""

    return (
        <ul>
            <li>{site}</li>
            <li>{type}</li>
            <li>{location}</li>
            <li>{job}</li>
        </ul>
    )
}