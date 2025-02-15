import { InView } from "react-intersection-observer";
import Slider from "react-slick";
import AllState from "../../assets/images/PlayerPosts/AllState.png";
import Signing from "../../assets/images/PlayerPosts/Signing.png";
import MVP from "../../assets/images/PlayerPosts/MVP.png";
import Big26 from "../../assets/images/PlayerPosts/Big26.png";
import SBC from "../../assets/images/PlayerPosts/SBC.png";
import NCAA from "../../assets/images/PlayerPosts/NCAA.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",  
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px", // Ensure no extra padding
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,  
            }
          }
        ]
      };
      
      
  return (
    <div className="page-container">
  <style>{`
   
.slick-slide {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.5; /* Dim non-active slides */
  transform: scale(0.9) translateY(10px);
  margin: 0 5px; /* Reduce padding between slides */
}

/* Ensure Slick Track is properly aligned */
.slick-track {
  display: flex !important;
  align-items: center;
}

/* Fix extra spacing in center mode */
.slick-list {
  padding: 0 !important;
  overflow: visible !important;
}

/* Center mode active slide */
.slick-center {
  transform: scale(1) translateY(0);
  opacity: 1;
}

/* Reduce padding issues */
.slick-slide > div {
  padding: 0px !important; /* Override any internal padding */
}

/* Optional: Adjust image size to fit better */
.slick-slide img {
  width: 100%;
  height: auto;
  display: block;
}

`}</style>
 
                  {/* Performance Section */}
                  <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="posts"
        >
    <div className="slider-container g-0">
      <Slider {...settings}>
        <div style={{padding:'0px'}}>   
          <img src={ AllState} alt="calendar" className="w-100 w3-grayscale-max shadow rounded"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
          <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      <div style={{padding:'0px'}}>   
          <img src={Signing} alt="calendar"  className="w-100 w3-grayscale-max shadow rounded"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
           <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      <div style={{padding:'0px'}}>   
          <img src={MVP} alt="calendar"  className="w-100 w3-grayscale-max shadow rounded"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
           <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      <div style={{padding:'0px'}}>   
          <img src={ Big26} alt="letter"  className="w-100 w3-grayscale-max shadow rounded"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
            <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
           <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      <div style={{padding:'0px'}}>   
          <img src={ SBC} alt="Letter"  className="w-100 w3-grayscale-max shadow rounded"
            style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                        <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
           <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      <div style={{padding:'0px'}}>   
          <img src={ NCAA} alt="resume"  className="w-100 w3-grayscale-max shadow rounded"
          style={{boxShadow: '1px 1px 6px rgba(0,0,0,0.75)'}}/>
                      <p className="fw-light small mt-3 text-center text-opacity-75">Sample Letter of Recommendations</p>
           <div className="text-center">
          <a href="https:www.x.com" className=" link-light">View Post</a>
          </div>
        </div>
      </Slider>
    </div>
    </div>
    )}
    </InView>
</div>
  );
}

