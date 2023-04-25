import styles from "./Info.module.css";
import Cards from "../Cards/Cards";
import infoData from "../../data/info-data";
import Skills from "../Skills/Skills";
import { useEffect, useRef } from "react";

const Info = ({ changeActive }) => {
  const { experience, education, projects, skills } = infoData;

  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    let observer = null;
    if (
      experienceRef.current &&
      educationRef.current &&
      projectsRef.current &&
      skillsRef.current &&
      resumeRef.current
    ) {
      const options = {
        threshold: 0.2,
      };
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            changeActive(entry.target.id);
          }
        });
      }, options);
      observer.observe(experienceRef.current);
      observer.observe(educationRef.current);
      observer.observe(projectsRef.current);
      observer.observe(skillsRef.current);
      observer.observe(resumeRef.current);
    }

    return () => observer?.disconnect();
  }, [
    experienceRef,
    educationRef,
    projectsRef,
    skillsRef,
    resumeRef,
    changeActive,
  ]);
  return (
    <section className={styles["info"]}>
      <div id="experience" ref={experienceRef}>
        <h1 className={styles["info-section-heading"]}>
          Experience
          <div className={styles["info-section-line"]}></div>
        </h1>
        <Cards data={experience} />
      </div>
      <div id="education" ref={educationRef}>
        <h1 className={styles["info-section-heading"]}>
          Education
          <div className={styles["info-section-line"]}></div>
        </h1>
        <Cards data={education} />
      </div>
      <div id="projects" ref={projectsRef}>
        <h1 className={styles["info-section-heading"]}>
          Projects
          <div className={styles["info-section-line"]}></div>
        </h1>
        <Cards data={projects} isProjects={true} />
      </div>
      <div id="skills" ref={skillsRef}>
        <h1 className={styles["info-section-heading"]}>
          Skills
          <div className={styles["info-section-line"]}></div>
        </h1>
        <Skills data={skills} />
      </div>
      <div id="resume" ref={resumeRef}>
        <h1 className={styles["info-section-heading"]}>
          Resume
          <div className={styles["info-section-line"]}></div>
        </h1>
        <a
          className={styles["info-section-download-btn"]}
          href="https://drive.google.com/file/d/1kea6eUx15E-HNk9f3zUVWUszgr19fO5l/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Info;
