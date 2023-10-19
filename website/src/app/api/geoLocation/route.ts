import clientPromise from "@/src/mongodb/init";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchQuery = new URL(request.url).searchParams.get("query");

    // If there is no search query, return an empty array before connecting to the database
    if (!searchQuery) return NextResponse.json({ value: [] });

    const client = await clientPromise;
    const db = client.db("geoData");

    let dbQuery;

    // Check if the search query is a city, country pair or just a city or country
    if (searchQuery.includes(",")) {
        const queryParts = searchQuery.split(",");
        dbQuery = {
            $or: [
                {
                    country: { $regex: queryParts[1] },
                },
                {
                    city: { $regex: queryParts[0] },
                },
                {
                    country: { $regex: queryParts[0] },
                },
                {
                    city: { $regex: queryParts[1] },
                },
            ],
        };
    } else {
        dbQuery = {
            $or: [
                {
                    country: { $regex: searchQuery },
                },
                {
                    city: { $regex: searchQuery },
                },
            ],
        };
    }

    const cursor = db.collection("locations").find(dbQuery).limit(5);

    const results = await cursor.toArray();
    console.log("results: ", results);

    const returnResults = results.map((result) => {
        return `${result.city}, ${result.country}`;
    });

    return NextResponse.json({ value: returnResults });
}
