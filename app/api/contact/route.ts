import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Log to console (extend with Resend/EmailJS for production email delivery)
    console.log("📬 New Contact Submission:");
    console.log(`  Name:    ${name}`);
    console.log(`  Email:   ${email}`);
    console.log(`  Service: ${service || "Not specified"}`);
    console.log(`  Message: ${message}`);
    console.log(`  Time:    ${new Date().toISOString()}`);

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
