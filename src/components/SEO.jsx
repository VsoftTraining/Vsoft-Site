import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "VSoft Solutions | Software Company in Tirunelveli",
  description = "Leading software development company in Tirunelveli offering web development, mobile apps, digital marketing, UI/UX design, and IT solutions for businesses.",
  keywords = "software company tirunelveli, IT company in Tirunelveli, web development company in Tirunelveli, mobile app development company in Tirunelveli, digital marketing company in Tirunelveli, UI/UX design company in Tirunelveli, WordPress development company in Tirunelveli, Top IT company in Tirunelveli, vsoft IT Solutions Tirunelveli, software service in Tirunelveli, best software company in Tirunelveli, IT services company in Tirunelveli ",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteUrl = "https://vsoftsolutions.in";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="VSoft Solutions" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="VSoft Solutions" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VSoft Solutions",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tirunelveli",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/vsoftsolutions",
            "https://www.linkedin.com/company/vsoftsolutions",
            "https://www.instagram.com/vsoftsolutions"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;