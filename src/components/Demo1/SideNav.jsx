import { Link } from "react-router-dom";
import ClaySmall from '../../assets/images/ClaySmall.png';


const SideNav = () => {

  return (
    <div className="body w3-black">
<div>
      <style>
        {`
  
        /*start ANIMATIONS*/
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}

.animate-slide-left {
  animation: slideLeft 2s ease-in-out;
}

/*end ANIMATIONS*/
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
.w3-sidebar {width: 120px;background: #222;}
#main {margin-left: 120px}
@media only screen and (max-width: 600px) 
{#main {margin-left: 0}}
 `}
      </style>

      {/* Icon Bar (Sidebar - hidden on small screens) */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* Avatar image in top left corner */}
        <img
          src={ClaySmall}
          alt="pic"
          style={{ width: "100%" }}
        />
        <Link
          to="/demo"
          className="w3-bar-item w3-button w3-padding-large w3-black"
        >
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </Link>
        <Link
          to="#profile"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>PROFILE</p>
        </Link>
        <Link
          to="#media"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>MEDIA</p>
        </Link>
        <Link
          to="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </Link>
      </nav>

      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className="w3-top w3-hide-large w3-hide-medium w3-padding-top-32 w3-margin-top w3-center" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link
            to="#"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            HOME
          </Link>
          <Link
            to="#profile"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            PROFILE
          </Link>
          <Link
            to="#media"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
           MEDIA
          </Link>
          <Link
            to="#contact"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            CONTACT
          </Link>
          <hr />
        </div>
    
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
  
    </div>
  );
};

export default SideNav;