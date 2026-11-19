import { BOOKING_HOURS } from "../constants/business";

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const pad = (n) => String(n).padStart(2, "0");

/** "YYYY-MM-DD" for a Date in the visitor's local time. */
export const toISODate = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

/** Parse "YYYY-MM-DD" as a local date (no timezone shift). */
export const parseISODate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.getMonth() === m - 1 && date.getDate() === d ? date : null;
};

/** All bookable "HH:MM" slots for a given "YYYY-MM-DD". */
export const getTimeSlots = (isoDate) => {
  const date = parseISODate(isoDate);
  if (!date) return [];
  const start = toMinutes(BOOKING_HOURS.open);
  const end = toMinutes(BOOKING_HOURS.lastSlot[date.getDay()]);
  const slots = [];
  for (let t = start; t <= end; t += BOOKING_HOURS.slotMinutes) {
    slots.push(`${pad(Math.floor(t / 60))}:${pad(t % 60)}`);
  }
  return slots;
};

/** Returns an error string, or null when the date/time is bookable. */
export const validateSlot = (isoDate, time, now = new Date()) => {
  const date = parseISODate(isoDate);
  if (!date) return "Please choose a valid date";
  if (!getTimeSlots(isoDate).includes(time)) {
    return "Please choose a time within our opening hours";
  }
  const [h, m] = time.split(":").map(Number);
  const when = new Date(date);
  when.setHours(h, m, 0, 0);
  if (when.getTime() < now.getTime()) return "That time has already passed";
  const maxAhead = new Date(now);
  maxAhead.setFullYear(maxAhead.getFullYear() + 1);
  if (when > maxAhead) return "We take bookings up to a year ahead";
  return null;
};
