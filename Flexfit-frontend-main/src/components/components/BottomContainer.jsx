import FooterLogoContainer from "./FooterLogoContainer";
import ClassesContent from "./ClassesContent";
import PropTypes from "prop-types";
import styles from "./BottomContainer.module.css";

const BottomContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.bottomContainer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <FooterLogoContainer fLEXFITRemovebgPreview1="/flexfitremovebgpreview-12@2x.png" />
          <div className={styles.classesContainer}>
            <ClassesContent />
            <div className={styles.workingHoursContainer}>
              <div className={styles.workingHoursParent}>
                <h3 className={styles.workingHours}>Working Hours</h3>
                <div className={styles.background} />
              </div>
              <div className={styles.schedule}>
                <b className={styles.mondayFriday}>Monday - Friday:</b>
                <div className={styles.am2100pm}>7:00am - 21:00pm</div>
              </div>
              <div className={styles.schedule1}>
                <b className={styles.saturday}>Saturday:</b>
                <div className={styles.am1900pm}>7:00am - 19:00pm</div>
              </div>
              <div className={styles.schedule2}>
                <b className={styles.sunday}>Sunday:</b>
                <div className={styles.closed}>Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

BottomContainer.propTypes = {
  className: PropTypes.string,
};

export default BottomContainer;
