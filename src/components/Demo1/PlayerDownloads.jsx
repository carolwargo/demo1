import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Schedule1 from '../../assets/PDF/Schedules/Schedule1.pdf';
import Schedule2 from '../../assets/PDF/Schedules/Schedule2.pdf';
import Schedule3 from '../../assets/PDF/Schedules/Schedule3.pdf';
import Schedule4 from '../../assets/PDF/Schedules/Schedule4.pdf';
import Transcript1PDF from '../../assets/PDF/Transcripts/Transcript1PDF.pdf';
import Transcript2PDF from '../../assets/PDF/Transcripts/Transcript2PDF.pdf';
import References1 from '../../assets/PDF/References/References1.pdf';
import References2 from '../../assets/PDF/References/References2.pdf';
import References3 from '../../assets/PDF/References/References3.pdf';
import References4 from '../../assets/PDF/References/References4.pdf';
import Performance1 from '../../assets/PDF/Performance/Performance1.pdf';
import Performance3 from '../../assets/PDF/Performance/Performance3.pdf';
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import Stats2 from "../../assets/images/Video/Stats2.png";
import Resume1  from "../../assets/images/Metrics/Resume1.png";
import Calendar1 from '../../assets/images/Calendars/Calendar1.png';
import Calendar2 from '../../assets/images/Calendars/Calendar2.png';
import Calendar3 from '../../assets/images/Calendars/Calendar3.png';
import Calendar4 from '../../assets/images/Calendars/Calendar4.png';
import Letter1 from '../../assets/images/Letters/Letter1.png';
import Letter2 from '../../assets/images/Letters/Letter2.png';
import Letter3 from '../../assets/images/Letters/Letter3.png';
import Letter4 from '../../assets/images/Letters/Letter4.png';
import Transcript1 from '../../assets/images/Letters/Transcript1.png';
import Transcript2 from '../../assets/images/Letters/Transcript2.png';
import Metrics1 from '../../assets/images/Metrics/Metrics1.png';
import MetricsAll from '../../assets/images/Metrics/MetricsAll.png';

const myFunction = (id) => {
  // Hide all elements with the "w3-show" class
  document.querySelectorAll(".w3-show").forEach((element) => {
    element.classList.remove("w3-show");
  });

  // Show only the selected element
  const selectedElement = document.getElementById(id);
  if (selectedElement) {
    selectedElement.classList.add("w3-show");
  }
};

/**function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
} */

// Set "Demo6" as the default displayed item when the page loads
window.onload = () => {
  myFunction("Demo7");
};

  
const PlayerDownloads = () => {

  const handleClose = () => { 
    document.getElementById("Demo1").className = "w3-hide w3-container";
    document.getElementById("Demo2").className = "w3-hide w3-container";
    document.getElementById("Demo3").className = "w3-hide w3-container";
    document.getElementById("Demo4").className = "w3-hide w3-container";
    document.getElementById("Demo5").className = "w3-hide w3-container";
    document.getElementById("Demo6").className = "w3-hide w3-container";
  };

  const handleFileSelect = (file) => {
    const download = document.getElementById("download");
    download.href = file;
  }




  return (
    <div>
      <div className="page-container ">
        {/* Page Content */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
              id="downloads"
            >
                  <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" /> 
          <h1 className="w3-text-light-grey w3-margin-bottom">Downloads</h1>
 
          <div className="bg-dark d-flex row justify-content-center align-items-top shadow rounded">
  <div className="col-sm-12 col-md-4 col-lg-4 pt-2 px-0" style={{ borderRight: "2px solid gray" }}>
    <div className="rounded container my-2 w3-padding-large">
      
      {/* Center Horizontally */}
      <div className="w3-padding-large d-flex flex-column align-items-center">
  

<div className=" shadow w3-padding-24 w3-margin-top" 
style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.6)', borderRadius:'5px'}}>
  {/**
<img 
          src={ClaySmall} 
          alt="profile" 
          style={{ width: "100%" }} 
          className="w3-image rounded-circle mb-3 w3-padding-large"
        />
        <h5 className="w3-text-light-grey fw-bold w3-margin-left">JOE BASEBALL</h5>
 */}

<h5 className="w3-text-light-grey  w3-margin-left mb-0">DOWNLOADS MENU</h5>
<p className=" w3-margin-left mt-1">Select a file below to view.</p>
     
       <hr className=" w3-margin-left text-center" style={{width:'200px'}}/>
        {/** Game Schedules */}
      
        <button
                onClick={() => myFunction("Demo1")}
                className="w3-button w3-block mt-2 w3-left-align rounded"
                style={{fontSize:'18px'}}
              >
                <i className="fas fa-calendar-check fa-fw w3-margin-right"></i>
            Game Schedules 
              </button>


               <button
                 onClick={() => myFunction("Demo2")}
                  className="w3-button w3-block w3-left-align rounded"
                  style={{fontSize:'18px'}}
               >
                 <i className="fa fa-book fa-fw w3-margin-right"></i>
                 Unofficial Transcripts
               </button>
          
{/**  References (Letters)*/}
               <button
                 onClick={() => myFunction("Demo3")}
                 className="w3-button w3-block w3-left-align rounded"
                 style={{fontSize:'18px'}}
               >
                 <i className="fas fa-user fa-fw w3-margin-right"></i>
                 References
               </button>
          
        

        {/**  Stats*/}
               <button
                 onClick={() => myFunction("Demo4")}
                    className="w3-button w3-block w3-left-align rounded"
                    style={{fontSize:'18px'}}
               >
                     <i className="fas fa-chart-line fa-fw w3-margin-right"></i>
              Stats In Comparisson 
               </button>
  


  {/** Performance Metrics*/}
               <button
                 onClick={() => myFunction("Demo5")}
                    className="w3-button w3-block w3-left-align rounded"
                    style={{fontSize:'18px'}}
               >
                 <i className="fas fa-person-running fa-fw w3-margin-right"></i>
              Performance Metrics
               </button>
           


 {/** Resume*/}
               <button
                 onClick={() => myFunction("Demo6")}
                   className="w3-button w3-block w3-left-align rounded"
                   style={{fontSize:'18px'}}
               >
                 <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                 Player Resume
               </button>
               </div>
               </div>
             </div>
             </div>
                {/* Display the selected file */}
        <div className="col-sm-12 col-md-8 col-lg-8 align-item-center w3-padding-32">
            {/*Calendars*/}
     
        <div id="Demo1" className="w3-hide w3-container w3-padding-24">
        <div className="d-flex justify-content-between align-items-center w3-margin-left">
        <h6 className="mb-0 text-start fw-bold w3-text-white">GAME SCHEDULES</h6>
        <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
           <div className="col-6 text-center py-2">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar1)}
                    >
                      <img src={Calendar1} alt="Calendar 1"  className="w-100 p-2 mb-3 shadow" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule1} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center py-2">
                    <span className=" small">
                  <Link
                      className="link-light"
                      onClick={() => handleFileSelect(Calendar2)}
                    >
                      <img src={Calendar2} alt="Calendar 2"  className="w-100 p-2 mb-3 shadow" />
                  
                    </Link> 
                   <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule2} >
                      <span className="text-decoration-none"> 
                <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                    </span>
                  </div>


                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar3)}
                    >
                      <img src={Calendar3} alt="Calendar 3"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Schedule3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Calendar4)}
                    >
                      <img src={Calendar4} alt="Calendar 4" className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary"
                                 href={Schedule4} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                              
                    </a></span> 
                  </div>
                 </div>
               </div>
  {/* Transcripts */}
               <div id="Demo2" className="w3-hide w3-container w3-padding-24">
               <div className="d-flex justify-content-between align-items-center w3-margin-left">
               <h6 className="mb-0 text-start fw-bold w3-text-white">UNOFFICIAL TRANSCRIPTS</h6>
               <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
                <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript1)}
                    >
                      <img src={Transcript1} alt="Transcript 1"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Transcript1PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Transcript2)}
                    >
                      <img src={Transcript2} alt="Transcript 2"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Transcript2PDF} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
              
                 </div>
               </div>

     {/**  References (Letters)*/}
     <div id="Demo3" className="w3-hide w3-container w3-padding-24">
     <div className="d-flex justify-content-between align-items-center w3-margin-left">
     <h6 className="mb-0 text-start fw-bold w3-text-white">LETTERS OF RECOMMENDATIONS </h6>
      <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
               <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter1)}
                    >
                      <img src={Letter1} alt="Letter 1"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
               
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter2)}
                    >
                      <img src={Letter2} alt="Letter 2"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                
                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter3)}
                    >
                      <img src={Letter3} alt="Letter 3"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References3} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-6 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Letter4)}
                    >
                      <img src={Letter4} alt="Letter 4"  className="w-100 p-2 mb-3 shadow" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={References4} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

 {/**  Stats*/}
 <div id="Demo4" className="w3-hide w3-container w3-padding-24">
 <div className="d-flex justify-content-between align-items-center w3-margin-left">
 <h5 className="mb-0 text-start fw-bold w3-text-white opacity-65">STATS IN COMPARISON</h5>
  <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
               <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Stats2)}
                    >
                      <img src={Stats2} alt="Stats 2"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Stats2} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

      {/** Performance Metrics*/}
      <div id="Demo5" className="w3-hide w3-container w3-padding-24">
      <div className="d-flex justify-content-between align-items-center w3-margin-left">
      <h6 className="mb-0 text-start fw-bold w3-text-white">PERFORMANCE METRICS</h6>
      <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
               <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(Metrics1)}
                    >
                      <img src={Metrics1} alt="Metrics 1"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Performance1} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>

                  <div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none"
                      onClick={() => handleFileSelect(MetricsAll)}
                    >
                      <img src={MetricsAll} alt="Metrics All"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={Performance3} >
                      <span className="text-decoration-none"> 
                      <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
               </div>

  {/* Resume */}
  <div id="Demo6" className="w3-hide w3-container w3-padding-24">
  <div className="d-flex justify-content-between align-items-center w3-margin-left">
  <h6 className="mb-0 text-start fw-bold w3-text-white">RESUME (Player Cheatsheet)</h6>
  <button className="btn w3-text-white  w3-hover-opacity btn-sm" 
  onClick={handleClose}
  style={{textShadow:'1px 1px 1px #000'}}>   
    <b>X</b>
  </button>
</div>
<span className="py-2 w3-text-gray small fw-light w3-margin-left">Click download below the selected file to view or print.</span>
<div className="row w3-padding-top-24">
<div className="col-12 text-center py-2">
                    <Link
                      className="link-light text-decoration-none mt-2"
                      onClick={() => handleFileSelect(Resume1)}
                    >
                      <img src={Resume1} alt="Resume 1"  className="w-100 p-2 mb-3 shadow w3-grayscale-max" />
                    </Link>
                    <span> <a 
                                  id="download"
                                  download
                                className=" link-secondary py-2"
                                 href={PlayerResume} >
                      <span className="text-decoration-none"> 
                  <i className="fas fa-download" style={{marginRight:'5px'}}></i>Download</span>
                    </a></span> 
                  </div>
                 </div>
                 </div>



                 <div
  id="Demo7"
  className="w3-hide w3-container w3-padding-24 d-flex justify-content-center align-items-center"
  style={{ height: "80vh" }}
>
  <div className="text-center">
    <p className="text-decoration-none" style={{textShadow:'1px 1px 2px #000'}}>
      No selection made - Choose a file to display.
    </p>
  </div>
</div>

               
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


  `}
        </script>
      </div>
    </div>
  );
};

export default PlayerDownloads;

/*
import React from "react";
import { InView } from "react-intersection-observer";
import PDFViewer from "../../components/Demo1/PDFViewer";

  const PlayerDownloads = () => {
    return (
      <div>
        <div className="page-container ">
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
              ${inView ? "animate-fade-in" : ""}`}
                id="downloads-page"
              >
                <PDFViewer />
              </div>
            )}
          </InView>
        </div>
      </div>
    );
  };
  
  export default PlayerDownloads;
*/