import * as React from 'react';  
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InView } from "react-intersection-observer";
import Offense from '../assets/images/Video/Offense.png';
import Defense from '../assets/images/Video/Defense.png';
import MLB from '../assets/images/Video/MLB.png';
import ClayCover3 from '../assets/images/Profiles/ClayCover3.png';
import { Link } from 'react-router-dom';
import PlayerFooter from '../components/Demo1/PlayerFooter';
import Media3 from '../components/Demo1/PlayerMedia3';
import '../styles/media.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}





export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [videoSrc, setVideoSrc] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
<div className='w3-black '>
  <Media3/>
  <div className='w3-black text-center'>
    <div className=' w3-padding-top-24'>
    <div className=" w3-black w3-center" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#" className="w3-bar-item w3-button w3-center">
         <b><i className='fas fa-arrow-left'></i>   BACK TO HOME</b> 
            </a>
          </div>
        </div>
<h1
              className=" w3-animate-left"
            >VIDEO LIBRARY
          
            </h1>
          
            <p className=' text-secondary opacity-65 fw-bolder'>
            2024 GRAD | JOE BASEBALL | CATCHER
            </p>
            <img
              src={ClayCover3}
              alt="boy"
              className="w3-image w3-hide-small w3-hide-medium"
              width="50%"
           
            />
            </div>
            </div>
    <div>
            {/* Navbar for small & medium screens */}
        
     
    </div>
    <div
    style={{ minHeight: '100vh' }}   >
   <div className="container-fluid">

     
{/**LARGE SCREENS */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-white w3-padding-16  
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
        
        <div className="row g-0">
       <div className="col-sm-12 col-md-8 col-lg-8">
       <div className="video-container d-flex justify-content-center align-items-center" 
     style={{ minHeight: '400px',   
      borderRight: '2px solid #181818', 
      background: 'linear-gradient(to bottom, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #181818, #111111, #000000)'}}
    >
 
    <video src={videoSrc} controls className="w-100 text-secondary" style={{ minHeight: '400px'}} />

</div>

              </div>
            <div className="col-sm-12 col-md-4 col-lg-4"
            >
             
            <Box
         className="text-white"
            style={{  
              BorderLeft: '1px solid #fff', 
              background: 'linear-gradient(to bottom, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #181818, #111111, #000000)',
              
            }}
      sx={{
        position: 'relative',
        minHeight: '400px',
      }}
    >
<AppBar
  position="static"
  className="w3-text-white"
  style={{ backgroundColor: '#323334',
   }}
>
  <Tabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    aria-label="action tabs example"
    sx={{
      ".MuiTab-root": {
        color: "gray", // Unselected tabs
        transition: "color 0.3s ease", // Smooth transition
      },
      ".Mui-selected": {
        color: "info.main", // Selected tab color
      },
      ".MuiTabs-indicator": {
        backgroundColor: "info.main", // Indicator color
      },
    }}
  >
    {/**HITTING TAB */}
    <Tab label="Hitting" {...a11yProps(0)} 
    style={{ 
      letterSpacing:'1px',
      fontWeight:'bold',
     marginLeft:'5px', 
     marginRight:'5px' 
     }}
     />
    <Tab label="BullPens" {...a11yProps(1)} 
       style={{ 
       letterSpacing:'1px',
      fontWeight:'bold',
     marginLeft:'5px', 
     marginRight:'5px' 
     }}
     />
    <Tab label="In-Game" {...a11yProps(2)} 
       style={{ 
       letterSpacing:'1px',
      fontWeight:'bold',
     marginLeft:'5px', 
     marginRight:'5px' 
     }}
     />
  </Tabs>
</AppBar>



{/**HITTING PANEL START */}
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="hitting-container">
  {/* HITTING IMAGE 1 */}
  <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Offense)}>
            <img src={Offense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo1"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              CAGE WORK
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>

      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />

      {/* HITTING IMAGE 2 */}
      <div className="row d-flex justify-content-between align-items-center mt-3">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Defense)}>
            <img src={Defense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo2"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              BP <span className="fw-light">(Live At-Bats)</span>
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />
      {/* HITTING IMAGE 3 */}
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(MLB)}>
            <img src={MLB} alt="small" className="img-fluid shadow-lg w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
            </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo3"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              LIVE (in-game)
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
</div>

</TabPanel>
{/**HITTING PANEL START */}


{/**BULLPEN PANEL START */}
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div className="defense-container">
  <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Offense)}>
            <img src={Offense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo1"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              CAGE WORK
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>

      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />

      {/* HITTING IMAGE 2 */}
      <div className="row d-flex justify-content-between align-items-center mt-3">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Defense)}>
            <img src={Defense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo2"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              BP <span className="fw-light">(Live At-Bats)</span>
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />
      {/* HITTING IMAGE 3 */}
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(MLB)}>
            <img src={MLB} alt="small" className="img-fluid shadow-lg w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
            </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo3"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              LIVE (in-game)
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
</div>
      </TabPanel>
{/**BULLPEN PANEL END */}


{/**IN-GAME PANEL START */}
      <TabPanel value={value} index={2} dir={theme.direction}>
      <div className="in-game-container">
  <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Offense)}>
            <img src={Offense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo1"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              CAGE WORK
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>

      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />

      {/* HITTING IMAGE 2 */}
      <div className="row d-flex justify-content-between align-items-center mt-3">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(Defense)}>
            <img src={Defense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo2"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              BP <span className="fw-light">(Live At-Bats)</span>
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
      <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />
      {/* HITTING IMAGE 3 */}
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(MLB)}>
            <img src={MLB} alt="small" className="img-fluid shadow-lg w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
            </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo3"}>
            <p className="py-0 mb-0 text-white" style={{ textShadow: "1px 1px 2px #fff" }}>
              LIVE (in-game)
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
</div>
</TabPanel>
{/**IN-GAME PANEL END */}
    </Box>
            </div>
        </div>
    </div>
)}
</InView>
<div className=" w3-black w3-center" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#" className="w3-bar-item w3-button w3-center">
         <b><i className='fas fa-arrow-left'></i>   BACK TO HOME</b> 
            </a>
          </div>
        </div>
    </div>
    <div className='container'>
    <PlayerFooter />
    </div>
    </div>
    </div>
  );
}






/**
  style={{
    height: '100%',
    backgroundImage: 'url(' + ClaySmall + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'relative',
    padding: '4rem',
  }}
      <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark mask
      zIndex: -1, // Place it on top
   minHeight: '100vh',
    }}
  >
     Your content goes here 
  </div>
 */