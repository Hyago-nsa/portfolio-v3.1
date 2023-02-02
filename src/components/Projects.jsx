import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    const projectsTitle = document.querySelector(".projectsTitle");
    const contactMe = document.querySelector(".contactme");

    window.addEventListener("scroll", () => {
      let offsetY = window.scrollY;

      projectsTitle.style.transform = `translateY(calc(220vh - ${
        offsetY * 0.5
      }px))`;
      projects[0].style.transform = `translateX(calc(225vh - ${
        offsetY * 0.5
      }px))`;
      projects[1].style.transform = `translateX(calc(-510vh + ${offsetY}px))`;
      projects[2].style.transform = `translateX(calc(590vh - ${offsetY}px))`;
      contactMe.style.transform = `translateY(calc(${offsetY * -0.4}px + 285vh))`;
    });
  }, []);

  return (
    <div className="projects">
      <h1 className="projectsTitle">Here are some of my projects</h1>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Titulo</h1>
          <div className="project-main-box">
            <div className="project-box">CSS</div>
            <div className="project-box">HTML</div>
            <div className="project-box">JavaScript</div>
          </div>
          <p className="projectDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
            vitae nihil quasi recusandae?
          </p>
          <button className="projectButton">Learn More</button>
        </div>
        <div>
          <img
            className="projectImage"
            src="src\images\project-dino.png"
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Dino Game</h1>
          <div className="project-main-box">
            <div className="project-box">Game</div>
            <div className="project-box">CSS</div>
            <div className="project-box">HTML</div>
            <div className="project-box">JavaScript</div>
          </div>
          <p className="projectDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
            vitae nihil quasi recusandae?
          </p>
          <button className="projectButton">Learn More</button>
        </div>
        <div>
          <img
            className="projectImage"
            src="src\images\project-dino.png"
            alt=""
            style={{ marginLeft: "5vw" }}
          />
        </div>
      </div>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Titulo</h1>
          <div className="project-main-box">
            <div className="project-box">CSS</div>
            <div className="project-box">HTML</div>
            <div className="project-box">JavaScript</div>
          </div>
          <p className="projectDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
            vitae nihil quasi recusandae?
          </p>
          <button className="projectButton">Learn More</button>
        </div>
        <div>
          <img
            className="projectImage"
            src="src\images\project-dino.png"
            alt=""
          />
        </div>
      </div>
      <h1 className="seeMore">See more</h1>
      <div className="contactme">
        <h1>Contact me</h1>
      </div>
    </div>
  );
};

export default Projects;
