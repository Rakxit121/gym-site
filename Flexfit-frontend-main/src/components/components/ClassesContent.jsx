import PropTypes from "prop-types";
import styles from "./ClassesContent.module.css";

const ClassesContent = ({ className = "" }) => {
  return (
    <div className={[styles.classesContent, className].join(" ")}>
      <div className={styles.classesHeader}>
        <h3 className={styles.ourClasses}>Our Classes</h3>
        <div className={styles.background} />
      </div>
      <div className={styles.classTypes}>
        <div className={styles.fitnessClasses}>Fitness Classes</div>
      </div>
      <div className={styles.classTypes1}>
        <div className={styles.aerobicsClasses}>Aerobics Classes</div>
      </div>
      <div className={styles.classTypes2}>
        <div className={styles.powerYoga}>Power Yoga</div>
      </div>
      <div className={styles.classTypes3}>
        <div className={styles.learnMachines}>Learn Machines</div>
      </div>
      <div className={styles.fullBodyStrength}>Full-body Strength</div>
    </div>
  );
};

ClassesContent.propTypes = {
  className: PropTypes.string,
};

export default ClassesContent;
