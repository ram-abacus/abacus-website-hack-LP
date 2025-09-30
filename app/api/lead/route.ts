import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, website, details } = body || {};

    if (!email || !phone || !website) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.LEAD_TO_EMAIL || process.env.SMTP_USER || "";
    if (!to) {
      return NextResponse.json({ error: "LEAD_TO_EMAIL or SMTP_USER must be set" }, { status: 500 });
    }

    const html = `
      <h2>New WordPress Hack Fix Lead</h2>
      <p><b>Name:</b> ${name || ""}</p>
      <p><b>Company:</b> ${company || ""}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Website:</b> ${website}</p>
      <p><b>Details:</b><br/>${(details || "").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p>Source: abacus-wp-hack-fix-landing</p>
    `;

    await transporter.sendMail({
      from: `Abacus Desk Alerts <${process.env.SMTP_USER}>`,
      to,
      subject: "🚨 WordPress Hack Fix — New Lead",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
