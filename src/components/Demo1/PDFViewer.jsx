import { useState } from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import Schedules from "../../assets/PDF/Schedules/Schedules.pdf";
import References from "../../assets/PDF/References/References.pdf";
import Transcripts from "../../assets/PDF/Transcripts/Transcripts.pdf";
import Performance from "../../assets/PDF/Performance/Performance.pdf";

const PDFViewer = () => {
  const [selectedPDF, setSelectedPDF] = useState(PlayerResume); // Default to PlayerResume

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
  };

  return (
    <div>
<style>
  {`
  .custom-button {
  width: 100%;
  transition: all 0.3s ease;
}

.custom-button:hover .custom-link {
  color: black;
}

.custom-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}
`}
</style>
<InView triggerOnce={true}>
             {({ inView, ref }) => (
               <div
                 ref={ref}
                 className={`w3-content w3-justify w3-text-grey w3-padding-large w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
                 id="cards"
               >


<hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Player Downloads</h1>
           <div className="row d-flex justify-content-between align-items-center">
  {/* High School Card */}
  <div className="col-sm-12 col-md-3 col-lg-3">
            <h3 className="">Download Menu</h3>
              <p className="small">
                Select a PDF document from below to view. 
              </p>
      
          {/**Schedules */}
            <button
  className="w3-button w3-left-align rounded custom-button"
  onClick={() => handlePDFSelect(Schedules)}
>
<Link className="custom-link">
  <i className="fas fa-calendar-check fa-fw" style={{marginRight:'6px'}}></i>
Schedules</Link>
</button>

{/**Trascripts */}
<button
  className="w3-button w3-left-align rounded custom-button"
  onClick={() => handlePDFSelect(Transcripts)}
>
<Link className="custom-link">
  <i className="fa fa-book fa-fw" style={{marginRight:'6px'}}></i>
  Transcripts</Link>
</button>


{/**References */}
<button
  className="w3-button w3-left-align rounded custom-button"
  onClick={() => handlePDFSelect(References)}
>
<Link className="custom-link">
  <i className="fa fa-user fa-fw" style={{marginRight:'6px'}}></i>
  References</Link>
</button>
      

               {/**Performance */}
               <button
  className="w3-button w3-left-align rounded custom-button"
  onClick={() => handlePDFSelect(Performance)}
>
<Link className="custom-link">
  <i className="fa fa-chart-line fa-fw" style={{marginRight:'6px'}}></i>
  Performance</Link>
</button>


               {/**PlayerResume */}
               <button
  className="w3-button w3-left-align rounded custom-button"
  onClick={() => handlePDFSelect(PlayerResume)}
>
<Link className="custom-link">
  <i className="fa fa-file-pdf fa-fw" style={{marginRight:'6px'}}></i>
  PlayerResume</Link>
</button>
               
<hr/>
<Link className=" link-secondary link-underline-secondary small">See the benefits of PDF documents</Link>                    
            
          </div>
        
      {/** Right Container to Display Selected PDF */}
      <div className="col-sm-12 col-md-9 col-lg-9">
            {selectedPDF ? (
              <iframe
                src={selectedPDF}
                title="Selected PDF"
                width="100%"
                height="500"
                style={{
                  borderLeft: "2px solid #232323",
                  borderRadius: "2px",
                }}
              ></iframe>
            ) : (
              <p className="text-black">No PDF selected. Please choose a file to preview.</p>
            )}
          </div>
    </div>
    </div>
    )}

  </InView>
          




<div className=" w3-hide-large"
 style={{  marginTop:'80px', padding: "22px"}}>

  </div>
    </div>
    
  );
};

export default PDFViewer;

