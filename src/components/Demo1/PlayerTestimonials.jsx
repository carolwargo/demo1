import { useState } from "react";
import { InView } from "react-intersection-observer";
import Teacher from "../../assets/images/Testiminals/Teacher.png";
import Principal from "../../assets/images/Testiminals/Principal.png";
import Virginia from "../../assets/images/Testiminals/Virginia.png";
import Wake from "../../assets/images/Testiminals/Wake.png";
import Letter1 from "../../assets/images/Letters/Letter1.png";
import Letter2 from "../../assets/images/Letters/Letter2.png";
import Letter3 from "../../assets/images/Letters/Letter3.png";
import Letter4 from "../../assets/images/Letters/Letter4.png";
import "../../styles/demo.css";

const Letters = [
  {
    id: 1,
    image: Letter1,
    name: "JANE DOE",
    phone: "(555) 555-5555",
    email: "mail@gmail.com",
  },
  {
    id: 2,
    image: Letter2,
    name: "JANE DOUGH",
    phone: "(555) 555-5555",
    email: "mail@gmail.com",
  },
  {
    id: 3,
    image: Letter3,
    name: "JAX DOUGH",
    phone: "(555) 555-5555",
    email: "mail@gmail.com",
  },
  {
    id: 4,
    image: Letter4,
    name: "JOE COACH",
    phone: "(555) 555-5555",
    email: "mail@gmail.com",
  },
];

const PlayerTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div>
      <style>
        {`
        .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-content {
  width: 80%;
  max-width: 600px;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.scrollable-modal {
  max-height: 80vh; /* Ensure modal has a height limit */
  overflow-y: auto; /* Enable scrolling when content overflows */
}

`}
      </style>
      {/* Testimonial Sections */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-content w3-justify w3-text-grey w3-padding-top-24 
            ${inView ? "animate-fade-in" : ""}`}
            id="testimonials"
          >
            <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
            <h1 className="w3-text-light-grey w3-margin-bottom">Reputation</h1>
            <div className="row w3-padding-16">
              {/**Letter1 */}
              <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
                <div className="container">
                  <img
                    src={Teacher}
                    alt="teacher"
                    className="w3-left w3-circle w3-margin-right w3-grayscale-max w3-image"
                    style={{ width: "80px" }}
                  />
                  <p className="w3-large w3-margin-right fw-bold">
                    {" "}
                    JANE DOE.
                    <br />
                    <i className=" small">Teacher- HHS</i>.
                    <br />
                    <i className=" small  fw-light">
                      &quot;Joe Baseball is the best. Lorem adipisicing elit.
                      Voluptate quibusdam totam pariatur accusamus, quam velit
                      at aliquam, porro tempore fuga neque similique.
                      Necessitatibus, iusto
                      <span
                        className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
                        onClick={() => {
                          setSelectedLetter(
                            Letters.find((letter) => letter.id === 3)
                          ); // Select Letter4 (update as needed)
                          setIsModalOpen(true);
                        }}
                        style={{
                          cursor: "pointer",
                          color: "#007bff",
                          textDecoration: "underline",
                        }}
                      >
                        See Full Letter
                      </span>
                    </i>
                  </p>
                </div>
              </div>
              {/**Letter2 */}
              <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
                <div className="container">
                  <img
                    src={Principal}
                    alt="principal"
                    className="w3-left w3-circle w3-margin-right w3-grayscale-max"
                    style={{ width: "80px" }}
                  />

                  <p className="w3-large w3-margin-right fw-bold">
                    {" "}
                    JOHN DOUGH.
                    <br />
                    <i className=" small">Principal- HHS</i>.
                    <br />
                    <i className=" small  fw-light">
                      &quot;Joe Baseball is the best. Lorem adipisicing elit.
                      Voluptate quibusdam totam pariatur accusamus, quam velit
                      at aliquam, porro tempore fuga neque similique.
                      Necessitatibus, iusto
                      <span
                        className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
                        onClick={() => {
                          setSelectedLetter(
                            Letters.find((letter) => letter.id === 4)
                          ); // Select Letter4 (update as needed)
                          setIsModalOpen(true);
                        }}
                        style={{
                          cursor: "pointer",
                          color: "#007bff",
                          textDecoration: "underline",
                        }}
                      >
                        See Full Letter
                      </span>
                    </i>
                  </p>
                </div>
              </div>
              {/**Letter3 */}
              <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
                <div className="container">
                  <img
                    src={Virginia}
                    alt="va coach"
                    className="w3-left w3-circle w3-margin-right w3-grayscale-max"
                    style={{ width: "80px" }}
                  />
                  <p className="w3-large w3-margin-right fw-bold">
                    {" "}
                    JAX DOUGH.
                    <br />
                    <i className=" small">Varsity Coach- HHS</i>.
                    <br />
                    <span>
                      <i className=" small  fw-light">
                        &quot;Joe Baseball is the best. Lorem adipisicing elit.
                        Voluptate quibusdam totam pariatur accusamus, quam velit
                        at aliquam, porro tempore fuga neque similique.
                        Necessitatibus, iusto
                        <span
                          className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
                          onClick={() => {
                            setSelectedLetter(
                              Letters.find((letter) => letter.id === 1)
                            ); // Select Letter4 (update as needed)
                            setIsModalOpen(true);
                          }}
                          style={{
                            cursor: "pointer",
                            color: "#007bff",
                            textDecoration: "underline",
                          }}
                        >
                          See Full Letter
                        </span>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
              {/**Letter4 */}
              <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
                <div className="container">
                  <img
                    src={Wake}
                    alt="wake coach"
                    className="w3-left w3-circle w3-margin-right w3-grayscale-max"
                    style={{ width: "80px" }}
                  />
                  <p className="w3-large w3-margin-right fw-bold">
                    {" "}
                    JOE COACH.
                    <br />
                    <i className=" small">Summer Coach- Team</i>.
                    <br />
                    <span>
                      <i className=" small  fw-light">
                        &quot;Joe Baseball is the best. Lorem adipisicing elit.
                        Voluptate quibusdam totam pariatur accusamus, quam velit
                        at aliquam, porro tempore fuga neque similique.
                        Necessitatibus, iusto
                        <span
                          className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
                          onClick={() => {
                            setSelectedLetter(
                              Letters.find((letter) => letter.id === 2)
                            ); // Select Letter4 (update as needed)
                            setIsModalOpen(true);
                          }}
                          style={{
                            cursor: "pointer",
                            color: "#007bff",
                            textDecoration: "underline",
                          }}
                        >
                          See Full Letter
                        </span>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Modal */}

            {isModalOpen && selectedLetter && (
              <div>
                <div
                  className="modal-overlay w3-padding-large w3-padding-top-32"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div
                    className="modal-content scrollable-modal bg-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-white">
                      <div className="modal-header">
                        <p className=" small"></p>
                        <button
                          className="close-btn text-black py-0 hover-opacity"
                          onClick={() => setIsModalOpen(false)}
                          style={{
                            textShadow: ".5px .5px 1px",
                            fontSize: "12px",
                          }}
                        >
                          X
                        </button>
                      </div>
                      <img
                        src={selectedLetter.image}
                        alt={selectedLetter.name}
                        className="w3-image mt-2 shadow border"
                      />

                      <div className="modal-footer d-flex justify-content-between w3-padding-16 w3-padding-large">
                        <div
                          className="w3-round w3-white w3-margin-top"
                          style={{
                            fontFamily: "Raleway",
                            textAlign: "left", // Ensures all text aligns left
                            marginLeft: "0", // Moves the div to the left margin
                            padding: "10px", // Adds spacing inside the card
                            maxWidth: "320px", // Keeps it compact like a business card
                          }}
                        >
                          <p className="fw-light small mb-2">
                            <i>
                              Feel free to contact me with questions, or reach
                              out if I can be of assistance.
                            </i>
                          </p>
                          <p className="fw-bold text-emphasis-primary mb-1">
                            {selectedLetter.name}
                          </p>

                          <div className="small text-dark">
                            <p className="mb-1">
                              📞{" "}
                              <a
                                href={`tel:${selectedLetter.phone}`}
                                className="text-decoration-none text-dark"
                              >
                                {selectedLetter.phone}
                              </a>
                            </p>
                            <p className="mb-0">
                              ✉️{" "}
                              <a
                                href={`mailto:${selectedLetter.email}`}
                                className="text-decoration-none text-dark"
                              >
                                {selectedLetter.email}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn close-btn text-black mt-0 text-align-right my-3 shadow hover-opacity"
                        onClick={() => setIsModalOpen(false)}
                        style={{ fontSize: "11px", fontWeight: "700" }}
                      >
                        close X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default PlayerTestimonials;
