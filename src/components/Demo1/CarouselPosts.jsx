import { useEffect, useState } from "react";
import State from "../../assets/images/Expand/State.png";
import Conf from "../../assets/images/Expand/Conf.png";
import Preseason from "../../assets/images/Expand/Preseason.png";
import TeamMD from "../../assets/images/Expand/TeamMD.png";
import B26 from "../../assets/images/Expand/B26.png";
import NCAA from "../../assets/images/Expand/NCAA.png";

const images = [State, Conf, Preseason, TeamMD, B26, NCAA];

const MyComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to update slide index automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

    <div>
        <style>
            {`
            /* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}`}
        </style>
   
   
    <div className="slideshow-container">
      <div className="slide">
        <img src={images[slideIndex]} alt="slide" style={{ width: "100%" }} />
      </div>

      {/* Next/Prev Buttons */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
            style={{
              cursor: "pointer",
              height: "10px",
              width: "10px",
              margin: "0 5px",
              backgroundColor: slideIndex === index ? "#717171" : "#bbb",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyComponent;
