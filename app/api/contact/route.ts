import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, budget, details } = body;

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email and details are required." },
        { status: 400 }
      );
    }

    // Insert into database
    await prisma.message.create({
      data: {
        name,
        email,
        phone: phone || null,
        budget: budget || "Not specified",
        details,
      },
    });

    console.log(`📬 Saved Contact Submission from ${name}`);

    return NextResponse.json(
      { success: true, message: "Message securely saved." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API Database error:", err);
    return NextResponse.json(
      { error: "Internal server error while saving." },
      { status: 500 }
    );
  }
}

