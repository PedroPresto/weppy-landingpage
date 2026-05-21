export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://weppy.com.br";
export const SITE_NAME = "Weppy";
export const SITE_TITLE = "Automação WhatsApp com IA · Assistente Virtual que Vende 24h | Weppy";
export const SITE_DESCRIPTION =
  "Automatize seu WhatsApp Business com IA que responde, qualifica leads e vende 24/7. Setup em 5 min, sem código. +2.300 negócios usam Weppy.";
export const SITE_LOCALE = "pt-BR";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Weppy WhatsApp",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://www.instagram.com/weppy.com.br",
    "https://www.linkedin.com/company/weppy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "BR",
    availableLanguage: ["Portuguese"],
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: SITE_LOCALE,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const SOFTWARE_APP_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "25",
    highPrice: "97",
    priceCurrency: "BRL",
    offerCount: 2,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "2300",
  },
};
