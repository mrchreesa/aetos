export const BUSINESS = {
  name: "Aetos Greek Taverna",
  street: "156A Seven Sisters Road",
  postcode: "N7 7PL",
  city: "London",
  phoneDisplay: "020 7263 5582",
  phoneHref: "tel:+442072635582",
  instagram: "https://www.instagram.com/aetos_loungetaverna",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Aetos+156A+Seven+Sisters+Road+London+N7+7PL",
  hours: [
    { label: "Sun – Thu", time: "10:00 – 23:00" },
    { label: "Fri – Sat", time: "10:00 – 02:00" },
  ],
};

// Latest bookable slot per JS weekday (0 = Sunday). Bookings stay on the
// same calendar day and end at least an hour before closing on Sun–Thu.
export const BOOKING_HOURS = {
  open: "10:00",
  lastSlot: {
    0: "22:00",
    1: "22:00",
    2: "22:00",
    3: "22:00",
    4: "22:00",
    5: "23:30",
    6: "23:30",
  },
  slotMinutes: 15,
  maxGuests: 10,
};
