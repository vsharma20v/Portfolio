import styles from "./Skill.module.css";

const Skill = ({ dataItem }) => {
  return <p className={styles["skill"]}>{dataItem}</p>;
};

export default Skill;
