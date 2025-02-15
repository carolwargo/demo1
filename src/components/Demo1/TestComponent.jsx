import { Link } from "react-router-dom";
import ClaySmall from "../../assets/images/ClaySmall.png";
import { InView } from "react-intersection-observer";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Catch from "../../assets/images/Catch.png";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const myFunction = (id) => {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
};

const PlayerProfile = () => {
  return (
    <div>

<div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-4 col-lg-4 g-2 justify-content-center">
                <div className="rounded-1 shadow-1-strong">
         
           
    <div>
                      <img
                        src={Catch}
                        style={{ width: "100%" }}
                        alt="Avatar"
                        className=" rounded-circle"
                      />
                    </div>
    
       
              <div className="rounded-0 py-2 w3-theme-l3">
                <div className="w3-padding-small" style={{marginLeft:'7px'}}>
              <h6 className="fw-bold text-light-emphasis mt-1">DOWNLOAD LINKS</h6>
         </div>
                  <button
                    onClick={() => myFunction("Demo1")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Schedule     
                  </button>

                  <div id="Demo1" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2022 Summer</Link>
                      </li>
                      <li>
                        <Link>2022 Fall</Link>
                      </li>
                      <li>
                        <Link>2023 Spring</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo2")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                    <i className="fa fa-book fa-fw w3-margin-right"></i>
                    Unofficial Transcripts
                  </button>
                  <div id="Demo2" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2020 Freshman</Link>
                      </li>
                      <li>
                        <Link>2021 Sophomore</Link>
                      </li>
                      <li>
                        <Link>2022 Junior</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo3")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                    <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                    References
                  </button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>Coach Joe</Link>
                      </li>
                      <li>
                        <Link>Coach Jack</Link>
                      </li>
                      <li>
                        <Link>Principal Jock</Link>
                      </li>
                      <li>
                        <Link>Teacher Jane</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            </div>
            </div>



      {/* Overview PROFILE Section */}
      <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
               ${inView ? "animate-fade-in" : ""}`}
              id="overview"
            >
                   <div className="card w3-theme-l3">
                    <div className="w3-container">

  
  <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-4 col-lg-4 g-2 justify-content-center">
                <div className="rounded-1 shadow-1-strong">
         
           
    <div>
                      <img
                        src={Catch}
                        style={{ width: "100%" }}
                        alt="Avatar"
                        className=" rounded-b "
                      />
                    </div>
    
       
              <div className="rounded-0 py-2 w3-theme-l3">
                <div className="w3-padding-small" style={{marginLeft:'7px'}}>
              <h6 className="fw-bold text-light-emphasis mt-1">DOWNLOAD LINKS</h6>
         </div>
                  <button
                    onClick={() => myFunction("Demo1")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Schedule     
                  </button>

                  <div id="Demo1" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2022 Summer</Link>
                      </li>
                      <li>
                        <Link>2022 Fall</Link>
                      </li>
                      <li>
                        <Link>2023 Spring</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo2")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                    <i className="fa fa-book fa-fw w3-margin-right"></i>
                    Unofficial Transcripts
                  </button>
                  <div id="Demo2" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2020 Freshman</Link>
                      </li>
                      <li>
                        <Link>2021 Sophomore</Link>
                      </li>
                      <li>
                        <Link>2022 Junior</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo3")}
                    className="w3-button w3-block w3-theme-l3 w3-left-align"
                  >
                    <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                    References
                  </button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>Coach Joe</Link>
                      </li>
                      <li>
                        <Link>Coach Jack</Link>
                      </li>
                      <li>
                        <Link>Principal Jock</Link>
                      </li>
                      <li>
                        <Link>Teacher Jane</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            </div>

              <div className="col-sm-12 col-md-8 col-lg-8 g-2 justify-content-center">
                <div className=" rounded-1 shadow-1-strong mb-1">
                <div className="w3-text-white container-fluid  py-2">
            <h5 className="fw-bold mt-3 w3-margin-left">PLAYER PROFILE</h5>
            </div>

            <div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="py-2 px-2 w3-margin-left w3-margin-top">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-top">
                <div className="py-2 px-2 w3-margin-left">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>
            </div>
               </div> 
                </div>

                <div className="mb-1">
                <div className="container-fluid  py-2">
            <h5 className="fw-bold mt-3 w3-margin-left">PLAYER CONTACT</h5>
            </div>

            <div className="">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="py-2 px-2 w3-margin-left w3-margin-top">
                  <p>
                    <FaPhoneVolume 
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
               <a href="tel:+1234567890" className=" link-body-emphasis">
  +(123) 456-7890
</a>

                  </p>
                  <p>
                    <MdOutlineEmail
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    <a href="mailto:example@email.com" className=" link-body-emphasis">
  example@email.com
</a>
                  </p>
                  
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    1234 Your St. <br />
                    <span style={{marginLeft:'40px'}}>Yourtown, ST. 12345</span>
                  </p>
              
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-top">
                <div className="py-2 px-2 w3-margin-left">
                    <p>Connect on Social Media:</p>
<div className="mb-2 py-0">
                    <BsTwitterX
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    @yourhandle
                  </div>
                  <div className="mb-2 py-0">
                    <FaSquareInstagram
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    @player
                  </div>
                  <div className="mb-2 py-0">
                    <FaSnapchatSquare
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                   @snapchat
                  </div>
                  </div>
                </div>
            </div>
               </div> 
                </div> 

                </div>
            </div>














            <div className="row w3-margin-top d-flex justify-content-center">
       
 {/* Middle Column */}
 <div className="col-sm-12 col-md-4 col-lg-4">
           {/* Profile */}
           <div className="w3-card w3-round w3-white">
             <div className="w3-container">
               <div className="w3-margin-top">
                 <h4 className="">JOE BASEBALL</h4>
               </div>
               <hr />
               <p>
                 <RiHome6Line
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 Catcher
               </p>
               <p>
                 <HiAcademicCap
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 2024
               </p>
               <p>
                 <GrScorecard
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 SAT-9000 | GPA- 5.0
               </p>
               <p>
                 <MdLocationPin
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 New York, NY.
               </p>
             </div>
          
     
           {/* Accordion */}
       
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                     <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
              Schedule     
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>
             </div>
        
        
             <div className="w3-container w3-light-gray">
               <h6 className="w3-margin-top">CONTACT</h6>

               <div className="w3-block border-gray-300 ">
               <p className=" p-2 ">
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "15px" }}
                 >
                   Cell:{" "}
                   <Link
                     style={{ fontSize: "14px", textDecoration: "none" }}
                   >
                     444-123-1234
                   </Link>{" "}
                 </span>{" "}
                 <br />
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "15px" }}
                 >
                   Email:{" "}
                   <Link
                     style={{ fontSize: "14px", textDecoration: "none" }}
                   >
                     email@gmail.com
                   </Link>{" "}
                 </span>
                 <br />
                 <span className="w3-opacity">
                   Address: 
                   <br/>
                 
                     123 Your St. Htown, MD. 20639
                 
                 </span>
                 <br />
               </p>
               </div>
             </div>
         
             <div className="w3-container px-3 py-2">
               <h6 className="w3-margin-top">MESSAGE ME</h6>
               <p className="w3-opacity" style={{ fontSize: "12px" }}>
                 Click Message button to contact me through the website-
               </p>
               <p>
                 <button className="w3-button w3-block w3-theme-l4">
                   Message
                 </button>
               </p>
             </div>




       <div className="w3-container">
               <div className="w3-margin-bottom">
                 <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                 <Link
                   className="text-decoration-none link-body-emphasis w3-opacity text-black"
                   style={{ fontSize: "2.2rem" }}
                 >
                   <strong>
                     <BsTwitterX className="" />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-text-pink w3-hover"
                   style={{ fontSize: "2.35rem" }}
                 >
                   <strong>
                     <FaSquareInstagram />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-hover w3-text-purple"
                   style={{ fontSize: "2.4rem" }}
                 >
                   <strong>
                     <FaSnapchatSquare />
                   </strong>
                 </Link>
               </div>
             </div>
      
              
           {/* Interests */}
           <div className="w3-container">
               <p>Interests</p>

               <p>
                 <span className="w3-tag w3-small w3-theme-d7">
                   NCAA Baseball
                 </span>
                 <span className="w3-tag w3-small w3-theme-d6">
                   Student-athlete
                 </span>
                 <span className="w3-tag w3-small w3-theme-d5">Catcher</span>
                 <span className="w3-tag w3-small w3-theme-d4">
                   2024 Recruit
                 </span>
                 <span className="w3-tag w3-small w3-theme-d3">
                   Dirtbags
                 </span>
                 <span className="w3-tag w3-small w3-theme-d2">PBR</span>
                 <span className="w3-tag w3-small w3-theme-d1">
                   Perfect Game
                 </span>
                 <span className="w3-tag w3-small w3-theme-l1">Top ten</span>
                 <span className="w3-tag w3-small w3-theme-l2">Honors</span>
                 <span className="w3-tag w3-small w3-theme-l3">ESPN+</span>
                 <span className="w3-tag w3-small w3-theme-l4">
                   Evoshield
                 </span>
               </p>
             </div>
           </div>
           <br />

         </div>



              <div className="col-sm-12 col-md-4 col-lg-4 g-2 justify-content-center">
                <div className="border border-black rounded-1 shadow-1-strong mb-1">
                <div className="w3-black container-fluid border border-black py-2">
            <h6 className="fw-bold mt-3 w3-margin-left">JOE BASEBALL</h6>
            </div>
                  <div className="w3-light-gray border border-black  py-2 px-2">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>

                <div className="border border-black rounded-1 shadow-1-strong mb-1">
                <div className="w3-black container-fluid border border-black py-2">
            <h6 className="fw-bold mt-3 w3-margin-left">JOE BASEBALL</h6>
            </div>
                  <div className="w3-light-gray border border-black  py-2 px-2">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 g-2 justify-content-center">
                <div className="border border-black rounded-1 shadow-1-strong mb-1">
                <div className="w3-black container-fluid border border-black py-2">
            <h6 className="fw-bold mt-3 w3-margin-left">JOE BASEBALL</h6>
            </div>
                  <div className="w3-light-gray border border-black  py-2 px-2">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>
              
                <div className="border border-black rounded-1 shadow-1-strong mb-1">
                <div className="w3-black container-fluid border border-black py-2">
            <h6 className="fw-bold mt-3 w3-margin-left">JOE BASEBALL</h6>
            </div>
                  <div className="w3-light-gray border border-black  py-2 px-2">
                  <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.2rem" }}
                    />
                    New York, NY.
                  </p>
                  </div>
                </div>
                </div>
            </div>


            </div>








            </div>
        














      {/**START 2ND row */}

            <div className="row d-flex  justify-content-around align-items-center">
         
         {/* Left Column */}
         <div className="col-sm-12 col-md-4 col-lg-4">
 
           <div className="w3-card w3-round w3-white">
             <div className="w3-container ">
             <img
               src={ClaySmall}
               alt="ClaySmall"
               className="shadow w3-margin-top"
               style={{ width: "100%" }}
             />
               <h6 className="w3-margin-top">CONTACT</h6>

               <div className="w3-block w3-theme-l4 border-gray-300 ">
               <p className=" p-2 ">
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Cell:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     444-123-1234
                   </Link>{" "}
                 </span>{" "}
                 <br />
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Email:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     email@gmail.com
                   </Link>{" "}
                 </span>
                 <br />
                 <span className="w3-opacity" style={{ fontSize: "13px" }}>
                   Address: 
                 
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     123 Your St. Htown, MD. 20639
                   </Link>{" "}
                 </span>{" "}
                 <br />
               </p>
               </div>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white">
             <div className="w3-container px-3 py-2">
               <h6 className="w3-margin-top">MESSAGE ME</h6>
               <p className="w3-opacity" style={{ fontSize: "12px" }}>
                 Click Message button to contact me through the website-
               </p>
               <p>
                 <button className="w3-button w3-block w3-theme-l4">
                   Message
                 </button>
               </p>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white w3-center">
             <div className="w3-container">
               <div className="w3-margin-bottom">
                 <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                 <Link
                   className="text-decoration-none link-body-emphasis w3-opacity text-black"
                   style={{ fontSize: "2.2rem" }}
                 >
                   <strong>
                     <BsTwitterX className="" />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-text-pink w3-hover"
                   style={{ fontSize: "2.35rem" }}
                 >
                   <strong>
                     <FaSquareInstagram />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-hover w3-text-purple"
                   style={{ fontSize: "2.4rem" }}
                 >
                   <strong>
                     <FaSnapchatSquare />
                   </strong>
                 </Link>
               </div>
             </div>
           </div>
           <br />
                 {/*Teams Accordion 
                 <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                 <GrSchedules className="fa-fw w3-margin-right" />
                 Schedule <LiaDownloadSolid/>
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-users fa-fw w3-margin-right"></i>
                 Articles
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={Web}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Video}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Market}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
*/}
           {/* Interests */}
           <div className="w3-card w3-round w3-white w3-hide-small">
             <div className="w3-container">
               <p>Interests</p>

               <p>
                 <span className="w3-tag w3-small w3-theme-d7">
                   NCAA Baseball
                 </span>
                 <span className="w3-tag w3-small w3-theme-d6">
                   Student-athlete
                 </span>
                 <span className="w3-tag w3-small w3-theme-d5">Catcher</span>
                 <span className="w3-tag w3-small w3-theme-d4">
                   2024 Recruit
                 </span>
                 <span className="w3-tag w3-small w3-theme-d3">
                   Dirtbags
                 </span>
                 <span className="w3-tag w3-small w3-theme-d2">PBR</span>
                 <span className="w3-tag w3-small w3-theme-d1">
                   Perfect Game
                 </span>
                 <span className="w3-tag w3-small w3-theme-l1">Top ten</span>
                 <span className="w3-tag w3-small w3-theme-l2">Honors</span>
                 <span className="w3-tag w3-small w3-theme-l3">ESPN+</span>
                 <span className="w3-tag w3-small w3-theme-l4">
                   Evoshield
                 </span>
               </p>
             </div>
           </div>
           <br />

         </div>




 {/* Middle Column */}
 <div className="col-sm-12 col-md-4 col-lg-4">
           {/* Profile */}
           <div className="w3-card w3-round w3-white">
             <div className="w3-container">
               <div className="w3-margin-top">
                 <p className="w3-center">
                   <img
                     src={ClaySmall}
                     style={{ width: "100%" }}
                     alt="Avatar"
                   />
                 </p>
                 <h4 className="">JOE BASEBALL</h4>
               </div>
               <hr />
               <p>
                 <RiHome6Line
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 Catcher
               </p>
               <p>
                 <HiAcademicCap
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 2024
               </p>
               <p>
                 <GrScorecard
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 SAT-9000 | GPA- 5.0
               </p>
               <p>
                 <MdLocationPin
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 New York, NY.
               </p>
             </div>
           </div>
           <br />

           {/* Accordion */}
           <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                     <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
              Schedule     
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-video fa-fw w3-margin-right"></i>
                 Skills Videos
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
PG
           <div className="w3-card w3-round w3-white">
             <div className="w3-container ">
             <img
               src={ClaySmall}
               alt="ClaySmall"
               className="shadow w3-margin-top"
               style={{ width: "100%" }}
             />
               <h6 className="w3-margin-top">CONTACT</h6>

               <div className="w3-block w3-theme-l4 border-gray-300 ">
               <p className=" p-2 ">
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Cell:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     444-123-1234
                   </Link>{" "}
                 </span>{" "}
                 <br />
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Email:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     email@gmail.com
                   </Link>{" "}
                 </span>
                 <br />
                 <span className="w3-opacity" style={{ fontSize: "13px" }}>
                   Address: 
                 
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     123 Your St. Htown, MD. 20639
                   </Link>{" "}
                 </span>{" "}
                 <br />
               </p>
               </div>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white">
             <div className="w3-container px-3 py-2">
               <h6 className="w3-margin-top">MESSAGE ME</h6>
               <p className="w3-opacity" style={{ fontSize: "12px" }}>
                 Click Message button to contact me through the website-
               </p>
               <p>
                 <button className="w3-button w3-block w3-theme-l4">
                   Message
                 </button>
               </p>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white w3-center">
             <div className="w3-container">
               <div className="w3-margin-bottom">
                 <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                 <Link
                   className="text-decoration-none link-body-emphasis w3-opacity text-black"
                   style={{ fontSize: "2.2rem" }}
                 >
                   <strong>
                     <BsTwitterX className="" />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-text-pink w3-hover"
                   style={{ fontSize: "2.35rem" }}
                 >
                   <strong>
                     <FaSquareInstagram />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-hover w3-text-purple"
                   style={{ fontSize: "2.4rem" }}
                 >
                   <strong>
                     <FaSnapchatSquare />
                   </strong>
                 </Link>
               </div>
             </div>
           </div>
           <br />
                 {/*Teams Accordion 
                 <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                 <GrSchedules className="fa-fw w3-margin-right" />
                 Schedule <LiaDownloadSolid/>
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-users fa-fw w3-margin-right"></i>
                 Articles
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={Web}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Video}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Market}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
*/}
           {/* Interests */}
           <div className="w3-card w3-round w3-white w3-hide-small">
             <div className="w3-container">
               <p>Interests</p>

               <p>
                 <span className="w3-tag w3-small w3-theme-d7">
                   NCAA Baseball
                 </span>
                 <span className="w3-tag w3-small w3-theme-d6">
                   Student-athlete
                 </span>
                 <span className="w3-tag w3-small w3-theme-d5">Catcher</span>
                 <span className="w3-tag w3-small w3-theme-d4">
                   2024 Recruit
                 </span>
                 <span className="w3-tag w3-small w3-theme-d3">
                   Dirtbags
                 </span>
                 <span className="w3-tag w3-small w3-theme-d2">PBR</span>
                 <span className="w3-tag w3-small w3-theme-d1">
                   Perfect Game
                 </span>
                 <span className="w3-tag w3-small w3-theme-l1">Top ten</span>
                 <span className="w3-tag w3-small w3-theme-l2">Honors</span>
                 <span className="w3-tag w3-small w3-theme-l3">ESPN+</span>
                 <span className="w3-tag w3-small w3-theme-l4">
                   Evoshield
                 </span>
               </p>
             </div>
           </div>
           <br />

         </div>








 {/* Right Column */}
 <div className="col-sm-12 col-md-4 col-lg-4">
           {/* Profile */}
           <div className="w3-card w3-round w3-white">
             <div className="w3-container">
               <div className="w3-margin-top">
                 <p className="w3-center">
                   <img
                     src={ClaySmall}
                     style={{ width: "100%" }}
                     alt="Avatar"
                   />
                 </p>
                 <h4 className="">JOE BASEBALL</h4>
               </div>
               <hr />
               <p>
                 <RiHome6Line
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 Catcher
               </p>
               <p>
                 <HiAcademicCap
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 2024
               </p>
               <p>
                 <GrScorecard
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 SAT-9000 | GPA- 5.0
               </p>
               <p>
                 <MdLocationPin
                   className="fa-fw w3-margin-right w3-text-theme"
                   style={{ fontSize: "1.2rem" }}
                 />
                 New York, NY.
               </p>
             </div>
           </div>
           <br />

           {/* Accordion */}
           <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                     <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
              Schedule     
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-video fa-fw w3-margin-right"></i>
                 Skills Videos
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
PG
           <div className="w3-card w3-round w3-white">
             <div className="w3-container ">
             <img
               src={ClaySmall}
               alt="ClaySmall"
               className="shadow w3-margin-top"
               style={{ width: "100%" }}
             />
               <h6 className="w3-margin-top">CONTACT</h6>

               <div className="w3-block w3-theme-l4 border-gray-300 ">
               <p className=" p-2 ">
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Cell:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     444-123-1234
                   </Link>{" "}
                 </span>{" "}
                 <br />
                 <span
                   className="w3-opacity py-1"
                   style={{ fontSize: "13px" }}
                 >
                   Email:{" "}
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     email@gmail.com
                   </Link>{" "}
                 </span>
                 <br />
                 <span className="w3-opacity" style={{ fontSize: "13px" }}>
                   Address: 
                 
                   <Link
                     style={{ fontSize: "12px", textDecoration: "none" }}
                   >
                     123 Your St. Htown, MD. 20639
                   </Link>{" "}
                 </span>{" "}
                 <br />
               </p>
               </div>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white">
             <div className="w3-container px-3 py-2">
               <h6 className="w3-margin-top">MESSAGE ME</h6>
               <p className="w3-opacity" style={{ fontSize: "12px" }}>
                 Click Message button to contact me through the website-
               </p>
               <p>
                 <button className="w3-button w3-block w3-theme-l4">
                   Message
                 </button>
               </p>
             </div>
           </div>
           <br />

           <div className="w3-card w3-round w3-white w3-center">
             <div className="w3-container">
               <div className="w3-margin-bottom">
                 <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                 <Link
                   className="text-decoration-none link-body-emphasis w3-opacity text-black"
                   style={{ fontSize: "2.2rem" }}
                 >
                   <strong>
                     <BsTwitterX className="" />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-text-pink w3-hover"
                   style={{ fontSize: "2.35rem" }}
                 >
                   <strong>
                     <FaSquareInstagram />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-hover w3-text-purple"
                   style={{ fontSize: "2.4rem" }}
                 >
                   <strong>
                     <FaSnapchatSquare />
                   </strong>
                 </Link>
               </div>
             </div>
           </div>
           <br />
                 {/*Teams Accordion 
                 <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                 <GrSchedules className="fa-fw w3-margin-right" />
                 Schedule <LiaDownloadSolid/>
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-users fa-fw w3-margin-right"></i>
                 Articles
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={Web}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Video}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Market}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
*/}
           {/* Interests */}
           <div className="w3-card w3-round w3-white w3-hide-small">
             <div className="w3-container">
               <p>Interests</p>

               <p>
                 <span className="w3-tag w3-small w3-theme-d7">
                   NCAA Baseball
                 </span>
                 <span className="w3-tag w3-small w3-theme-d6">
                   Student-athlete
                 </span>
                 <span className="w3-tag w3-small w3-theme-d5">Catcher</span>
                 <span className="w3-tag w3-small w3-theme-d4">
                   2024 Recruit
                 </span>
                 <span className="w3-tag w3-small w3-theme-d3">
                   Dirtbags
                 </span>
                 <span className="w3-tag w3-small w3-theme-d2">PBR</span>
                 <span className="w3-tag w3-small w3-theme-d1">
                   Perfect Game
                 </span>
                 <span className="w3-tag w3-small w3-theme-l1">Top ten</span>
                 <span className="w3-tag w3-small w3-theme-l2">Honors</span>
                 <span className="w3-tag w3-small w3-theme-l3">ESPN+</span>
                 <span className="w3-tag w3-small w3-theme-l4">
                   Evoshield
                 </span>
               </p>
             </div>
           </div>
           <br />

         </div>


         </div>





                </div>
          
          )}
        </InView>
      </div>
      <script>
        {`
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
  `}
      </script>
    </div>
  );
};

export default PlayerProfile;




/*


                <div className="row d-flex w3-padding-16 justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                    <div>
                      <div className="container">
                        <div>
                          <p className="w3-center">
                            <img
                              src={ClaySmall}
                              style={{ width: "100%" }}
                              alt="Avatar"
                            />
                          </p>
                        </div>
                        <div className="w3-card w3-white">
                          <button
                            onClick={() => myFunction("Demo1")}
                            className="w3-button w3-block w3-white w3-left-align mt-2"
                          >
                            <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                            Schedule
                          </button>

                          <div id="Demo1" className="w3-hide w3-container">
                            <ul className="text-decoration-none mt-2">
                              <li>
                                <Link>2022 Summer</Link>
                              </li>
                              <li>
                                <Link>2022 Fall</Link>
                              </li>
                              <li>
                                <Link>2023 Spring</Link>
                              </li>
                            </ul>
                          </div>

                          <button
                            onClick={() => myFunction("Demo2")}
                            className="w3-button w3-block w3-white w3-left-align"
                          >
                            <i className="fa fa-book fa-fw w3-margin-right"></i>
                            Unofficial Transcripts
                          </button>
                          <div id="Demo2" className="w3-hide w3-container">
                            <ul className="text-decoration-none mt-2">
                              <li>
                                <Link>2020 Freshman</Link>
                              </li>
                              <li>
                                <Link>2021 Sophomore</Link>
                              </li>
                              <li>
                                <Link>2022 Junior</Link>
                              </li>
                            </ul>
                          </div>

                          <button
                            onClick={() => myFunction("Demo3")}
                            className="w3-button w3-block w3-white w3-left-align"
                          >
                            <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                            References
                          </button>
                          <div id="Demo3" className="w3-hide w3-container">
                            <ul className="text-decoration-none mt-2">
                              <li>
                                <Link>Coach Joe</Link>
                              </li>
                              <li>
                                <Link>Coach Jack</Link>
                              </li>
                              <li>
                                <Link>Principal Jock</Link>
                              </li>
                              <li>
                                <Link>Teacher Jane</Link>
                              </li>
                            </ul>
                          </div>

                          <button
                            onClick={() => myFunction("Demo4")}
                            className="w3-button w3-block w3-white w3-left-align"
                          >
                            <i className="fa fa-video fa-fw w3-margin-right mb-3"></i>
                            Skills Videos
                          </button>
                          <div id="Demo4" className="w3-hide w3-container">
                            <div className="w3-row-padding">
                              <br />
                              <div className="w3-half">
                                <img
                                  src={ClaySmall}
                                  style={{ width: "100%" }}
                                  alt="pic"
                                  className="w3-margin-bottom"
                                />
                              </div>
                              <div className="w3-half">
                                <img
                                  src={ClaySmall}
                                  style={{ width: "100%" }}
                                  alt="pic"
                                  className="w3-margin-bottom"
                                />
                              </div>
                              <div className="w3-half">
                                <img
                                  src={ClaySmall}
                                  style={{ width: "100%" }}
                                  alt="pic"
                                  className="w3-margin-bottom"
                                />
                              </div>
                              <div className="w3-half">
                                <img
                                  src={ClaySmall}
                                  style={{ width: "100%" }}
                                  alt="pic"
                                  className="w3-margin-bottom"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
                    <div className="card-body w3-padding">
                      <div className="card-header">
                        <h5 className="fw-bold mt-2">Player Profile</h5>
                        <hr />
                      </div>

                      <div className="row">
                        <div className="w3-padding pt-1 pb-3 d-flex justify-content-center align-items-center">
                          <div className="col-sm-12 col-md-6 col-lg-6 mt-1">
                            <p
                              className="mt-0 py-0 text-dark-emphasis"
                              style={{ marginBottom: "5px" }}
                            >
                              <span
                                className="fa-fw"
                                style={{ marginRight: "5px" }}
                              >
                                <b style={{ fontSize: "1.2rem" }}>
                                  <RiHome6Line />
                                </b>{" "}
                              </span>{" "}
                              <span className="text-dark-emphasis">
                                {" "}
                                CATCHER
                              </span>
                              <br />
                            </p>

                            <p
                              className="mt-0 py-0 text-dark-emphasis"
                              style={{ marginBottom: "4px" }}
                            >
                              <span
                                className="fa-fw"
                                style={{ marginRight: "5px" }}
                              >
                                <b style={{ fontSize: "1.2rem" }}>
                                  {" "}
                                  <HiAcademicCap />
                                </b>
                              </span>{" "}
                              <span className="text-dark-emphasis"> 2024</span>
                              <br />
                            </p>

                            <p
                              className="mt-0 py-0 text-dark-emphasis"
                              style={{ marginBottom: "4px" }}
                            >
                              <span
                                className="fa-fw"
                                style={{ marginRight: "5px" }}
                              >
                                <b style={{ fontSize: "1.2rem" }}>
                                  {" "}
                                  <GrScorecard />
                                </b>
                              </span>{" "}
                              <span className="text-dark-emphasis">
                                {" "}
                                SAT-9000 | GPA- 5.0
                              </span>
                              <br />
                            </p>

                            <p
                              className="mt-0 py-0 text-dark-emphasis"
                              style={{ marginBottom: "4px" }}
                            >
                              <span
                                className="fa-fw text-dark-emphasis"
                                style={{ marginRight: "5px" }}
                              >
                                <b style={{ fontSize: "1.2rem" }}>
                                  <FaPhoneVolume />
                                </b>{" "}
                              </span>{" "}
                              <Link className="text-dark-emphasis">
                                (123) 456-7890
                              </Link>
                              <br />
                            </p>

                            <p
                              className="mt-0 py-0 text-dark-emphasis"
                              style={{ marginBottom: "4px" }}
                            >
                              <span
                                className="fa-fw text-dark-emphasis"
                                style={{ marginRight: "5px" }}
                              >
                                <b style={{ fontSize: "1.2rem" }}>
                                  <MdOutlineEmail />{" "}
                                </b>
                              </span>{" "}
                              <Link className="text-dark-emphasis">
                                EMAIL@MAIL.COM
                              </Link>
                              <br />
                            </p>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6 mt-1">
                            <p
                              className="text-dark-emphasis"
                              style={{ display: "flex", flexWrap: "wrap" }}
                            >
                              <span className="pb-1">
                                {" "}
                                <b>HT:</b> 6'0"{" "}
                                <b className=" w3-margin-left"> WT:</b> 225LBS{" "}
                              </span>
                              <span className="py-1">
                                <b>BATS:</b> R/L{" "}
                                <b className=" w3-margin-left">THROWS:</b> R{" "}
                              </span>
                              <span className="py-1">
                                <b>BORN:</b> 11/1/01, MD.{" "}
                              </span>
                            </p>

                            <button className="w3-button w3-black btn-sm">
                              <i className="fa fa-download"></i> Download
                              StatsBW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="container">
                          <div className="text-center py-4 mt-3">
                            <h6 className="">FOLLOW ME ON SOCIAL MEDIA:</h6>
                            <Link
                              className=" text-decoration-none link-body-emphasis w3-opacity text-black"
                              style={{ fontSize: "1.7rem" }}
                            >
                              <strong>
                                <BsTwitterX className="" />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none w3-opacity w3-text-black w3-hover"
                              style={{ fontSize: "1.9rem" }}
                            >
                              <strong>
                                <FaSquareInstagram />
                              </strong>{" "}
                            </Link>
                            <Link
                              className="text-decoration-none w3-hover w3-text-black"
                              style={{ fontSize: "1.9rem" }}
                            >
                              <strong>
                                <FaSnapchatSquare />
                              </strong>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="container">
                          <div className="text-center pb-5">
                            <hr className=" w3-padding-16" />
                            <h6 className="">MESSAGE ME</h6>
                            <p
                              className="w3-opacity"
                              style={{ fontSize: "15px" }}
                            >
                              Click Message button to contact me through the
                              website-
                            </p>

                            <button className="w3-button w3-block w3-theme-l4">
                              Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              
 */




               /*Teams Accordion 
                 <div className="w3-card w3-round">
             <div className="w3-white">
               <button
                 onClick={() => myFunction("Demo1")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
               >
                 <GrSchedules className="fa-fw w3-margin-right" />
                 Schedule <LiaDownloadSolid/>
               </button>

               <div id="Demo1" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2022 Summer</Link>
                   </li>
                   <li>
                     <Link>2022 Fall</Link>
                   </li>
                   <li>
                     <Link>2023 Spring</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo2")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
               <div id="Demo2" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>2020 Freshman</Link>
                   </li>
                   <li>
                     <Link>2021 Sophomore</Link>
                   </li>
                   <li>
                     <Link>2022 Junior</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 References
               </button>
               <div id="Demo3" className="w3-hide w3-container">
                 <ul className="text-decoration-none mt-2">
                   <li>
                     <Link>Coach Joe</Link>
                   </li>
                   <li>
                     <Link>Coach Jack</Link>
                   </li>
                   <li>
                     <Link>Principal Jock</Link>
                   </li>
                   <li>
                     <Link>Teacher Jane</Link>
                   </li>
                 </ul>
               </div>

               <button
                 onClick={() => myFunction("Demo4")}
                 className="w3-button w3-block w3-theme-l1 w3-left-align"
               >
                 <i className="fa fa-users fa-fw w3-margin-right"></i>
                 Articles
               </button>
               <div id="Demo4" className="w3-hide w3-container">
                 <div className="w3-row-padding">
                   <br />
                   <div className="w3-half">
                     <img
                       src={Web}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={ClaySmall}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Video}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                   <div className="w3-half">
                     <img
                       src={Market}
                       style={{ width: "100%" }}
                       alt="pic"
                       className="w3-margin-bottom"
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <br />
*/