import { useState, useEffect } from 'react';
import LogoTitle from '../../assets/images/logo-s (1).png'
import './index.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
//import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [
        'E',
        'N',
        'N',
        'E',
        'T',
        'H',
        ' ',
        'K',
        'A',
        'R',
        'I',
        'U',
        'K',
        'I',
        '.'
    ]

    const jobArray = [
        'S',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r'
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Software Developer</h2>
                <Link to="/contact" className="flat-button">
                CONTACT ME
                </Link>
                {/* Replace the About Me Link with a Download Resume button */}
                <a 
                        // href="/path/to/your/resume.pdf" // Replace with the actual path to your resume file
                        href="Public/Kenneth-Kariuki_Resume.pdf" // Replace with the actual path to your resume file
                        download="Your_Resume.pdf" // This will be the name of the downloaded file
                        className="flat-button"
                    >
                        Download CV.
                    </a>
                {/* <Link to="/about" className="flat-button">
                RESUME
                </Link> */}
                {/* </Link>
                    {/* <Logo />  */}
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home