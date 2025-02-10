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
          I am a backend developer passionate about Python, Django, and building scalable APIs, with experience in Docker, Kubernetes, and databases like PostgreSQL, SQL, and MongoDB.
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

export default About















{/* <p>
Kariuki Kenneth is a passionate and innovative software developer with a strong foundation in backend development. His expertise spans Python, Django, and JavaScript, with practical experience in building efficient, scalable APIs and dynamic web applications. Kariuki's dedication to learning is evident in his journey through the ALX Software Engineering program, where he honed his skills by working on diverse projects, from an Airbnb clone to a car dealership platform. His proficiency in tools like PostgreSQL, MongoDB, and Docker underscores his adaptability and technical versatility.
</p>
<p align="LEFT">
Beyond technical prowess, Kariuki thrives in collaborative environments. His exceptional communication and problem-solving abilities enable him to work effectively with teams and contribute meaningfully to project goals. His passion for technology is matched by his curiosity, driving him to explore new tools, frameworks, and best practices to stay ahead in the ever-evolving tech landscape. Kariuki is eager to leverage his skills and experience to create innovative solutions that drive business growth and enhance user experiences.
</p>
<p>
Kariuki's entrepreneurial spirit is evident in his contributions to educational platforms like CampoPrime and Gloxad Academy. His commitment to empowering others through technology is complemented by a keen interest in continuous personal and professional growth. Whether tackling complex challenges or creating user-friendly applications, Kariuki is a dedicated professional eager to make a positive impact in the world of software development
</p> */}



























// import AnimatedLetters from '../AnimatedLetters';
// import './index.scss';


// const About = () => {
//     <div className='container about-page'>
//         <div className='text-Zone'>
//             <h1>
//                 <AnimatedLetters
//                     strArray={['A', 'b', 'o', 'u', 't', 'M', 'e' ]}
//                     idx={15}
//                 />
//                 <p>hijlalakha</p>
//                 <p></p>
//                 <p></p>
//             </h1>
//         </div>
//     </div>
// }

// export default About