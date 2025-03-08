import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons
import './index.scss'; // Import the SCSS file
import LogoS from '../../assets/images/project2.png';
import image from '../../assets/images/Airbnb.jpg';
import image3 from '../../assets/images/Project3Img.png';
import image4 from '../../assets/images/project4.png';
import image5 from '../../assets/images/Project5.png';


const projects = [
  {
    title: 'Car Rent',
    description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers.',
    tags: ['#mongodo', '#tokwini'],
    githubUrl: 'https://github.com/yourusername/car-rent',
    // imageUrl: 'path/to/car-rent.jpg' // Replace with actual image path
    image: "image",
  },
  {
    title: 'Job IT',
    description: 'Web application that enables users to search for job openings and view estimated salary requests.',
    tags: ['#rustap', '#kau'],
    githubUrl: 'https://github.com/yourusername/job-it',
    imageUrl: 'path/to/job-it.jpg' // Replace with actual image path
  },
  {
    title: 'Trip Guide',
    description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars.',
    tags: ['#rustj', '#supotone', '#cui'],
    githubUrl: 'https://github.com/yourusername/trip-guide',
    imageUrl: 'path/to/trip-guide.jpg' // Replace with actual image path
  },
  {
        title: 'Car Rent',
        description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        image: 'image1',
        githubUrl: 'https://github.com/yourusername/car-rent',
        tags: ['#mongodo', '#tokwini'],
      },
      {
        title: 'Job IT',
        description: 'Web application that enables users to search for job openings, view estimated salary request for positions, and locate available jobs based on their current location.',
        image: 'image2',
        githubUrl: 'https://github.com/yourusername/car-rent',
        tags: ['#rustap', '#kau'],
      },
      {
        title: 'Trip Guide',
        description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, can offer curated recommendations for popular destinations.',
        image: 'image3',
        tags: ['#rustj', '#supotone', '#cui'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'AirBnB Platform clone',
        description: 'Web-based platform that allows users to search, book, and manage Home rentals from various providers, providing a convenient and efficient solution for Hospitality needs.',
        image: 'image4',
        tags: ['RestApi', 'Flask', 'Python', 'JavaScript'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Notifey',
        description: 'A Web Application that allow users to Organize their schedules including meetings and plans of the day. Users can create, Update and delete what is unnecessary to them.',
        image: 'image5',
        tags: ['ReactJS', 'Django', 'RestApi', 'Python'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Campoprime',
        description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
        image: 'image6',
        tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Notifey',
        description: 'A Web Application that allow users to Organize their schedules including meetings and plans of the day. Users can create, Update and delete what is unnecessary to them.',
        image: 'image5',
        tags: ['ReactJS', 'Django', 'RestApi', 'Python'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Campoprime',
        description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
        image: 'image6',
        tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Notifey',
        description: 'A Web Application that allow users to Organize their schedules including meetings and plans of the day. Users can create, Update and delete what is unnecessary to them.',
        image: 'image5',
        tags: ['ReactJS', 'Django', 'RestApi', 'Python'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Campoprime',
        description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
        // image: 'image6',
        image: 'LogoS',
        tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Campoprime',
        description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
        image: 'image6',
        image: LogoS,
        tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
        githubUrl: 'https://github.com/Kariuki11',
      },
      {
        title: 'Campoprime',
        description: 'A user friendly web Application where Student can Interact and share learnning materials among themselves. Educators can also sell thir courses to Students.',
        image: 'image6',
        image: LogoS,
        tags: ['ReactJS', 'SupaBase', 'Tailwindcss'],
        githubUrl: 'https://github.com/Kariuki11',
      },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
            </a>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span className="tag" key={idx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
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
//             contentStyle={{ background: '#1d1836', color: '#fff' }}
//             contentArrowStyle={{ borderRight: '7px solid #232631' }}
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
//               <div className="project-tags text-white text[24px] font-bold">
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