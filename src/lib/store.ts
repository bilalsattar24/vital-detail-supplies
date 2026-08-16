export const STORE = {
  name: "Vital Detail Supplies",
  phoneDisplay: "(626) 656-6226",
  phoneTel: "+16266566226",
  addressLine1: "9121 Garvey Ave",
  addressLine2: "Rosemead, CA 91770",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=9121+Garvey+Ave,+Rosemead,+CA+91770",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;
