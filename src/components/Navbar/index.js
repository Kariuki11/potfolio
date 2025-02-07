import { useState } from "react";
import './index.scss';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoS from '../../assets/images/logo-s (1).png';
////import { faLinkedin, faGithub, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="Main Logo" />
            </Link>
            <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </button>
        </div>
      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;