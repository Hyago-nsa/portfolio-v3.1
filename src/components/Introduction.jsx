import React, { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    const saluteTextContainer = document.querySelector(".saluteTextContainer");
    const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");

    const authorName = document.querySelector(".name");
    const jobTitles = document.querySelectorAll(".jobTitle");

    window.addEventListener("scroll", () => {
      let offsetY = window.scrollY;

      saluteTextContainer.style.transform = `translateY(${offsetY * -0.5}px)`;
      authorName.style.transform = `translateX(calc(-100vh + ${offsetY}px))`;
      jobTitles[0].style.transform = `translateX(calc(250vh - ${offsetY}px))`;
      jobTitles[1].style.transform = `translateX(calc(-280vh + ${offsetY}px))`;
      jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 1.5}px`;
      jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
    });
  }, []);

  return (
    <div className="intro">
      <div className="salute">
        <div className="saluteTextContainer">
          <h1 className="saluteText">Hello!</h1>
        </div>
      </div>
      <div className="nameContainer">
        <h2 className="name">I'm Hyago</h2>
      </div>
      <div className="jobTitleContainer dark">
        <h2 className="jobTitle">a Front-End Developer</h2>
      </div>
      <div className="jobTitleContainer purple">
        <h2 className="jobTitle description">I build things for the web</h2>
      </div>
    </div>
  );
};

export default Introduction;
