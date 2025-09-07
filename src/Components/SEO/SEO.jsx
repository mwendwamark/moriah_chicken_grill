import React from 'react';
import { Meta } from 'react-meta-elements';

const SEO = ({ 
  title = 'Moriah Chicken Grill - Premium Quality Chicken Dishes',
  description = 'Discover the finest chicken dishes at Moriah Chicken Grill. We serve premium quality, delicious chicken meals made with the freshest ingredients.',
  keywords = 'Moriah Chicken Grill, chicken restaurant, grilled chicken, chicken meals, best chicken in town, Moriah chicken',
  ogTitle = 'Moriah Chicken Grill - Premium Quality Chicken Dishes',
  ogDescription = 'Experience the best chicken dishes in town at Moriah Chicken Grill. Fresh, delicious, and made with love!',
  ogImage = 'https://moriahchickengrill.vercel.app/assets/logo.png',
  ogUrl = 'https://moriahchickengrill.vercel.app',
  canonicalUrl = 'https://moriahchickengrill.vercel.app'
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon - Make sure to add your favicon to public folder */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default SEO;
