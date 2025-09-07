import "./Home.css";
import { Helmet } from 'react-helmet';
import HomeHero from "./components/HomeHero/HomeHero";
import HomeProducts from "./components/HomeProducts/HomeProducts";
import HomeAboutUs from "./components/HomeAboutUs/HomeAboutUs";
import TestimonialCard from "./components/TestimonialCard/HomeTestimonial";
import HomeBottomCTA from "./components/HomeBottomCTA/HomeBottomCTA";
import SEO from "../../Components/SEO/SEO";

const Home = () => {
  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Moriah Chicken Grill",
    "image": "https://moriahchickengrill.vercel.app/assets/logo.png",
    "description": "Premium quality chicken dishes made with the freshest ingredients",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kasarani, Juja",
      "addressRegion": "Nairobi",
      "addressCountry": "Kenya"
    },
    "servesCuisine": ["Chicken Dishes", "Grilled Food", "Fast Food"],
    "priceRange": "kes 100 - kes 800",
    "telephone": "+254 753 534533.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Moriah Chicken Grill - Premium Quality Chicken Dishes"
        description="Discover the finest chicken dishes at Moriah Chicken Grill. We serve premium quality, delicious chicken meals made with the freshest ingredients."
        keywords="Moriah Chicken Grill, chicken restaurant, grilled chicken, chicken meals, best chicken in town, Moriah chicken"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="home_page below-navbar">
        <HomeHero />
        <HomeProducts />
        <HomeAboutUs />
        <TestimonialCard/>
        <HomeBottomCTA/>
      </div>
    </>
  );
};

export default Home;
