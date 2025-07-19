import React, { useEffect } from "react";
import { annotate } from "rough-notation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import custom styles
import "./HomeTestimonial.css";
import testimonialData from "./TestimonialData";

export default function HomeTestimonial() {
  useEffect(() => {
    const moriahGrillElement = document.querySelector("#moriah_chicken_grill");
    const elementsToAnnotate = document.querySelectorAll(
      ".rough-annotate-heading"
    );

    // Store annotation instances for cleanup
    const annotations = [];

    // Clear any existing rough-notation elements
    const existingAnnotations = document.querySelectorAll(".rough-notation");
    existingAnnotations.forEach((el) => el.remove());

    if (moriahGrillElement) {
      const annotation = annotate(moriahGrillElement, {
        animate: true,
        type: "circle",
        color: "#f5c412",
        strokeWidth: 2,
        padding: 8,
        animationDuration: 1200,
      });
      annotation.show();
      annotations.push(annotation);
    }

    // Loop through each selected element and apply the annotation
    elementsToAnnotate.forEach((element) => {
      const annotation = annotate(element, {
        animate: true,
        type: "highlight",
        color: "#aa060d",
        strokeWidth: 3,
        padding: 4,
        animationDuration: 800,
      });
      annotation.show();
      annotations.push(annotation);
    });

    // Cleanup function to remove annotations when component unmounts or re-renders
    return () => {
      annotations.forEach((annotation) => {
        if (annotation && annotation.remove) {
          annotation.remove();
        }
      });
      // Also remove any remaining rough-notation elements
      const remainingAnnotations = document.querySelectorAll(".rough-notation");
      remainingAnnotations.forEach((el) => el.remove());
    };
  }, []);

  return (
    <section className="home_page-testimonial-section section container">
      <div className="home_page-testimonial-section-wrapper">
        <div className="home_page-testimonial-title">
          <span>Testimonials</span>
          <h2>
            <strong>What people say about</strong>{" "}
            <strong className="rough-annotate-heading">Moriah</strong>
          </h2>
        </div>

        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="testimonial-swiper"
          loop={testimonialData.length > 1}
          grabCursor={true}
          speed={600}
        >
          {testimonialData.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="home_testimonial-card">
                <div className="testimonial-left-side">
                  <div className="testimonial-heading">
                    <div className="testimonial-subheading">
                      <MapPin size={18} />
                      <span>{t.branch} Branch</span>
                    </div>
                    <h3>What others say about us</h3>
                  </div>

                  <div className="testimonial-testament">
                    <p>{t.testament}</p>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  <div className="testimonial-owner">
                    <h3>{t.fullName}</h3>
                    <p>{t.role}</p>
                  </div>
                </div>

                <div className="testimonial-right-side">
                  <div className="testimonial-image">
                    <img 
                      src={t.image} 
                      alt={`${t.fullName} - Moriah Customer`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}