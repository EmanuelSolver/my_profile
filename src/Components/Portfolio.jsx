/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Student Verification System 🎉",
    description:
      "A web application that allows exam invigilators verify students during exams. Verification is via an exam code and student image. The application is built using the SERN stack.",
    url: "#",
  },
  {
    title: "Task Manger App 🎉",
    description:
      "A web application that allows users to create, read, update and delete tasks. Managers can assign tasks and is in a position to monitor the progrss of various tasks. The application is built using the SERN stack.",
    url: "#",
  },
  {
    title: "E-learning App 🎉",
    description:
      " A web application that allows students to subscribe, find their learning paths, get learning materials and take quizzes. Tutors on this platform upload content, monitor and examine the students who have registered for various courses. The application is built using the Django framework.",
    url: "#",
  },
  {
    title: "Profile1 App 🎉",
    description: "Created my own based portfolio using simple HTML, CSS and JavaScript on wix.com.",
    url: "https://personalmygallery.wixsite.com/njiru-emanuel-portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            alt={imageAltText}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
