import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import Section from "../components/Section";
import BottomContainer from "../components/BottomContainer";
import styles from "./PaymentMethod.module.css";

const PaymentMethod = () => {
  return (
    <div className={styles.paymentMethod}>
      <main className={styles.payment}>
        <img className={styles.sectionIcon} alt="" src="/section1@2x.png" />
        <FrameComponent4 />
        <section className={styles.paymentInner}>
          <FrameComponent3 />
        </section>
        <Section />
        <BottomContainer />
      </main>
    </div>
  );
};

export default PaymentMethod;
