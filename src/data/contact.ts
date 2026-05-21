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
    address: "H8, S6, Block F, New City Phase 2 Islamabad 47040 Pakistan",
    email: "hello@portfolio.com",
    phone: "+44 7598 981921",
    phoneHref: "https://wa.me/447598981921",
    whatsapp: true,
  },
  {
    country: "Bahrain",
    flag: "/images/icons/bahrainFlag.svg",
    flagAlt: "Bahrain Flag",
    address:
      "Flat No. 11, Building 1694, Road 968, Block 909, East Riffa, Southern Governorate, Bahrain",
    email: "hello@portfolio.com",
    phone: "+973 3557 9427",
    phoneHref: "tel:+97335579427",
  },
  {
    country: "United Kingdom",
    flag: "/images/icons/ukFlag.svg",
    flagAlt: "United Kingdom flag",
    address:
      "71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom",
    email: "hello@portfolio.com",
    phone: "+44 7598 981921",
    phoneHref: "https://wa.me/447598981921",
    whatsapp: true,
  },
];
