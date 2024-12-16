import React, { useEffect } from "react";
import TagCloud from "tagcloud";
import "./index.scss";

const skills = [
  "HTML 5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Bootstrap",
  "SASS",
  "Git",
  "npm",
  "Webpack",
  "TypeScript",
  "JSON",
  "Angular 2+",
  "jQuery",
  "Karma",
  "Jasmine",
  "RxJs",
  "BEM",
  "lodash",
  "REST",
  "Bower",
];

const Skills = () => {
  useEffect(() => {
    // Initialize TagCloud
    const container = ".tagcloud";
    const options = {
      radius: 250, // Globe radius
      maxSpeed: "fast", // Revolving speed
      initSpeed: "normal",
      keep: true, // Globe continues rotating
    };
    TagCloud(container, skills, options);
  }, []);

  return (
    <div className="skills-container">
      <div className="description">
        <h1>My Skills</h1>
        <p>
          Here are some of the tools and technologies I have worked with over
          the years. Explore them as they revolve dynamically!
        </p>
      </div>
      <div className="globe">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default Skills;
