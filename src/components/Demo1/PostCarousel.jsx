import { useEffect } from "react";
import AllState from "../../assets/images/PlayerPosts/AllState.png";    
import Signing from "../../assets/images/PlayerPosts/Signing.png";
import MVP from "../../assets/images/PlayerPosts/MVP.png";
import Big26 from "../../assets/images/PlayerPosts/Big26.png";
import SBC from "../../assets/images/PlayerPosts/SBC.png";
import NCAA from "../../assets/images/PlayerPosts/NCAA.png";



const PostCarousel = () => {
    useEffect(() => {
        let slideIndex = 0;

        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            setTimeout(showSlides, 10000);
        }

        showSlides();
    }, []);

    return (

        <div>
        <div className="post-carousel">

            <style>
                {`
                * { box-sizing: border-box; }
body { font-family: Verdana, sans-serif; }
.mySlides { display: none; }
img { vertical-align: middle; }

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
    from { opacity: 0.4; } 
    to { opacity: 1; }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .text { font-size: 11px; }
}

`}
            </style>


            <h2>Automatic Slideshow</h2>
            <p>Change image every 2 seconds:</p>

            <div className="slideshow-container">
                {[AllState, Signing, MVP, Big26, SBC, NCAA].map((image, index) => (
                    <div key={index} className="mySlides fade">
                        <div className="numbertext">{index + 1} / 6</div>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} className=" rounded grayscale-image" />
                        <div className="text">Caption {index + 1}</div>
                    </div>
                ))}
            </div>

            <br />

            <div style={{ textAlign: "center" }}>
                {[...Array(6)].map((_, index) => (
                    <span key={index} className="dot"></span>
                ))}
            </div>
        </div>
        </div>
    );
};

export default PostCarousel;
