export type ContactOffice = {
  country: string;
  flag: string;
  flagAlt: string;
  address: string;
  email: string;
  phone?: string;
  phoneHref?: string;
  whatsapp?: boolean;
};

export const contactPageOffices: ContactOffice[] = [
  {
    country: "Pakistan",
    flag: "/images/icons/pakistanFlag.svg",
    flagAlt: "Pakistan Flag",
    address:
      "Innovista Rawal, Defense Avenue, A, Sector A DHA Phase 1, Islamabad, 45730, Pakistan",
    email: "hello@portfolio.com",
    phone: "+92 316 1543205",
    phoneHref: "https://wa.me/923161543205",
    whatsapp: true,
  },
  {
    country: "United Kingdom",
    flag: "/images/icons/ukFlag.svg",
    flagAlt: "United Kingdom flag",
    address: "150 S Stratford Rd, Winston-Salem, NC 27104, United States",
    email: "hello@portfolio.com",
    phone: "+44 7598 88887",
    phoneHref: "https://wa.me/44759888887",
    whatsapp: true,
  },
];
