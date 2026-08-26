import type { CategorySlug } from "@/data/business";

export interface CategoryCopy {
  name: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
}

export interface Dictionary {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    products: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    callUs: string;
    whatsapp: string;
  };
  footer: {
    quickLinksHeading: string;
    categoriesHeading: string;
    contactHeading: string;
    registeredNote: string;
    rightsReserved: string;
  };
  home: {
    dealerBadge: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    trustBar: string[];
    categoriesHeading: string;
    categoriesSubheading: string;
    whyHeading: string;
    whyItems: { title: string; desc: string }[];
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  about: {
    title: string;
    intro: string;
    storyHeading: string;
    storyBody: string[];
    proprietorHeading: string;
    proprietorBody: string;
    valuesHeading: string;
    values: { title: string; desc: string }[];
    trustHeading: string;
    trustItems: string[];
  };
  products: {
    title: string;
    intro: string;
    viewCategory: string;
    comingSoonNote: string;
    highlightsHeading: string;
    itemsHeading: string;
    itemsNote: string;
  };
  categories: Record<CategorySlug, CategoryCopy>;
  contact: {
    title: string;
    intro: string;
    addressHeading: string;
    phoneHeading: string;
    emailHeading: string;
    hoursHeading: string;
    hoursNote: string;
    mapHeading: string;
    whatsappCta: string;
    callCta: string;
    emailCta: string;
    mobileLabel: string;
    getDirections: string;
  };
  common: {
    languageSwitchLabel: string;
    backHome: string;
    allCategories: string;
    facebookLabel: string;
  };
  chat: {
    messengerCta: string;
  };
}
