"use client"

import React, { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import styled from "styled-components"

const SkillsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #002133;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: #FFD700;
  margin: 2rem 0;
  z-index: 1;
`

const CanvasContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`

function Word({ children, position = [0, 0, 0] }) {
  const ref = useRef()
  const [hovered, setHovered] = React.useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame(({ camera }) => {
    // Make text always face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Increase rotation speed on hover
    ref.current.rotation.y += hovered ? 0.02 : 0.01
  })

  return (
    <group ref={ref} position={position}>
      <Text 
        font="/fonts/CoolveticaRg-Regular.woff"
        color={hovered ? "#FFD700" : "#ffffff"}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </Text>

      {/* <Text
        color={hovered ? "#FFD700" : "#ffffff"}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="/fonts/Inter-Bold.woff"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </Text> */}
    </group>
  )
}

function Cloud() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "TypeScript",
    "REST API",
    "GraphQL",
    "Redux",
    "Webpack",
    "Sass",
    "npm",
    "Jest",
    "AWS",
  ]

  const ref = useRef()
  const radius = 8

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.1
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
  })

  return (
    <group ref={ref}>
      {skills.map((text, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi

        return (
          <Word
            key={text}
            position={[
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(phi),
            ]}
          >
            {text}
          </Word>
        )
      })}
    </group>
  )
}

export default function SkillsSphere() {
  return (
    <SkillsContainer>
      <Title>Skills & Experience</Title>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 20], fov: 75, near: 0.1, far: 1000 }} style={{ background: "transparent" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cloud />
        </Canvas>
      </CanvasContainer>
    </SkillsContainer>
  )
}























// "use client"

// import { useState } from "react"
// import { TagCloud } from "react-tagcloud"
// import styled from "styled-components"

// const SkillsContainer = styled.div`
//   min-height: 100vh;
//   background-color: #002133;
//   color: white;
//   padding: 2rem;
//   display: flex;
//   gap: 4rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `

// const TextSection = styled.div`
//   flex: 1;
//   padding-top: 4rem;
// `

// const Title = styled.h1`
//   font-size: 3.5rem;
//   color: #FFD700;
//   margin-bottom: 2rem;
// `

// const Description = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
//   max-width: 600px;
// `

// const CloudContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 600px;
// `

// const Skills = () => {
//   const [speed, setSpeed] = useState(1)

//   const skillsData = [
//     { value: "HTML5", count: 25 },
//     { value: "CSS3", count: 25 },
//     { value: "JavaScript", count: 30 },
//     { value: "React", count: 30 },
//     { value: "TypeScript", count: 25 },
//     { value: "Node.js", count: 25 },
//     { value: "Python", count: 25 },
//     { value: "Django", count: 20 },
//     { value: "PostgreSQL", count: 20 },
//     { value: "MongoDB", count: 20 },
//     { value: "Git", count: 25 },
//     { value: "Docker", count: 20 },
//     { value: "Kubernetes", count: 20 },
//     { value: "npm", count: 20 },
//     { value: "Webpack", count: 20 },
//     { value: "Sass", count: 25 },
//     { value: "Redux", count: 25 },
//     { value: "REST API", count: 25 },
//     { value: "GraphQL", count: 20 },
//     { value: "Jest", count: 20 },
//   ]

//   const options = {
//     luminosity: "light",
//     hue: "white",
//   }

//   const customRenderer = (tag, size, color) => (
//     <span
//       key={tag.value}
//       style={{
//         animation: `moveAround ${speed}s ease-in-out infinite`,
//         fontSize: `${size}px`,
//         margin: "3px",
//         padding: "3px",
//         display: "inline-block",
//         color: "white",
//       }}
//       onMouseEnter={() => setSpeed(0.5)} // Speed up on hover
//       onMouseLeave={() => setSpeed(1)} // Return to normal speed
//     >
//       {tag.value}
//     </span>
//   )

//   return (
//     <SkillsContainer>
//       <TextSection>
//         <Title>Skills & Experience</Title>
//         <Description>
//           Expert in front-end development including technologies like HTML5, CSS3, JavaScript, React, TypeScript,
//           Node.js, and more.
//         </Description>
//         <Description>
//           I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web
//           design. I put special effort into optimizing my code and providing the best user experience.
//         </Description>
//       </TextSection>
//       <CloudContainer>
//         <TagCloud tags={skillsData} minSize={20} maxSize={35} renderer={customRenderer} options={options} />
//       </CloudContainer>
//       <style jsx global>{`
//         @keyframes moveAround {
//           0%, 100% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(5px, 5px);
//           }
//           50% {
//             transform: translate(-5px, 5px);
//           }
//           75% {
//             transform: translate(-5px, -5px);
//           }
//         }
//       `}</style>
//     </SkillsContainer>
//   )
// }

// export default Skills


























// import React, { useEffect } from "react";
// import TagCloud from "tagcloud";
// import "./index.scss";

// const skills = [
//   "HTML 5",
//   "CSS3",
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Bootstrap",
//   "SASS",
//   "Git",
//   "npm",
//   "Webpack",
//   "TypeScript",
//   "JSON",
//   "Angular 2+",
//   "jQuery",
//   "Karma",
//   "Jasmine",
//   "RxJs",
//   "BEM",
//   "lodash",
//   "REST",
//   "Bower",
// ];

// const Skills = () => {
//   useEffect(() => {
//     // Initialize TagCloud
//     const container = ".tagcloud";
//     const options = {
//       radius: 250, // Globe radius
//       maxSpeed: "fast", // Revolving speed
//       initSpeed: "normal",
//       keep: true, // Globe continues rotating
//     };
//     TagCloud(container, skills, options);
//   }, []);

//   return (
//     <div className="skills-container">
//       <div className="description">
//         <h1>My Skills</h1>
//         <p>
//           Here are some of the tools and technologies I have worked with over
//           the years. Explore them as they revolve dynamically!
//         </p>
//       </div>
//       <div className="globe">
//         <span className="tagcloud"></span>
//       </div>
//     </div>
//   );
// };

// export default Skills;
