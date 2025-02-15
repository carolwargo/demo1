import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import AllState from "../../assets/images/PlayerPosts/AllState.png";
import Signing from "../../assets/images/PlayerPosts/Signing.png";
import MVP from "../../assets/images/PlayerPosts/MVP.png";
import Big26 from "../../assets/images/PlayerPosts/Big26.png";
import SBC from "../../assets/images/PlayerPosts/SBC.png";
import NCAA from "../../assets/images/PlayerPosts/NCAA.png";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";


const PlayerPosts = () => {
  return (

    <div className="page-container">
                  {/* Performance Section */}
                  <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="posts"
        >

<div className=" container w3-padding-large">
        <div className="w3-padding-16  w3-padding-large">
        <hr className="w3-opacity w3-text-grey w3-padding-16 w3-margin-top" />
        <h3 className="fw-bold text-white">POSTS & NEWS</h3>
        <p className="w3-margin-top">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum! Quos molestias nihil at, molestiae eligendi tempora rerum maxime facilis eos dicta, ipsam aspernatur, aliquid voluptas provident mollitia expedita numquam!
          </p>
      </div>
      {/* ROW 1 */}
      <div className="row">
   <div className="col-12 col-md-4 my-2">
<img
  src={AllState}
  alt="principal"
 className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

<div className="col-12 col-md-4 my-2">
<img
  src={Signing}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>
<div className="col-12 col-md-4 my-2">
<img
  src={MVP}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
 className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

        </div>
        <div className="row">
   <div className="col-12 col-md-4 my-2">
<img
  src={Big26}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
   className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

<div className="col-12 col-md-4 my-2">
<img
  src={SBC}
  alt="principal"
    className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
    className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>
<div className="col-12 col-md-4 my-2">
<img
  src={NCAA}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
  className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

        </div>


        {/**follow me */}
  
     
    
                          
 
            <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="w3-padding-16">
        <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
        <h3 className="fw-bold text-white">FOLLOW ME ON SOCIAL MEDIA:</h3>
        <p className="w3-margin-top">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum! Quos molestias nihil at, molestiae eligendi tempora rerum maxime facilis eos dicta, ipsam aspernatur, aliquid voluptas provident mollitia expedita numquam!
          </p>
   
             
              <div className="col-sm-12 col-md-12 col-lg-12">
                    <Link
                              className=" mx-1 my-0"
                              style={{ fontSize: "2.7rem" }}
                            >
                         <span className="icon-hover-zoom">
    <strong>
      <BsTwitterX />
    </strong>
  </span>
                            </Link>
                            <Link
                             className=" mx-1 my-0"
                              style={{ fontSize: "2.9rem" }}
                            >
                               <span className="icon-hover-zoom">
    <strong>
    <FaSquareInstagram />
    </strong>
  </span>
                           
                            </Link>
                            <Link
                         className=" mx-1 my-0"
                              style={{ fontSize: "2.9rem" }}
                            >
                                       <span className="icon-hover-zoom">
    <strong>
    <FaSnapchatSquare />
    </strong>
  </span>
                              
                            </Link>
                          </div>
                        </div>
                      </div>
                      </div>

   </div>
             )}
        </InView>

                      </div>
       
                    
  );
};

export default PlayerPosts;


/**
 * import { Tweet } from 'react-tweet'
 * 
 * 
  <div className="container w3-padding-large">
<Tweet id="1852982550035112039" /> 
</div>
 */