import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
}, []);


//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am a software developer passionate about Python, Django, and building scalable APIs, with experience in Docker, Kubernetes, and databases like PostgreSQL, SQL, and MongoDB.
          </p>
          <p align="LEFT">
          I have worked on multiple personal and school projects, including a Netflix clone, a car dealership marketplace, a CRM app, and an Airbnb clone using Flask.
          </p>
          <p>
            I am also familiar with front-end development using React, JavaScript, HTML, and CSS, and I have experience working with Git and GitHub.
          </p>
          <p>
          I am a problem solver and continuous learner, currently expanding my knowledge in PHP, Linux servers, Webmin, FTP, and Virtualmin to enhance my backend expertise.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face7">
            <FontAwesomeIcon icon={faPhp} color="#4F5B93" /> {/* PHP Icon */}
            </div>
            <div className="face8">
            <FontAwesomeIcon icon={faDatabase} color="#4479A1" /> {/* SQL (generic database) Icon */}
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;