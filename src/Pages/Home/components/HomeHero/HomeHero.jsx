import { useEffect } from "react";
import "./HomeHero.css";
import { NavLink } from "react-router-dom";
import { annotate } from "rough-notation";
import { ArrowDownRight } from "lucide-react";
import Shawarma from "../../../../assets/Shawarma.webp";
import Pilau_and_Meat from "../../../../assets/Pilau_and_Meat.webp";
import Hamburger from "../../../../assets/Hamburger.webp";
import Full_Grilled_Chicken from "../../../../assets/Full_Grilled_Chicken.webp";
import Chicken_pieces from "../../../../assets/Chicken_Pieces.webp";
import Moriah_Fries from "../../../../assets/Moriah_Fries.webp";

const HomeHero = () => {
  useEffect(() => {
    const moriahGrillElement = document.querySelector("#moriah_chicken_grill");

    // Select ALL elements with the class 'rough-annotate-heading'
    const elementsToAnnotate = document.querySelectorAll(
      ".rough-annotate-heading"
    );

    if (moriahGrillElement) {
      const annotation = annotate(moriahGrillElement, {
        animate: true,
        type: "circle",
        color: "#f5c412", // Semi-transparent maroon
        strokeWidth: 1,
        padding: "02rem",
      });
      annotation.show();
    }

    // Loop through each selected element and apply the annotation
    elementsToAnnotate.forEach((element) => {
      const annotation = annotate(element, {
        animate: true,
        type: "highlight",
        color: "#aa060d",
        strokeWidth: 5,
      });
      annotation.show();
    });
  }, []);
  return (
    <div>
      <section className="home_page-hero container">
        <div className="home_page-hero-title">
          <h1>
            Enjoy your favorite dishes with <br />
            <span id="moriah_chicken_grill">Moriah Chicken Grill</span>{" "}
          </h1>
          <p>
            Moriah chicken grill is the best Chips Masala & fried Chicken joint
            in Nairobi. We are located in Juja, Thika & Kasarani
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

      <section className="home_page-stats-container container">
        <div className="home_page-stats-contents">
          <div className="home_page-stats-item">
            <h2>30 +</h2>
            <p>Meals</p>
          </div>

          <div className="home_page-stats-item">
            <h2>21 +</h2>
            <p>Drinks</p>
          </div>

          <div className="home_page-stats-item">
            <h2>3</h2>
            <p>Branches</p>
          </div>

          <div className="home_page-stats-item">
            <h2>6256 +</h2>
            <p>Clients Served</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
