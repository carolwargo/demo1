import {useState} from "react";
import { InView } from 'react-intersection-observer';
import Teacher from '../../assets/images/Testiminals/Teacher.png';
import Principal from '../../assets/images/Testiminals/Principal.png';
import Virginia from '../../assets/images/Testiminals/Virginia.png';
import Wake from '../../assets/images/Testiminals/Wake.png';
import Letter1 from '../../assets/images/Letters/Letter1.png';  
import Letter2 from '../../assets/images/Letters/Letter2.png';
import Letter3 from '../../assets/images/Letters/Letter3.png';
import Letter4 from '../../assets/images/Letters/Letter4.png';
import '../../styles/demo.css';

const Letters = [
  {id: 1, image: Letter1, name: "Jane Doe"},
  {id: 2, image: Letter2, name: "Jane Dough"},
  {id: 3, image: Letter3, name: "Jax Dough"},
  {id: 4, image: Letter4, name: "Joe Coach"}
]




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
          {/* Testimonial Section */}
          <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
          id="testimonials">
             <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Reputation</h1>
          <div className="row w3-padding-16" >
       {/**Letter1 */}
          <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">  
            <div className="container">
          <img
            src={Teacher}
            alt="teacher"
            className="w3-left w3-circle w3-margin-right w3-grayscale-max w3-image"
            style={{ width: "80px" }}
          />
           <p>
            <span className="w3-large fw-bold">JANE DOE. </span>
            <br /><i>Teacher- Htown High School</i>.
            <br />
            <span>
        <i className="small">
          &quot;Joe Baseball is the best. Lorem ipsum dolor adipisicing elit. Voluptate
          quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam,
          porro tempore fuga neque similique. Necessitatibus, iusto
          <span
  className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
  onClick={() => {
    setSelectedLetter(Letters.find(letter => letter.id === 3)); // Select Letter4 (update as needed)
    setIsModalOpen(true);
  }}
  style={{ cursor: "pointer", color: "#007bff" }}
>
  continue reading...
</span>
        </i>
      </span>
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
           <p>
            <span className="w3-large w3-margin-right fw-bold">JOHN DOUGH. </span>    
            <br /><i>Principal- Htown High School</i>.
            <br />
            <span>
        <i className="small">
          &quot;Joe Baseball is the best. Lorem ipsum dolor adipisicing elit. Voluptate
          quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam,
          porro tempore fuga neque similique. Necessitatibus, iusto
          <span
  className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
  onClick={() => {
    setSelectedLetter(Letters.find(letter => letter.id === 4)); // Select Letter4 (update as needed)
    setIsModalOpen(true);
  }}
  style={{ cursor: "pointer", color: "#007bff" }}
>
  continue reading...
</span>
        </i>
      </span>
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
       <p>
         <span className="w3-large w3-margin-right fw-bold">JAX DOUGH. </span>
         <br /><i>Varsity Coach- Htown High School</i>.
       <br />
       <span>
        <i className="small">
          &quot;Joe Baseball is the best. Lorem ipsum dolor adipisicing elit. Voluptate
          quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam,
          porro tempore fuga neque similique. Necessitatibus, iusto
          <span
  className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
  onClick={() => {
    setSelectedLetter(Letters.find(letter => letter.id === 1)); // Select Letter4 (update as needed)
    setIsModalOpen(true);
  }}
  style={{ cursor: "pointer", color: "#007bff" }}
>
  continue reading...
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
       <p>
         <span className="w3-large w3-margin-right fw-bold">JOE COACH.</span>
         <br /><i>Summer Coach- Team Name</i>. 
         <br />
         <span>
        <i className="small">
          &quot;Joe Baseball is the best. Lorem ipsum dolor adipisicing elit. Voluptate
          quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam,
          porro tempore fuga neque similique. Necessitatibus, iusto
          <span
  className="text-decoration-none fw-light link-light ms-2 continue-link w3-hover-opacity"
  onClick={() => {
    setSelectedLetter(Letters.find(letter => letter.id === 2)); // Select Letter4 (update as needed)
    setIsModalOpen(true);
  }}
  style={{ cursor: "pointer", color: "#007bff" }}
>
  continue reading...
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
          <button className="close-btn text-black mt-1 py-0" 
          onClick={() => setIsModalOpen(false)}
          style={{textShadow:'.5px .5px 1px'}}>×</button>
        </div>
        <img src={selectedLetter.image} alt={selectedLetter.name} className="w3-image mt-2 shadow border" />
  
        <div className="modal-footer d-flex justify-content-between w3-padding-16 w3-padding-large">
  <div className="text-start">
    <p className="fw-bold mb-1">CONTACT INFORMATION</p>
    <p className="text-black fw-bold">{selectedLetter.name}</p>
  </div>
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>
  <button className="btn close-btn text-black mt-0 text-align-right my-3" onClick={() => setIsModalOpen(false)}
    style={{fontSize:'10px', fontWeight:'500'}}>close X</button>



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