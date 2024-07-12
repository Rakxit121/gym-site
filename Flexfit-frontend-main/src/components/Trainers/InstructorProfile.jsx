import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./InstructorProfile.module.css";

const InstructorProfile = () => {
  return (
    <div className={styles.instructorProfile}>
      <main className={styles.trainers}>
        <img className={styles.sectionIcon} alt="" src="/section@2x.png" />
        <FrameComponent2 />
        <section className={styles.backgroundWrapper}>
          <div className={styles.background}>
            <div className={styles.heading1} />
            <h1 className={styles.instructorProfile1}>Instructor Profile</h1>
          </div>
        </section>
        <FrameComponent1 />
        <FrameComponent />
        <Footer />
      </main>
    </div>
  );
};

export default InstructorProfile;
