import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const PlayerContact = () => {
  return (
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

      <div className="page-container">
        {/* Page Content */}

        {/* Contact Section */}

        <hr />

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="contact"
            >
              {/* Contact section */}
              <div
                className="w3-container w3-light-grey rounded w3-padding-32 w3-padding-large"
                id="contact"
              >
                <div className="w3-content" style={{ maxWidth: "600px" }}>
                  <h4 className="w3-center">
                    <b>Contact Me</b>
                  </h4>
                  <p className="w3-center">
                    Get in touch direct- message me on social media,{" "}
                    <Link>call</Link>, <Link>email</Link> or fill out the form
                    to send me a message through the site.
                  </p>
                  <form action="/action_page.php" target="_blank">
                    <div className="w3-section">
                      <label>Name</label>
                      <input
                        className="w3-input w3-border"
                        type="text"
                        name="Name"
                        required
                      />
                    </div>
                    <div className="w3-section">
                      <label>Email</label>
                      <input
                        className="w3-input w3-border"
                        type="text"
                        name="Email"
                        required
                      />
                    </div>
                    <div className="w3-section">
                      <label>Message</label>
                      <input
                        className="w3-input w3-border"
                        type="text"
                        name="Message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w3-button w3-block w3-black w3-margin-bottom"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* END PAGE CONTENT */}

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

export default PlayerContact;
