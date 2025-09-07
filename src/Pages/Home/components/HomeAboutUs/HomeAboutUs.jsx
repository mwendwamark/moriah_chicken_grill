import { useEffect } from "react";
import "./HomeAboutUs.css";
import { NavLink } from "react-router-dom";
import { annotate } from "rough-notation";
import { ArrowDownRight } from "lucide-react";
import MoriahLocation from "../../../../assets/MoriahLocation.webp";
import MoriahLocation1 from "../../../../assets/MoriahLocation1.webp";

const HomeAboutUs = () => {
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
      <section className="home_page-about-us container section">
        <div className="home_page-about-us-heading">
          <span>About us</span>
          <h2 className="home_page-about-us-h2">
            <strong>Why we are </strong>
            <strong className="rough-annotate-heading">the best</strong>{" "}
            {/* Applied the class */}
          </h2>
        </div>

        <div className="home_page-about-us-contents">
          <div className="home_page-about-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut
              accusamus vel magni praesentium laborum sequi. Facere fuga
              inventore, quam ratione quasi dignissimos pariatur excepturi fugit
              quos repellat voluptas assumenda.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              natus, adipisci accusamus soluta optio tempora incidunt officiis
              nulla autem et. Rem molestiae doloribus eius mollitia error facere
              ea quam distinctio.
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
  );
};

export default HomeAboutUs;
