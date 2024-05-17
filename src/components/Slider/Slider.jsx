import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slider.module.css";

const Slider = ({ imageGallery }) => {
  const images = imageGallery;

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = images.length;

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Our photos</h2>
      <div className={styles.slider}>
        <button className={styles.prev} onClick={prevSlide}>
          {/* {"<"} */}
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            srcSet={`${image.image_1280_1x} 1x, ${image.image_1280_2x} 2x`}
            alt={image.alt}
            className={index === activeSlide ? styles.active : ""}
          />
        ))}
        <button className={styles.next} onClick={nextSlide}>
          {/* {">"} */}
        </button>
      </div>

      <div className={styles.dots}>
        <span
          className={activeSlide === 0 ? styles.dotActive : styles.dot}
          onClick={prevSlide}
        ></span>
        <span
          className={
            activeSlide !== 0 && activeSlide !== totalSlides - 1
              ? styles.dotActive
              : styles.dot
          }
        ></span>
        <span
          className={
            activeSlide === totalSlides - 1 ? styles.dotActive : styles.dot
          }
          onClick={nextSlide}
        ></span>
      </div>
    </section>
  );
};

Slider.propTypes = {
  imageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      image_1280_1x: PropTypes.string.isRequired,
      image_1280_2x: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
