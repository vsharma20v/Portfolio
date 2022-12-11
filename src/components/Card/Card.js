import styles from "./Card.module.css";
const Card = ({ dataItem, isProjects }) => {
  if (isProjects) {
    const { logoSrc, logoAlt, name, Url, technologies, about1, about2 } =
      dataItem;
    return (
      <div className={styles["card"]}>
        <img className={styles["card-image"]} src={logoSrc} alt={logoAlt} />
        <p className={styles["card-heading"]}>
          <a
            href={Url}
            className={styles["card-name"]}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </p>
        <p className={styles["card-technologies"]}>{technologies}</p>
        <div className={styles["card-body"]}>
          {about1 && <p>{about1}</p>}
          {about2 && <p>{about2}</p>}
        </div>
      </div>
    );
  }

  const {
    logoSrc,
    logoAlt,
    role,
    name,
    Url,
    duration,
    aboutRolePara1,
    aboutRolePara2,
    aboutRolePara3,
    technologies,
    textColor,
  } = dataItem;
  return (
    <div className={styles["card"]}>
      <img className={styles["card-image"]} src={logoSrc} alt={logoAlt} />
      <p className={styles["card-heading"]}>
        <span className={styles["card-role"]}>{role}</span>
        <span>{" @ "}</span>
        <a
          href={Url}
          className={styles["card-name"]}
          style={{ color: textColor }}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </p>
      <p className={styles["card-duration"]}>{duration}</p>
      {technologies && (
        <p className={styles["card-technologies"]}>{technologies}</p>
      )}
      <div className={styles["card-body"]}>
        {aboutRolePara1 && <p>{aboutRolePara1}</p>}
        {aboutRolePara2 && <p>{aboutRolePara2}</p>}
        {aboutRolePara3 && <p>{aboutRolePara3}</p>}
      </div>
    </div>
  );
};

export default Card;
