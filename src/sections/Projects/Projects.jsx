import React from "react";
import styles from "./ProjectsStyles.module.css";
import cloneX from "../../assets/CloneX.png";
import ProjectCard from "../../common/ProjectCard";
import cost from "../../assets/cost.svg";
import Jamming from "../../assets/Jamming.png";


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cloneX}
          link="https://github.com/0xRoque/Clone-X"
          h3="Twitter"
          p="Twitter Clone"
        />
         <ProjectCard
          src={cost}
          link="https://github.com/0xRoque/Project-Cost"
          h3="Cost"
          p="Gerenciador de custos"
        />
         <ProjectCard
          src={Jamming}
          link="https://github.com/0xRoque/Jammming."
          h3="Jamming"
          p="Spotify library"
        />
      </div>
    </section>
  );
}

export default Projects;
