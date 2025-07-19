import { useEffect } from "react";
import "./HomeProducts.css";
import { annotate } from "rough-notation";
import { ShoppingCart, Star } from "lucide-react";
import homeProducts from "../../../../MockData/HomeProducts";

const HomeProducts = () => {
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
      <section className="home_page-products container section">
        <div className="home_page-products-title">
          <span>Our Products</span>
          <h2 className="home_page-section-heading">
            <strong>From Our </strong>{" "}
            <strong className="rough-annotate-heading">
              experienced chefs
            </strong>{" "}
            {/* Applied the class */}
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
                      <ShoppingCart size={16} className="shopping_cart-icon" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeProducts;
