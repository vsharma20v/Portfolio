import styles from "./Info.module.css";
import Cards from "../Cards/Cards";
import infoData from "../../data/info-data";
import Skills from "../Skills/Skills";
import resume from "../../assets/resume.pdf";

const Info = () => {
  const { experience, education, projects, skills } = infoData;

  return (
    <section className={styles["info"]}>
      <div id="experience"></div>
      <h1 className={styles["info-section-heading"]}>
        Experience
        <div className={styles["info-section-line"]}></div>
      </h1>
      <Cards data={experience} />

      <div id="education"></div>
      <h1 className={styles["info-section-heading"]}>
        Education
        <div className={styles["info-section-line"]}></div>
      </h1>
      <Cards data={education} />

      <div id="projects"></div>
      <h1 className={styles["info-section-heading"]}>
        Projects
        <div className={styles["info-section-line"]}></div>
      </h1>
      <Cards data={projects} isProjects={true} />

      <div id="skills"></div>
      <h1 className={styles["info-section-heading"]}>
        Skills
        <div className={styles["info-section-line"]}></div>
      </h1>
      <Skills data={skills} />
      <div id="resume"></div>
      <h1 className={styles["info-section-heading"]}>
        Resume
        <div className={styles["info-section-line"]}></div>
      </h1>
      <a
        className={styles["info-section-download-btn"]}
        href={resume}
        target="_blank"
        rel="noreferrer"
      >
        Download
      </a>
    </section>
  );
};

export default Info;
