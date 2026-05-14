import { profile } from "@/data/profile";

const fallbackUrl = "http://localhost:3000";

function normalizeUrl(value: string | undefined): string {
  const candidate = value && value.length > 0 ? value : fallbackUrl;
  return candidate.replace(/\/$/, "");
}

export const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteConfig = {
  url: siteUrl,
  name: profile.name,
  shortName: "Portfolio",
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
  locale: "en_US",
  language: "en",
  twitterHandle: "@yourhandle",
  themeColor: "#0a0a0a",
  ogImagePath: "/opengraph-image",
  person: {
    name: profile.name,
    jobTitle: profile.title,
    sameAs: [
      "https://github.com/yourhandle",
      "https://www.linkedin.com/in/yourhandle/",
      "https://x.com/yourhandle",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) return `${siteUrl}/${path}`;
  return `${siteUrl}${path}`;
}
