import { SITE_NAME, SITE_URL, SUPPORT_EMAIL, PHONE } from "./constants";

/** Schema.org Organization for PeptideRx Direct. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SUPPORT_EMAIL,
    telephone: PHONE,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://twitter.com/peptiderxdirect",
      "https://instagram.com/peptiderxdirect",
      "https://facebook.com/peptiderxdirect",
      "https://linkedin.com/company/peptiderxdirect",
    ],
  };
}

/** Schema.org MedicalBusiness for PeptideRx Direct. */
export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    email: SUPPORT_EMAIL,
    telephone: PHONE,
    openingHours: "Mo-Fr 09:00-18:00",
    medicalSpecialty: "Peptide Therapy",
    priceRange: "$$",
  };
}

/** Schema.org MedicalWebPage. */
export function medicalWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** Schema.org FAQPage from an array of Q&A pairs. */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Schema.org BreadcrumbList from ordered items. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Schema.org Article for a blog post. */
export function blogPostSchema(post: {
  title: string;
  description: string;
  author: string;
  date: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    url: post.url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}
