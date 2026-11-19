import nodemailer from "nodemailer";

// Prefer server-only names. The NEXT_PUBLIC_ fallbacks keep existing
// deployments working until the env vars are renamed in Vercel.
const user = process.env.EMAIL_USER || process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.EMAIL_PASS || process.env.NEXT_PUBLIC_EMAIL_PASS;

export const isMailConfigured = Boolean(user && pass);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

export const mailOptions = {
  from: `"Aetos website" <${user}>`,
  to: process.env.BOOKING_INBOX || user,
};
