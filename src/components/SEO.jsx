import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  type = 'website',
  image,
  url,
  author,
  datePublished,
  dateModified
}) => {
  const siteTitle = 'Your Name - Portfolio & Blog';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Personal portfolio and blog showcasing web development projects, tutorials, and insights about technology.';
  const defaultImage = '/path-to-your-default-og-image.jpg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Your Name'} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={datePublished} />
          <meta property="article:modified_time" content={dateModified} />
          <meta property="article:author" content={author} />
        </>
      )}

      {/* Structured Data */}
      {type === 'article' ? (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: fullTitle,
            description: description || defaultDescription,
            image: image || defaultImage,
            datePublished,
            dateModified,
            author: {
              '@type': 'Person',
              name: author
            }
          })}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteTitle,
            description: description || defaultDescription,
            url: url || window.location.origin
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 