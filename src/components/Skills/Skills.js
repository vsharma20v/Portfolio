import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";

const Skills = ({ data }) => {
  return (
    <div className={styles["skills"]}>
      {data.map((category) => (
        <div className={styles["skills-category"]} key={category.id}>
          <p className={styles["skills-category-heading"]}>{category.title}</p>
          <div className={styles["skills-category-values"]}>
            {category.value.map((skill, i) => (
              <Skill dataItem={skill} key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
