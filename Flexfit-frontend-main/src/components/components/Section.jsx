import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  const onLinkClick = useCallback(() => {
    // Please sync "Membership" to the project
  }, []);

  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.needAFitnessTrainerParent}>
          <h1 className={styles.needAFitness}>Need a Fitness Trainer?</h1>
          <b className={styles.callUs123456789Container}>
            <span>Call us:</span>
            <span className={styles.span}> +123-456789</span>
          </b>
        </div>
        <div className={styles.linkWrapper}>
          <button className={styles.link} onClick={onLinkClick}>
            <div className={styles.purchaseNow}>purchase now  </div>
            <div className={styles.border} />
          </button>
        </div>
      </div>
      <img
        className={styles.sectionChild}
        loading="lazy"
        alt=""
        src="/line-81.svg"
      />
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
