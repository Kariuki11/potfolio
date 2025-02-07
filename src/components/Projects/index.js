import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Library's built-in styles
import { FaReact } from 'react-icons/fa';
import { SiDjango, SiArduino } from 'react-icons/si';
import './index.scss';
import LogoS from '../../assets/images/project2.png';
import image from '../../assets/images/Airbnb.jpg';
import image3 from '../../assets/images/Project3Img.png';
import image4 from '../../assets/images/project4.png';
import image5 from '../../assets/images/Project5.png';


const Projects = () => {
  const projects = [
    {
      title: 'AirBnB Platform clone',
      description: 'Web-based platform that allows users to search, book, and manage Home rentals from various providers, providing a convenient and efficient solution for Hospitality needs..',
      image: image,

      tags: ['RestApi', 'Flask', 'Python', 'JavaScript'],
    },
    {
      title: 'Notifey',
      description: 'A Web Application that allow users to Organize their schedules including meetings and plans of the day. Users can create, Update and delete what is unnecessary to them.',
      image: LogoS,
      tags: ['ReactJS', 'Django', 'RestApi', 'Python'],
    },
    {
      title: 'Campoprime',
      description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
      image: image3,
      tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
    },
    {
      title: 'Django Project',
      description: 'A user friendly marketplace platform that allows admins or sellers to easily list, manage, and sell their products online. The platform enables sellers to add goods with detailed descriptions, images, and pricing.',
      image: image4,
      tags: ['Python', 'Django', 'PostgreSQL'],
    },
    {
      title: 'IoT Project',
      description: 'An IoT-based automated greenhouse system designed to monitor and manage environmental factors. The system includes features such as temperature and humidity detection, pH monitoring, and an SMS notification system that alerts users with real-time updates directly to their phones. It utilizes ThinkSpeak for data visualization and AWS Cloud for reliable data storage, ensuring efficient and scalable performance.',
      image: image5,
      tags: ['Esp32s', 'Arduino', 'ThinkSpeak', 'AWS Cloud', 'SMS Notification'],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="section-title animate-text">Projects</h1>
      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            iconStyle={{
              background: index === 3 ? '#092e20' : index === 4 ? '#007c3b' : '#ffd700',
              color: '#fff',
            }}
            icon={
              index === 3 ? <SiDjango /> : index === 4 ? <SiArduino /> : <FaReact />
            }
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="vertical-timeline-element-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags text-white text[24px] font-bold">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;












































// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css'; // Library's built-in styles
// import { FaReact } from 'react-icons/fa';
// import { SiDjango, SiArduino } from 'react-icons/si';
// import './index.scss';
// import LogoS from '../../assets/images/project2.png';
// import image from '../../assets/images/Airbnb.jpg';
// import image3 from '../../assets/images/Project3Img.png';
// import image4 from '../../assets/images/project4.png';
// import image5 from '../../assets/images/Project5.png';


// const Projects = () => {
//   const projects = [
//     {
//       title: 'AirBnB Platform clone',
//       description: 'Web-based platform that allows users to search, book, and manage Home rentals from various providers, providing a convenient and efficient solution for Hospitality needs..',
//       image: image,

//       tags: ['RestApi', 'Flask', 'Python', 'JavaScript'],
//     },
//     {
//       title: 'Notifey',
//       description: 'A Web Application that allow users to Organize their schedules including meetings and plans of the day. Users can create, Update and delete what is unnecessary to them.',
//       image: LogoS,
//       tags: ['ReactJS', 'Django', 'RestApi', 'Python'],
//     },
//     {
//       title: 'Campoprime',
//       description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
//       image: image3,
//       tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
//     },
//     {
//       title: 'Django Project',
//       description: 'A user friendly marketplace platform that allows admins or sellers to easily list, manage, and sell their products online. The platform enables sellers to add goods with detailed descriptions, images, and pricing.',
//       image: image4,
//       tags: ['Python', 'Django', 'PostgreSQL'],
//     },
//     {
//       title: 'IoT Project',
//       description: 'An IoT-based automated greenhouse system designed to monitor and manage environmental factors. The system includes features such as temperature and humidity detection, pH monitoring, and an SMS notification system that alerts users with real-time updates directly to their phones. It utilizes ThinkSpeak for data visualization and AWS Cloud for reliable data storage, ensuring efficient and scalable performance.',
//       image: image5,
//       tags: ['Esp32s', 'Arduino', 'ThinkSpeak', 'AWS Cloud', 'SMS Notification'],
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h1 className="section-title animate-text">Projects</h1>
//       <VerticalTimeline>
//         {projects.map((project, index) => (
//           <VerticalTimelineElement
//             key={index}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: '#1c1c1e', color: '#fff' }}
//             contentArrowStyle={{ borderRight: '7px solid #1c1c1e' }}
//             iconStyle={{
//               background: index === 3 ? '#092e20' : index === 4 ? '#007c3b' : '#ffd700',
//               color: '#fff',
//             }}
//             icon={
//               index === 3 ? <SiDjango /> : index === 4 ? <SiArduino /> : <FaReact />
//             }
//           >
//             <div className="project-card">
//               <img src={project.image} alt={project.title} className="project-image" />
//               <h3 className="vertical-timeline-element-title">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <div className="project-tags">
//                 {project.tags.map((tag, tagIndex) => (
//                   <span key={tagIndex} className="tag">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default Projects;