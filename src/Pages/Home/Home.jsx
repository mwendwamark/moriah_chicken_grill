import "./Home.css";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeProducts from "./components/HomeProducts/HomeProducts";
import HomeAboutUs from "./components/HomeAboutUs/HomeAboutUs";
import TestimonialCard from "./components/TestimonialCard/HomeTestimonial";
import HomeBottomCTA from "./components/HomeBottomCTA/HomeBottomCTA";

const Home = () => {
  return (
    <>
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
