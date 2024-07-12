import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.lineParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/line-8.svg"
      />
      <div className={styles.experienceDetails}>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceParent}>
            <h1 className={styles.experience}>Experience :</h1>
            <div className={styles.experienceYears}>
              <h1 className={styles.yearsGymTrainerContainer}>
                <p className={styles.yearsGymTrainer}>4 years Gym trainer</p>
                <p className={styles.provincialAthlete}>Provincial athlete</p>
                <p className={styles.gymEnthusiast}>Gym Enthusiast</p>
              </h1>
            </div>
          </div>
          <div className={styles.experienceImage}>
            <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
