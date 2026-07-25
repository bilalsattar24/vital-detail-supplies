export const STORE = {
  name: "Vital Detail Supplies",
  phoneDisplay: "(626) 656-6226",
  phoneTel: "+16266566226",
  addressLine1: "2219 W Valley Blvd",
  addressLine2: "Alhambra, CA 91803",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2219+W+Valley+Blvd,+Alhambra,+CA+91803",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;
