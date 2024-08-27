import React from "react";
import "../styles/two.css";

const projects = [
  {
    title: "TwoKey Platform",
    subTitle: "Freelancing - Current",
    description: `In my role as a Full Stack Developer at TwoKey, an early-stage startup, I am instrumental in developing the second version of our secure document-sharing platform. I focus on enhancing the platform by adding critical security features, such as file locking, and implementing advanced file management capabilities, including bulk file actions. My contributions have been pivotal in progressing to the beta-testing phase with clients, resulting in over 65% of beta testers expressing satisfaction with the platform and indicating a strong willingness to adopt it upon its full release.`,
    stack: "Tech Stack: React.js, Material UI, Axios, Django, Firebase, Vercel",
  },
  {
    title: "Atelier Designer",
    subTitle: "Client Project",
    description: `I designed and developed a 10-page website for an interior designing firm to showcase their portfolio. The major difficulty I faced while developing this was the client required a lot of high-quality images to be displayed on the home page, which was taking a long time to load initially. After digging around a lot, I was able to bring the loading time to under 2 seconds.`,
    stack: "Tech Stack: Gatsby.js, CSS3, GraphQL, Contentful CMS, Netlify.",
  },
  {
    title: "Avonmore Rink Booking Application",
    subTitle: "Academic Project",
    description: `I worked on a rink booking web application for a local community in Edmonton along with 5 other group members. I was a floater in the group, but primarily worked on the frontend of the application. We had an admin side as well as a user side for the project. The features in the admin side included: Being able to see all users, Deciding the availability, rates and limit of people allowed in the rink, Ban users if necessary. The features in the user side included: Being able to book their spot at the rink and check, availability for future dates, Being able to modify your profile, Being able to view past bookings and cancel current bookings, if necessary.`,
    stack: "Tech Stack: React, Material UI, Redux, Axios, Django, MySQL, Azure",
  },
  {
    title: "Social Media Application",
    subTitle: "Academic Project",
    description: `In the Social Media project, I spearheaded the development of a social media web application, leading a team of four front-end developers while also contributing to the backend functionalities. Over the course of six weeks, we developed key features such as user profiles, friends and followers management, posts, and interactions like likes and comments. We also implemented efficient inter-server communication to ensure seamless functionality across different components.`,
    stack: "Tech Stack: React.js, Redux, Axios, Django, MySQL, Heroku",
  },
];

function Two() {
  return (
    <div className="two-container">
      <h1 className="heading">Projects</h1>
      {projects.map((project) => (
        <div className="project" key={project.title}>
          <h1>{project.title}</h1>
          <h3>{project.subTitle}</h3>
          <p>{project.description}</p>
          <p style={{ fontWeight: "bold" }}>{project.stack}</p>
        </div>
      ))}
    </div>
  );
}

export default Two;
