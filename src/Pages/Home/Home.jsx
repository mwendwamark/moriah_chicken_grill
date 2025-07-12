import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { annotate } from "rough-notation";
import { ArrowDownRight } from "lucide-react";
import Shawarma from "../../assets/Shawarma.jpg";
import Pilau_and_Meat from "../../assets/Pilau_and_Meat.jpg";
import Hamburger from "../../assets/Hamburger.jpg";
import Full_Grilled_Chicken from "../../assets/Full_Grilled_Chicken.jpg";
import Chicken_pieces from "../../assets/Chicken_Pieces.jpg";
import Moriah_Fries from "../../assets/Moriah_Fries.jpg";

const Home = () => {
  useEffect(() => {
    const e = document.querySelector("#moriah_chicken_grill");
    if (e) {
      const annotation = annotate(e, {
        type: "circle",
        color: "#f5c412", // Semi-transparent maroon
        strokeWidth: 1,
      });
      annotation.show();
    }
  }, []);
  return (
    <>
      <div className="home_page">
        <section className="home_page-hero container">
          <div className="home_page-hero-title">
            <h1>
              Enjoy your favortie dishes with <br />
              <span id="moriah_chicken_grill">Moriah Chicken Grill</span>{" "}
            </h1>
            <p>
              Moriah chicken grill is the best Chips Masala & fried Chicken
              joint in Nairobi. We are located in Juja, Thika & Kasarani
            </p>
          </div>
          <div className="home_page-hero-cta">
            <NavLink to="/products" className="btn btn-outline">
              {" "}
              explore more <ArrowDownRight className="btn-icon" />
            </NavLink>
          </div>
        </section>

        <section className="home_page-hero-images-container container">
          <div className="home_page-hero-images">
            {/* Updated image order to match the provided design image */}
            <img src={Chicken_pieces} alt="Chicken_pieces" loading="lazy" />
            <img src={Hamburger} alt="Hamburger" loading="lazy" />
            <img src={Shawarma} alt="Shawarma" loading="lazy" />
            <img src={Pilau_and_Meat} alt="Pilau_and_Meat" loading="lazy" />
            <img
              src={Full_Grilled_Chicken}
              alt="Full_Grilled_Chicken"
              loading="lazy"
            />
            <img src={Moriah_Fries} alt="Moriah_Fries" loading="lazy" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
