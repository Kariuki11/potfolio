// import { useEffect, useState } from 'react';
// import {
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faPython,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';
// import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './index.scss';
// import { faPhp } from '@fortawesome/free-brands-svg-icons';
// import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// const About = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 3000);

//     // Cleanup function to clear the timeout when the component unmounts
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <>
//       <div className="container about-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
//               idx={15}
//             />
//           </h1>
//         </div>

//         <div className="cards-container">
//           <div className="card">
//             <h2>Kariuki Ken Tech Journey</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>

//           <div className="card">
//             <h2>Software Engineering Journey</h2>
//             <p>
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </div>

//           <div className="card">
//             <h2>IoT Journey</h2>
//             <p>
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//             </p>
//           </div>

//           <div className="card">
//             <h2>Cybersecurity Journey</h2>
//             <p>
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
//             </p>
//           </div>
//         </div>

//         <div className="stage-cube-cont">
//           <div className="cubespinner">
//             <div className="face1">
//               <FontAwesomeIcon icon={faPython} color="#DD0031" />
//             </div>
//             <div className="face2">
//               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
//             </div>
//             <div className="face3">
//               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
//             </div>
//             <div className="face4">
//               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
//             </div>
//             <div className="face5">
//               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
//             </div>
//             <div className="face6">
//               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
//             </div>
//             <div className="face7">
//               <FontAwesomeIcon icon={faPhp} color="#4F5B93" />
//             </div>
//             <div className="face8">
//               <FontAwesomeIcon icon={faDatabase} color="#4479A1" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default About;


































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
          <div className="cards-container">
            <div className="card">
              <h2>Kariuki Ken Tech Journey</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="card">
              <h2>Software Engineering Journey</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="card">
              <h2>IoT Journey</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="card">
              <h2>Cybersecurity Journey</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
          {/* <p>
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
          </p> */}
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