import React from "react";
import "../styles/three.css";

const skills = [
  {
    title: "Programming Languages",
    skill_list: ["JavaScript, TypeScript, Python, C++, SQL, Java"],
  },
  {
    title: "Software Development",
    skill_list: [
      "Full-Stack Development, Web & Mobile Applications, Software Architecture, AGILE, UI/UX",
    ],
  },
  {
    title: "Frameworks & Tools",
    skill_list: [
      "React Native, Flutter, Express, MySQL, Postgres, MongoDb, CMS, Postman, Figma, Unity",
    ],
  },
  {
    title: "DevOps",
    skill_list: ["AWS, CI/CD, Git Version Control, Linux, Docker"],
  },
  {
    title: "Testing & Security",
    skill_list: [
      "Black-box, White-box, Unit, Integration, System, Mutation, A/B, Cryptography, Hashing, Authentication Protocols",
    ],
  },
  {
    title: "Artificial Intelligence",
    skill_list: [
      " Linear Models, Monte Carlo Estimation, Feed-forward Neural Networks, B-Trees",
    ],
  },
  {
    title: "Soft Skills",
    skill_list: [
      "Independent yet collaborative, Critical Thinking, Attention to Details, Presentation & Demonstration",
    ],
  },
];

function Three() {
  return (
    <div className="three-container">
      <h1 className="heading">Skills</h1>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.title} className="skill">
            <div className="skill-inner">
              <div className="skill-front">
                <h3>{skill.title}</h3>
              </div>
              <div className="skill-back">
                <h3>{skill.title}</h3>
                <ul>
                  {skill.skill_list[0].split(",").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Three;
