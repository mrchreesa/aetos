export const SITE_URL = "https://aetostaverna.co.uk";

const defaultTitle = "Aetos Greek Taverna | Seven Sisters Road, London";
const defaultDescription =
  "Family-run Greek taverna on Seven Sisters Road, London N7. Breakfast, lunch and dinner, meze, moussaka and private hire. Book a table online.";

export const SEO = {
  defaultTitle,
  titleTemplate: "%s | Aetos Greek Taverna",
  description: defaultDescription,
  canonical: `${SITE_URL}/`,
  additionalLinkTags: [
    { rel: "icon", type: "image/png", href: "/favicons/favicon.png" },
    { rel: "apple-touch-icon", href: "/favicons/favicon.png" },
    { rel: "manifest", href: "/favicons/manifest.json" },
  ],
  additionalMetaTags: [{ name: "theme-color", content: "#111111" }],
  openGraph: {
    title: "Aetos Greek Taverna",
    description: defaultDescription,
    type: "website",
    locale: "en_GB",
    url: `${SITE_URL}/`,
    site_name: "Aetos Greek Taverna",
    images: [
      {
        url: `${SITE_URL}/images/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Aetos Greek Taverna",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default SEO;
