import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const getTextField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getPortfolioUrl = (request: Request) =>
  process.env.PORTFOLIO_URL ?? new URL(request.url).origin;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const name = getTextField(body.name);
    const email = getTextField(body.email);
    const message = getTextField(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL ??
      `Portfolio - Divyanshu Sharma <${gmailUser}>`;

    if (!gmailUser || !gmailAppPassword || !contactToEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });
    const portfolioUrl = getPortfolioUrl(request);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const safePortfolioUrl = escapeHtml(portfolioUrl);

    await transporter.sendMail({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    let autoReplySent = true;

    try {
      await transporter.sendMail({
        from: contactFromEmail,
        to: email,
        replyTo: contactToEmail,
        subject: "Thanks for contacting me",
        text: `Hi ${name},

Thank you for contacting me through my portfolio. I received your message and will get back to you soon.

You can visit my portfolio here: ${portfolioUrl}

Best,
Divyanshu Sharma`,
        html: `
          <div style="margin:0;background:#f7f6ef;padding:32px 16px;font-family:Arial,sans-serif;color:#18181b;">
            <div style="margin:0 auto;max-width:560px;border-radius:28px;background:#ffffff;padding:32px;box-shadow:0 24px 80px rgba(24,24,27,0.12);">
              <p style="margin:0 0 12px;font-size:12px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#f59e0b;">Thank you</p>
              <h1 style="margin:0 0 16px;font-size:32px;line-height:1.1;color:#09090b;">Thanks for contacting me, ${safeName}.</h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#52525b;">
                I received your message through my portfolio. I will review it and get back to you soon.
              </p>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#71717a;">
                In the meantime, you can explore my portfolio, projects, and services using the button below.
              </p>
              <a href="${safePortfolioUrl}" style="display:inline-block;border-radius:999px;background:#18181b;padding:14px 24px;font-size:13px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
                Visit Portfolio
              </a>
              <p style="margin:28px 0 0;font-size:14px;line-height:1.6;color:#71717a;">
                Best,<br />
                Divyanshu Sharma
              </p>
            </div>
          </div>
        `,
      });
    } catch (error) {
      autoReplySent = false;
      console.warn("Unable to send visitor auto-reply:", error);
    }

    return NextResponse.json({ ok: true, autoReplySent });
  } catch (error) {
    console.error("Unexpected contact email error:", error);

    return NextResponse.json(
      { error: "Unable to send the message." },
      { status: 500 },
    );
  }
}
