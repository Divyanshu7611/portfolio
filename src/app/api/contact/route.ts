import { NextResponse } from "next/server";

const inboxEmail = "dshapbss202@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const response = await fetch(`https://formsubmit.co/ajax/${inboxEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio inquiry from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to forward the message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send the message." },
      { status: 500 },
    );
  }
}
