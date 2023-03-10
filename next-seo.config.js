const canonicalUrl = "https://aetostaverna.co.uk/";

const defaultTitle = "Aetos Taverna";
const defaultDescription =
  "The perfect place to experience the rich flavours and hospitality of Greece.";

export const SEO = {
  defaultTitle: defaultTitle,
  titleTemplate: "Aetos Taverna | %s",
  canonical: canonicalUrl,
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: "favicons/favicon.png",
      sizes: "57x57",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },

    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  openGraph: {
    title: "Aetos Greek Taverna",
    description: defaultDescription,
    type: "website",
    locale: "en_IE",
    url: canonicalUrl,
    images: [
      {
        url: "https://drive.google.com/file/d/1g6I-ZgRlajSoL9IQ104dmuKxyGOjQJUo/view?usp=sharing",
        width: 1200,
        height: 630,
        alt: "Preview of the website",
      },
    ],
  },
};

export default SEO;
