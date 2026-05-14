import { siteConfig, siteUrl } from "./site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.person.name,
    jobTitle: siteConfig.person.jobTitle,
    description: siteConfig.description,
    url: siteUrl,
    image: `${siteUrl}${siteConfig.ogImagePath}`,
    sameAs: siteConfig.person.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
