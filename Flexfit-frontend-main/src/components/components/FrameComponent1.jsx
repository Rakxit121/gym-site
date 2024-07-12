import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.trainersInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.imageParent}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <div className={styles.lineWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <div className={styles.instructorNameBackground}>
          <img
            className={styles.instructorNameBackgroundChild}
            loading="lazy"
            alt=""
            src="/rectangle-17@2x.png"
          />
          <div className={styles.instructorName}>
            <div className={styles.nameContainer}>
              <h1 className={styles.jacobJones}>Jacob Jones</h1>
              <div className={styles.trainerType}>
                <h1 className={styles.gymTrainer}>Gym trainer</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameItem} />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
