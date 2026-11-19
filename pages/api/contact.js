import { BOOKING_HOURS } from "../../constants/business";
import { validateSlot } from "../../lib/booking";
import { isMailConfigured, mailOptions, transporter } from "../../lib/nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9 ()-]{7,20}$/;

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        ch
      ])
  );

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/** Returns [booking, error]. */
const parseBooking = (body = {}) => {
  const booking = {
    name: clean(body.name, 80),
    email: clean(body.email, 120),
    phone: clean(body.phone, 20),
    date: clean(body.date, 10),
    time: clean(body.time, 5),
    guests: Number(body.guests),
  };

  if (!booking.name) return [null, "Please enter your name."];
  if (!EMAIL_PATTERN.test(booking.email))
    return [null, "Please enter a valid email."];
  if (!PHONE_PATTERN.test(booking.phone))
    return [null, "Please enter a valid phone number."];
  if (
    !Number.isInteger(booking.guests) ||
    booking.guests < 1 ||
    booking.guests > BOOKING_HOURS.maxGuests
  ) {
    return [null, "Please choose the number of guests."];
  }
  // The server may run in UTC while guests book in UK time, so allow a
  // couple of hours of slack on the "in the past" check.
  const slack = new Date(Date.now() - 2 * 60 * 60 * 1000);
  const slotError = validateSlot(booking.date, booking.time, slack);
  if (slotError) return [null, `${slotError}.`];

  return [booking, null];
};

const buildEmail = (b) => {
  const [y, m, d] = b.date.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const rows = [
    ["Name", b.name],
    ["Phone", b.phone],
    ["Email", b.email],
    ["Guests", b.guests],
    ["Date", date],
    ["Time", b.time],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#fff;font-family:Helvetica,Arial,sans-serif;color:#2a2a2a">
<h2 style="margin:0 0 16px">New booking request</h2>
<table cellpadding="8" style="border-collapse:collapse;max-width:500px;width:100%">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="border-bottom:1px solid #eee;color:#666;width:120px">${k}</td><td style="border-bottom:1px solid #eee;font-weight:600">${escapeHtml(
        v
      )}</td></tr>`
  )
  .join("\n")}
</table>
<p style="color:#666;font-size:13px">Reply to this email to contact the guest directly.</p>
</body></html>`;

  return {
    subject: `Booking request: ${b.guests} guests, ${date} at ${b.time}`,
    text,
    html,
  };
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (req.body && req.body.company) {
    return res.status(201).json({ success: true });
  }

  const [booking, error] = parseBooking(req.body);
  if (error) return res.status(400).json({ message: error });

  if (!isMailConfigured) {
    console.error("Booking email is not configured (EMAIL_USER / EMAIL_PASS)");
    return res
      .status(500)
      .json({ message: "Online booking is unavailable. Please call us." });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: `"${booking.name.replace(/"/g, "")}" <${booking.email}>`,
      ...buildEmail(booking),
    });
    return res.status(201).json({ success: true });
  } catch (err) {
    console.error("Failed to send booking email", err);
    return res
      .status(502)
      .json({ message: "Something went wrong. Please try again or call us." });
  }
};

export default handler;
