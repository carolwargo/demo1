import {useState} from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { FaFileDownload} from "react-icons/fa";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import PlayerPerformance from "../../assets/PDF/Performance/Performance.pdf";
import Transcripts from "../../assets/PDF/Transcripts/Transcripts.pdf";
import Calendar from "../../assets/PDF/Schedules/Schedules.pdf";

const PlayerFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
<style>
  {`
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
  color: black;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

footer {
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
}

footer hr {
    border-top-color: #bbb;
    opacity: 0.5
}

footer hr.small {
    margin: 20px 0
}

footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 1.5px
}

footer a {
    color: #737373;
}

footer a:hover {
    color: #3366cc;
    text-decoration: none;
}

.footer-links {
    padding-left: 0;
    list-style: none
}

.footer-links li {
    display: block
}

.footer-links a {
    color: #737373
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
    color: #3366cc;
    text-decoration: none;
}

.footer-links.inline li {
    display: inline-block
}

footer .social-icons {
   margin-left: 5rem;
}

footer .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d
}

.copyright-text {
    margin: 0
}

@media (max-width:991px) {
    footer [class^=col-] {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    footer {
        padding-bottom: 0
    }

    footer .copyright-text,
    footer .social-icons {
        text-align: center
    }
}

.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.social-icons li {
    display: inline-block;
    margin-bottom: 4px
}



.social-icons a {
    background-color: gray;
    color: white;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 32px;
    height: 32px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
    color: #fff;
    background-color: #29aafe
}

.social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 16px
}

.social-icons a.facebook:hover {
    background-color: #3b5998
}

.social-icons a.twitter:hover {
    background-color: #323232
}

.social-icons a.globe:hover {
    background-color: green
}

.social-icons a.instagram:hover {
    background-color: #ea4c89
}

@media (max-width:767px) {
    .social-icons li.title {
        display: block;
        margin-right: 0;
        font-weight: 600
    }
`}
</style>


 
<div className="text-center w3-black">
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-48  
            ${inView ? "animate-fade-in" : ""}`} 
        id="player-footer">
<footer>
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 px-3">
        <h6>THANK YOU FOR VIEWING </h6>
        <p className="text-justify" style={{paddingRight:'2rem'}}>  Feedback is welcome - Feel free to reach out to me directly, and connect with me on social media.
       <br /> To communicate with a 3rd party when necessary, please contact <Link
                className="link-light opacity-60 small"
                style={{ cursor: "pointer"}}
                onClick={handleOpen}
              >
               COACH JOE DOE
              </Link>.</p>
      </div>



      <div className="col-xs-6 col-md-3">
        <h6>Contact Info</h6>
        <ul className="footer-links">
          <li> 
            <i className="fas fa-phone"></i> {""} <a href="tel:1234567890">
              <span>(123) 456-7890</span>
              </a>
              </li>
          <li> <i className="fas fa-envelope"></i> {""} <a href="mailto:mail@gmail.com">  <span>players-email@mail.com</span></a></li>
          <li> <i className="fas fa-globe"></i> {""} <a href="https://carolwargo.github.io/recruit-demos/demo1"> <span>joebaseball.com</span></a></li>
          <li> <i className="fas fa-location-pin"></i> {""} <a href="https://carolwargo.github.io/recruit-demos/demo1"> <span>123 Any St. Town, ST. 54321</span></a></li>
        </ul>
      </div>


      <div className="col-xs-6 col-md-3">
        <h6>Links & Loads</h6>
        <ul className="footer-links">
        <li> < FaFileDownload/> 
        <a 
                  id="download"
                  download
                 href={PlayerResume} >
        <span className="text-decoration-none"
         style={{marginLeft:'5px'}}>Resume</span>
              </a>
              </li>
              <li> < FaFileDownload/> 
        <a 
                  id="download"
                  download
                 href={PlayerPerformance} >
        <span className="text-decoration-none"
         style={{marginLeft:'5px'}}>Performance</span>
              </a>
              </li>
              <li> < FaFileDownload/> 
        <a 
                  id="download"
                  download
                 href={Transcripts} >
        <span className="text-decoration-none"
        style={{marginLeft:'5px'}}>Transcripts</span>
              </a>
              </li>
              <li> < FaFileDownload/> 
        <a 
                  id="download"
                  download
                 href={Calendar} >
        <span className="text-decoration-none"
        style={{marginLeft:'5px'}}>Schedules</span>
              </a>
              </li>
        </ul>
      </div>
  </div>
</div>

      <div className="container w3-padding-16 w3-margin-bottom">
      <div className="row d-flex justify-content-center align-items-center ">
  <div className="col-md-8 col-sm-6 col-xs-12 small">
  <h6>CONNECT WITH ME ON SOCIAL MEDIA: </h6>
 
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12 small text-align-right"> 

             <ul className="social-icons">
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>
        {/** 
         <Link to="https://twitter.com/" className=" mx-1 my-0"
            style={{ fontSize: "1.2rem" }}>
            <span className="icon-hover-zoom"> 
            <BsTwitterX /> </span></Link>
             <Link to="https://www.instagram.com/" className=" mx-1 my-0"
               style={{ fontSize: "1.3rem" }}>
               <span className="icon-hover-zoom">
              <FaSquareInstagram />
          </span> 
          </Link>
          <Link to="https://www.instagram.com/" className=" mx-1 my-0"
               style={{ fontSize: "1.3rem" }}>
               <span className="icon-hover-zoom">
               <FaSnapchatSquare />
          </span> 
          </Link>
          */} 
                          
      </div>
      </div>
  </div>

<div className="container w3-padding-top-48 w3-margin-top w3-margin-bottom">
  <p className="copyright-text text-center small">Copyright &copy; 2024 All Rights Reserved by
         {""} <Link to='/' className="link-light opacity-65">CONSCRIBE.COM</Link>.
        </p>
</div>
</footer>
          {/* End Contact Section */}
        </div>
          )}
    </InView>
    {showModal && (
  <div className="modal-overlay">
    <div className="modal-content bg-secondary-subtle">
      <button className="close-button" onClick={handleClose}>
        ×
      </button>
      <h2 className=" text-dark-emphasis fw-bold">Coach Joe Doe</h2>
      <h6 className=" text-dark-emphasis mb-0">Head Coach- Hilton High School</h6>
      <Link className=" text-dark-emphasis my-0">Email: joe.doe@example.com</Link>
      <Link className=" text-dark-emphasis mb-2">Phone: +1 (555) 123-4567</Link>
  <div>     <ul className="social-icons small">
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>
        </div>
    </div>
  </div>
)}

    </div>
    </div>
  );
};

export default PlayerFooter;