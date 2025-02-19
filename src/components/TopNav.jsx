import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaQuestionCircle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";


const TopNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

/*
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
*/
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <div className='container-fluid'>
    <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top" expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className='w3-margin-right'>
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

     <Link to="/" className="nav-link" onClick={handleNavLinkClick} style={{fontSize:'14px', color:'black'}}> <i className='fas fa-laptop'></i> Demo Site</Link>
     <Link to="/media" className="nav-link" onClick={handleNavLinkClick} style={{fontSize:'14px', color:'black'}}><i className='fas fa-film'></i> Media Demo</Link>
     <Link to="/tables" className="nav-link" onClick={handleNavLinkClick} style={{fontSize:'14px', color:'black'}}><i className='fas fa-chart-column'></i> <b>DI</b>Table </Link>
          </Nav>

          <Nav>
            
          </Nav>
          <Nav className='ml-auto'>
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}><AiTwotoneMail /></Link>
            <Link to="/faqs" className="nav-link" onClick={handleNavLinkClick}><FaQuestionCircle/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default TopNavbar;