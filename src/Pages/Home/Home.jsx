// Home.jsx (Updated useEffect)

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
import MoriahLocation from "../../assets/MoriahLocation.jpg";
import MoriahLocation1 from "../../assets/MoriahLocation1.jpg";
import homeProducts from "../../MockData/HomeProducts";

const Home = () => {
  useEffect(() => {
    const moriahGrillElement = document.querySelector("#moriah_chicken_grill");

    // Select ALL elements with the class 'rough-annotate-heading'
    const elementsToAnnotate = document.querySelectorAll(".rough-annotate-heading");

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
    elementsToAnnotate.forEach(element => {
      const annotation = annotate(element, {
        animate: true,
        type: "highlight",
        color: "#aa060d",
        strokeWidth: 5,
      });
      annotation.show();
    });

  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <>
      <div className="home_page below-navbar">
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
            <h2 className="home_page-section-heading">
              <strong>From Our </strong>{" "}
              <strong className="rough-annotate-heading">experienced chefs</strong>{" "} {/* Applied the class */}
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

        <section className="home_page-about-us container section">
          <div className="home_page-about-us-heading">
            <span>About us</span>
            <h2 className="home_page-about-us-h2">
              <strong>Why we are </strong>
              <strong className="rough-annotate-heading">the best</strong> {/* Applied the class */}
            </h2>
          </div>

          <div className="home_page-about-us-contents">
            <div className="home_page-about-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                aut accusamus vel magni praesentium laborum sequi. Facere fuga
                inventore, quam ratione quasi dignissimos pariatur excepturi
                fugit quos repellat voluptas assumenda.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                natus, adipisci accusamus soluta optio tempora incidunt officiis
                nulla autem et. Rem molestiae doloribus eius mollitia error
                facere ea quam distinctio.
              </p>

              <div className="home_page-about-cta">
                <NavLink className="btn btn-primary">
                  READ MORE
                  <ArrowDownRight size={18} />
                </NavLink>
              </div>
            </div>

            <div className="home_page-about-images">
              <div className="home_page-about-image-left">
                <img
                  src={MoriahLocation}
                  alt="Coffee portafilter with beans"
                  loading="lazy"
                />
              </div>

              <div className="home_page-about-image-right">
                <img
                  src={MoriahLocation1}
                  alt="Bowl of coffee beans"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;