import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InView } from "react-intersection-observer";
import ClaySmall from '../assets/images/Profiles/ClaySmall.png';
import Offense from '../assets/images/Video/Offense.png';
import Defense from '../assets/images/Video/Defense.png';
import MLB from '../assets/images/Video/MLB.png';
import { Link } from 'react-router-dom';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='bg-black'>
     
{/**LARGE SCREENS */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-16  
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
        
        <div className="row g-0 shadow-lg">
                   <hr className="w3-opacity w3-text-white w3-padding-16 " />
                           <h1 className="w3-text-light-grey w3-margin-bottom text-start">Video Library</h1>
             
            <div className="col-sm-12 col-md-8 col-lg-8"
      >
      
<video src={ClaySmall} controls className="w-100" style={{ height:'370px'}}>
<div className="play-icon">
    <i className="fa fa-play"></i>
  </div>
</video>
              </div>
          
            <div className="col-sm-12 col-md-4 col-lg-4"
            >
             
            <Box
         className="text-white"
            style={{  
              boxShadow: '2px 2px 2px 4px rgba(0, 0, 0, 0.6)',
              background: 'linear-gradient(to bottom, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #222222, #181818, #111111, #0000, #000,  #000 )'}}
      sx={{
        position: 'relative',
        minHeight: 200,
      }}
    >
<AppBar
  position="static"
  className="w3-text-white"
  style={{ backgroundColor: '#323334',
  boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)',
   }}
>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="inherit"
    variant="scrollable"
    aria-label="action tabs example"
    sx={{
      ".MuiTab-root": {
        color: "white", // Unselected tabs
        transition: "color 0.3s ease", // Smooth transition
      },
      ".Mui-selected": {
        color: "primary.main", // Selected tab color
      },
    }}
  >
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



{/**CAGE WORK PANEL START */}
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="hitting-container">
  {/* Row 1 */}
<div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img
        src={Offense}
        alt="small"
        className="img-fluid shadow w3-grayscale-max"
      />
          <div className="image-mask"></div>
          </div>
            <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
      <Link className="link-light link-offset-2-hover small" to={"/demo1"}>
            <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 2px #fff'}}>CAGE WORK</p>
      </Link>
      <p className="small text-white-50" style={{ lineHeight: "18px" }}>
        Lorem ipsum dolor. <br />{" "}
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

  {/* Row 2 */}
<div className="row d-flex justify-content-between align-items-center mt-3">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img
        src={Defense}
        alt="small"
        className="img-fluid shadow w3-grayscale-max"
      />
          <div className="image-mask"></div>
          </div>
            <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
      <Link className="link-light link-offset-2-hover small" to={"/demo2"}>
            <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 2px #fff'}}>
          BP <span className="fw-light">(Live At-Bats)</span>
        </p>
      </Link>
      <p className="small text-white-50" style={{ lineHeight: "18px" }}>
        Lorem ipsum dolor. <br />{" "}
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

  {/* Row 3 */}
<div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img
        src={MLB}
        alt="small"
        className="img-fluid shadow-lg w3-grayscale-max"
      />
      <div className="image-mask"></div>
      </div>
        <div className="play-icon">
    <i className="fa fa-play"></i>
  </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
      <Link className="link-light link-offset-2-hover small" to={"/demo3"}>
            <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 2px #fff'}}>LIVE (in-game)</p>
      </Link>
      <p className="small text-white-50" style={{ lineHeight: "18px" }}>
        Lorem ipsum dolor. <br />{" "}
        <span className="w3-text-grey small">Jan.1,2025</span>
      </p>
    </div>
  </div>
</div>

</TabPanel>
{/**CAGE WORK PANEL START */}


{/**BULLPEN PANEL START */}
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div className="defense-container">
<div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
      <div className="image-mask"></div>
      </div>
            <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 1px '}}>BULLPEN</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
       </div>
  </div>
 
  <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />
<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
    <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    <div className="image-mask"></div>
    </div>
  <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 1px '}}>BULLPEN</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
       </div>
  </div>

  <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />

<div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
    <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
    <div className="image-mask"></div>
    </div>
   <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 1px '}}>BULLPEN</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
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
    <div className='image-container'>
    <img src={Offense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
    <div className="image-mask"></div>
    </div>
    <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 1px '}}>VS. OPPONENT</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
       </div>
  </div>
  <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />



<div className="row d-flex justify-content-between align-items-center ">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img src={Defense} alt="small" className=' img-fluid shadow  w3-grayscale-max' />
      <div className="image-mask"></div>
      </div> 
            <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>


    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 1px '}}>@ OPPONENT</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
       </div>
  </div>
   <hr
    className="d-block bg-secondary rounded mt-2"
    style={{
      boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    }}
  />


<div className="row d-flex justify-content-between align-items-center">
  <div className="col-6 col-md-6 col-lg-6 position-relative">
    <div className='image-container'>
      <img src={MLB} alt="small" className=' img-fluid shadow-lg w3-grayscale-max' />
      <div className="image-mask"></div>
      </div>
            <div className="play-icon">
          <i className="fa fa-play"></i>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-6 text-start">
     <Link className=' link-light link-offset-2-hover small' to={'/demo'}>
      <p className="py-0 mb-0 text-white "
      style={{ textShadow:'1px 1px 2px #fff'}}>VS. OPPONENT</p>
      </Link>
       <p className="small text-white-50" style={{ lineHeight:'18px'}}>Lorem ipsum dolor.  <br/> <span className="w3-text-grey small">Jan.1,2025</span></p> 
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




    </div>

  );
}
