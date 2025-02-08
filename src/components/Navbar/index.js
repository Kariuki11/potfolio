import { useState } from "react";
import './index.scss';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoS from '../../assets/images/logo-s (1).png';
import { faLinkedin, faGithub, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
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
                    <span>Home</span>
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    <span>About</span>
                </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                    <span>Projects</span>
                </NavLink>
            </li>
            <li className="nav-item active">
                {/* <NavLink exact={true} activeClassName="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                    <span>Skills</span>
                </NavLink> */}
            </li>
            <li className="nav-item active">
                <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    <span>Contact</span>
                </NavLink>
            </li>
        </ul>

        <ul className="social-links">
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kenn-kariuki-222922286/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://github.com/Kariuki11'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.instagram.com/kariukii_ken/'>
                            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.facebook.com/profile.php?id=100080064271087'>
                            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;