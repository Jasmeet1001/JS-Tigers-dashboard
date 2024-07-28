/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/db/conn";

export async function GET(req: NextRequest) {
  try {
    const client = clientPromise;
    const db = client.db("shipment_db");
    const projection = {
      title: 1,
      description: 1,
      created_at: 1,
      _id: 0, // Exclude the _id field
    };
    const shipment = await db.collection("documents").find({}, {projection}).toArray();

    return NextResponse.json({ shipment });
  } catch (error) {
    return NextResponse.json({ error });
  }
}