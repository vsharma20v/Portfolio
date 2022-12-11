import styles from "./Cards.module.css";
import Card from "../Card/Card";
const Cards = ({ data, isProjects }) => {
  return (
    <div className={styles["cards"]}>
      {data.map((d) => (
        <Card dataItem={d} key={d.id} isProjects={isProjects} />
      ))}
    </div>
  );
};

export default Cards;
