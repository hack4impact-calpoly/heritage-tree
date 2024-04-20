import connectDB from "@database/db";
import { NextResponse } from "next/server";
import  Volunteer from "@database/volunteerSchema"
/**
 * Example GET API route
 * @returns {message: string}
 */


export async function GET() {
  try {
    // Establishing database connection
    await connectDB();

    // Fetching clients
    const volunteers = await Volunteer.find();
    console.log("Volunteers: ", volunteers);

    // Checking if clients are found
    if (volunteers.length === 0) {
      return NextResponse.json(
        { message: "No volunteers found." },
        { status: 200 }
      );
    }

    // Returning clients if found
    return NextResponse.json(volunteers);
  } catch (err) {
    console.error("Error fetching volunteers:", err);
    return NextResponse.json(
      { error: "Error fetching volunteers." },
      { status: 500 }
    );
  }
}
