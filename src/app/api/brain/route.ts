import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;
    
    // Mock response for now as requested
    // "Wire to a /api/brain endpoint — I'll connect Claude's API later, for now mock the responses"
    return NextResponse.json({
      role: "assistant",
      content: "Affirmative. I am Doctor Agent, your primary orchestrator. How can I assist you with your mission control today? I have full access to your Spaces, Tasks, and Agent configurations."
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
