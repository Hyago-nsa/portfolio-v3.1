import React, { useEffect } from "react";
import projectDino from "../images/project-dino.png";
import projectPokedex from "../images/project-pokedex.png";
import projectYoutube from "../images/project-youtube.png";

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
      projects[1].style.transform = `translateX(calc(-530vh + ${offsetY}px))`;
      projects[2].style.transform = `translateX(calc(590vh - ${offsetY}px))`;
      contactMe.style.transform = `translateY(calc(${
        offsetY * -0.4
      }px + 285vh))`;
    });
  }, []);

  return (
    <div className="projects">
      <h1 className="projectsTitle">Here are some of my projects</h1>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Pokedex</h1>
          <div className="project-main-box">
            <div className="project-box">JavaScript</div>
            <div className="project-box">React.js</div>
          </div>
          <p className="projectDesc">
            Project created and developed inspired by the pokédex of the Pokémon
            anime, where the user can browse and search the desired pokemons.
            Really fun project to do using API.
          </p>
          <a
            href="https://hyago-nsa.github.io/project-pokedex/"
            className="projectButton"
          >
            Learn More
          </a>
        </div>
        <div>
          <img className="projectImage" src={projectPokedex} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Dino Game</h1>
          <div className="project-main-box">
            <div className="project-box">CSS</div>
            <div className="project-box">HTML</div>
            <div className="project-box">JavaScript</div>
          </div>
          <p className="projectDesc">
            Project inspired by the dinosaur game in the google chrome browser
            that can be accessed when you run out of internet access. The main
            objective is to survive as long as possible without bumping into the
            cacti!
          </p>
          <a
            href="https://hyago-nsa.github.io/project-dinossaur-game/"
            className="projectButton"
          >
            Learn More
          </a>
        </div>
        <div>
          <img
            className="projectImage"
            src={projectDino}
            alt=""
            style={{ marginLeft: "5vw" }}
          />
        </div>
      </div>
      <div className="project">
        <div className="projectDetail">
          <h1 className="projectTitle">Youtube Clone</h1>
          <div className="project-main-box">
            <div className="project-box">JavaScript</div>
            <div className="project-box">React.js</div>
            <div className="project-box">Next.js</div>
          </div>
          <p className="projectDesc">
            A clone of the renowned Youtube app capable of playing and searching
            a variety of videos, from comedy to education and politics! Just
            like YouTube!
          </p>
          <a
            href="https://hyago-nsa.github.io/project-youtube-clone"
            className="projectButton"
          >
            Learn More
          </a>
        </div>
        <div>
          <img className="projectImage" src={projectYoutube} alt="" />
        </div>
      </div>

      <a className="seeMore" href="https://github.com/Hyago-nsa">
        See more
      </a>

      <div className="contactme">
        <h1>Contact me</h1>
      </div>
    </div>
  );
};

export default Projects;
