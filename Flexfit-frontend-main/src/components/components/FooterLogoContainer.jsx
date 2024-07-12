import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FooterLogoContainer.module.css";

const FooterLogoContainer = ({ className = "", fLEXFITRemovebgPreview1 }) => {
  const onFLEXFITRemovebgPreview1ImageClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  return (
    <div className={[styles.footerLogoContainer, className].join(" ")}>
      <img
        className={styles.flexfitRemovebgPreview1Icon}
        loading="lazy"
        alt=""
        src={fLEXFITRemovebgPreview1}
        onClick={onFLEXFITRemovebgPreview1ImageClick}
      />
      <div className={styles.footerDescription}>
        <div className={styles.takeYourHealthContainer}>
          <p className={styles.takeYourHealth}>
            Take your health and body to the next level with our
          </p>
          <p className={styles.comprehensiveProgramDesigned}>
            comprehensive program designed to help you
          </p>
          <p className={styles.reachYourFitness}>reach your fitness goals.</p>
        </div>
        <div className={styles.footerIcons}>
          <div className={styles.img}>
            <img className={styles.frameIcon} alt="" src="/frame-11.svg" />
          </div>
          <div className={styles.img1}>
            <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
          </div>
          <div className={styles.img2}>
            <img className={styles.frameIcon2} alt="" src="/frame-3.svg" />
          </div>
          <div className={styles.img3}>
            <img className={styles.frameIcon3} alt="" src="/frame-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLogoContainer.propTypes = {
  className: PropTypes.string,
  fLEXFITRemovebgPreview1: PropTypes.string,
};

export default FooterLogoContainer;
