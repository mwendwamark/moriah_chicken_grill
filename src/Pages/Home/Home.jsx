// Home.jsx
import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { annotate } from "rough-notation";
import { ArrowDownRight, ShoppingCart, Star } from "lucide-react";
import Shawarma from "../../assets/Shawarma.jpg";
import Pilau_and_Meat from "../../assets/Pilau_and_Meat.jpg";
import Hamburger from "../../assets/Hamburger.jpg";
import Full_Grilled_Chicken from "../../assets/Full_Grilled_Chicken.jpg";
import Chicken_pieces from "../../assets/Chicken_Pieces.jpg";
import Moriah_Fries from "../../assets/Moriah_Fries.jpg";
import homeProducts from "../../MockData/HomeProducts";

const Home = () => {
  useEffect(() => {
    const e = document.querySelector("#moriah_chicken_grill");
    const f = document.querySelector("#home_section-heading");
    if (e) {
      const annotation = annotate(e, {
        animate: true,
        type: "circle",
        color: "#f5c412", // Semi-transparent maroon
        strokeWidth: 1,
        padding: "02rem",
      });
      annotation.show();
    }

    if (f) {
      const annotation = annotate(f, {
        animate: true,
        type: "underline",
        color: "#aa060d",
        strokeWidth: 5,
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
              Enjoy your favorite dishes with <br />
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

        <section className="home_page-products container section">
          <div className="home_page-products-title">
            <span>Our Products</span>
            <h2 className="home_page-section-heading"> {/* Apply flex properties to this h2 */}
              <h2>From Our </h2>{" "}
              <h2 id="home_section-heading">
                experienced chefs
              </h2>{" "}
            </h2>
          </div>
          <div className="home_page-products-contents">
            {homeProducts.map((product) => {
              return (
                <div className="home_page-product_card" key={product.id}>
                  <div className="home_page-product-img">
                    <img src={product.image} alt="Full grilled chicken" />
                  </div>

                  <div className="home_page-product-details">
                    <div className="home_page-product-name">
                      <h3>{product.productName}</h3>
                    </div>

                    <div className="home_page-product-rating">
                      <span>
                        <Star size={20} color="#f5c412" /> {product.av_rating}
                      </span>
                      <p>({product.total_rating} reviews)</p>
                    </div>

                    <div className="home_page-product-description">
                      {product.description}
                    </div>

                    <div className="home_page-product-pricing">
                      <span>KES {product.price}</span>
                      <p>
                        <ShoppingCart
                          size={16}
                          className="shopping_cart-icon"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;