import Stats1 from "../../assets/images/Video/Stats1.png";
import Stats2 from "../../assets/images/Video/Stats2.png";

import { InView } from "react-intersection-observer";
import Carousel from "react-bootstrap/Carousel";

const PlayerCarousel = () => {
  return (
    <div>

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey
            ${inView ? "animate-fade-in" : ""}`} 
          id="carousel">
 <div className="row w3-padding-16 d-flex justify-content-center">
        
          <div className="col-sm-12 col-md-12 col-lg-12">  
          <Carousel data-bs-theme="light red-glow">
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow-4-secondary w3-grayscale-max"
                        src={Stats1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow-4-secondary w3-grayscale-max"
                        src={Stats2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
            </div>
            </div>
            </div>
        )}
      </InView>
    </div>
  );
};

export default PlayerCarousel;
