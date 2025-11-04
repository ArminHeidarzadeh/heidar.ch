export type SiteConfig = {
  ownerName: string;
  contactEmail: string;
  domain: string; // e.g. "heidar.ch"
  siteTitle: string; // e.g. "heidar.ch"
  githubRepo?: string; // optional repo URL
};

export const site: SiteConfig = {
  ownerName: "Armin Heidarzadeh",
  contactEmail: "armin@heidar.ch",
  domain: "heidar.ch",
  siteTitle: "heidar.ch",
  githubRepo: "https://github.com/ArminHeidarzadeh/heidar.ch"
};

export const currentYear = new Date().getFullYear();
