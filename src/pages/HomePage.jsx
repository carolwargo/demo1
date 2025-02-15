import ClaySmall from "../assets/images/Profiles/ClaySmall.png";
import ClayCover3 from "../assets/images/Profiles/ClayCover3.png";
import PlayerProfile from "../components/Demo1/PlayerProfile";
import PlayerPerformance from "../components/Demo1/PlayerPerformance";
import PlayerCards from "../components/Demo1/PlayerCards";
import PlayerFooter from "../components/Demo1/PlayerFooter";
import MediaComponent from "../components/Demo1/MediaComponent";
import PlayerTestimonials from "../components/Demo1/PlayerTestimonials";
import { RiHome6Line } from "react-icons/ri";
import "../styles/demo.css";

const HomePage = () => {
  return (
    <div>
      <style>
        {`
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
`}
      </style>
      <div className="body w3-black" style={{ paddingTop: ".9rem" }}>
        {/* Icon Bar (Sidebar - hidden on small screens) */}
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-hide-medium w3-center">
          {/* Avatar image in top left corner */}
          <img src={ClaySmall} alt="pic" style={{ width: "100%" }} />
          <a
            href="/demo"
            className="w3-bar-item w3-button w3-padding-large w3-black"
          >
            <RiHome6Line className="" style={{ fontSize: "3rem" }} />
            <p>HOME</p>
          </a>
          <a
            href="#demo1-player-profile"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-user w3-xxlarge"></i>
            <p>PROFILE</p>
          </a>
          <a
            href="#demo1-player-performance"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className=" fa fa-chart-bar w3-xxlarge"></i>
            <p className="text-center">STATS</p>
          </a>
          <a
            href="#demo1-player-media"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-film w3-xxlarge"></i>
            <p>MEDIA</p>
          </a>
        </nav>
      </div>

      <div className="w3-black w3-center" style={{ paddingTop: "4rem" }}>
        {/* Page Content */}

        {/* Navbar for small & medium screens */}
        <div
          className=" w3-black w3-top w3-hide-large w3-padding-top-64 w3-center"
          id="myNavbar"
        >
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#" className="w3-bar-item w3-button w3-center">
              HOME
            </a>
            <a
              href="#demo1-player-profile"
              className="w3-bar-item w3-button w3-center"
            >
              PROFILE
            </a>
            <a
              href="#demo1-player-performance"
              className="w3-bar-item w3-button w3-center"
            >
              STATS
            </a>
            <a
              href="demo1-player-#media"
              className="w3-bar-item w3-button w3-center"
            >
              MEDIA
            </a>
          </div>
          <hr />
        </div>

        <div className="page-container" id="main">
          <div className=" w3-padding-large">
            <h1
              className="w3-jumbo w3-animate-left"
              style={{ marginTop: "4rem" }}
            >
              <span className="w3-hide-small">I&apos;m</span> Joe Baseball.
            </h1>
            <p>
              NCAA STUDENT-ATHLETE | 2024 HIGH SCHOOL BASEBALL | CATCHER RECRUIT
            </p>
            <img
              src={ClaySmall}
              alt="boy"
              className="w3-image w3-hide-large"
              width="1500"
              height="1108"
            />

            <img
              src={ClayCover3}
              alt="boy"
              className="w3-image w3-hide-small w3-hide-medium"
              width="1500"
              height="1108"
            />
            <div className="p-3">
              {/* Profile Section  */}
              <div className="demo1-player-profile" id="demo1-player-profile">
                <PlayerProfile />
              </div>

              {/* Performance Section     */}
              <div
                className="demo1-player-performance"
                id="demo1-player-performance"
              >
                <PlayerPerformance />
              </div>

              {/* testimonials*/}
              <div
                className="demo1-player-testimonial"
                id="demo1-player-testimonial"
              >
                Testimonial Section
                <PlayerTestimonials />
              </div>

              {/* Media Section */}
              <div className="demo1-media-component" id="demo1-media-component">
                <MediaComponent />
              </div>

              {/* Cards Contact Section*/}
              <div className="demo1-player-cards" id="demo1-player-cards">
                <PlayerCards />
              </div>

              {/* Footer */}
              <div
                className="demo1-player-downloads"
                id="demo1-player-downloads"
              >
                <PlayerFooter />
              </div>
            </div>
          </div>
          {/* END PAGE CONTENT */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
