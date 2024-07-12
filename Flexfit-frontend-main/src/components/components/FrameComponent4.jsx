import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkHomeClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onLinkScheduleClick = useCallback(() => {
    // Please sync "Schedule" to the project
  }, []);

  const onItemContainerClick = useCallback(() => {
    // Please sync "Membership" to the project
  }, []);

  const onLinkClassesClick = useCallback(() => {
    // Please sync "Trainers" to the project
  }, []);

  const onLinkContactClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onBorderClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.flexfitRemovebgPreview2Parent}>
          <img
            className={styles.flexfitRemovebgPreview2Icon}
            loading="lazy"
            alt=""
            src="/flexfitremovebgpreview-2@2x.png"
          />
          <nav className={styles.containerWrapper}>
            <nav className={styles.container}>
              <nav className={styles.list}>
                <div className={styles.item}>
                  <a className={styles.linkHome} onClick={onLinkHomeClick}>
                    Home
                  </a>
                </div>
                <div className={styles.item1}>
                  <a className={styles.linkAbout}>About</a>
                </div>
                <div className={styles.item2}>
                  <a
                    className={styles.linkSchedule}
                    onClick={onLinkScheduleClick}
                  >
                    Schedule
                  </a>
                </div>
                <div className={styles.item3} onClick={onItemContainerClick}>
                  <a className={styles.linkPricing}>Pricing</a>
                </div>
                <div className={styles.item4}>
                  <a
                    className={styles.linkClasses}
                    onClick={onLinkClassesClick}
                  >
                    Trainers
                  </a>
                </div>
                <div className={styles.item5}>
                  <a
                    className={styles.linkContact}
                    onClick={onLinkContactClick}
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </nav>
          </nav>
        </div>
        <div className={styles.containerContainer}>
          <div className={styles.container1}>
            <div className={styles.container2} />
            <button className={styles.border} onClick={onBorderClick}>
              <div className={styles.button}>
                <div className={styles.img}>
                  <img className={styles.frameIcon} alt="" src="/frame.svg" />
                </div>
                <div className={styles.heading3margin}>
                  <div className={styles.heading3}>
                    <b className={styles.joinClassNow}>join class now</b>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.background}>
        <h2 className={styles.payment}>Payment</h2>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
