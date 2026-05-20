export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://weppy.com.br";
export const SITE_NAME = "Weppy";
export const SITE_TITLE = "Weppy — Automação Inteligente para WhatsApp";
export const SITE_DESCRIPTION =
  "Não perca mais vendas por demorar a responder. Tenha um assistente virtual que vende por você, dia e noite.";
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
