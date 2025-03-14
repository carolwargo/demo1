import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

import State from "../assets/images/Expand/State.png";
import Conf from "../assets/images/Expand/Conf.png";
import Preseason from "../assets/images/Expand/Preseason.png";
import TeamMD from "../assets/images/Expand/TeamMD.png";
import B26 from "../assets/images/Expand/B26.png";
import NCAA from "../assets/images/Expand/NCAA.png";

const cards = [
  { id: "h1", title: "All-State Honors", img: State, link: "https://x.com" },
  { id: "h2", title: "Big 26 Honors", img: B26, link: "https://x.com" },
  { id: "h3", title: "Big 26 Team Maryland", img: TeamMD, link: "https://x.com" },
  { id: "h4", title: "NCAA Baseball Opening Day", img: NCAA, link: "https://x.com" },
  { id: "h5", title: "Preseason Banquet", img: Preseason, link: "https://x.com" },
  { id: "h6", title: "All-Conference Honors", img: Conf, link: "https://x.com" },
];

const CarouselSmall = () => {
  return (
    <div>
      <style>
        {`
        .carousel-image-wrapper {
  position: relative;
  width: 100%;
}

.carousel-image-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Adjust the darkness */
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
}

.carousel-title { 
text-shadow: 2px 2px 4px #000000; 
        }

        `}
      </style>
    <div className="container">
      <h2>Carousel Example</h2>
      <Carousel interval={3000} fade>
        {cards.map((card) => (
          <Carousel.Item key={card.id}>
              <div className="carousel-image-wrapper">
              <img src={card.img} alt={card.title} className="d-block w-100 carousel-image" />
            </div> 
            <Carousel.Caption>
              <h3 className="carousel-title">{card.title}</h3>
              <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="carousel-link w3-text-gray hover-zoom"
    > View Post On  <b>
      <i className="fab fa-x-twitter" 
      style={{ 
        color:'black', 
        fontWeight:'bold', 
        textShadow: "1px 1px 2px rgb(237, 235, 235), 0 0 25px rgb(237, 235, 235), 0 0 5px rgb(237, 235, 235), 0 0 5px rgb(237, 235, 235) "}}>
          </i>
          </b>
  
    </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default CarouselSmall;
