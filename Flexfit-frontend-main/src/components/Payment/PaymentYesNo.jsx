import { useCallback } from "react";
import Link from "./Link";
import PropTypes from "prop-types";
import styles from "./PaymentYesNo.module.css";

const PaymentYesNo = ({ className = "" }) => {
  const onLinkClick = useCallback(() => {
    // Please sync "Payment Confirmation" to the project
  }, []);

  return (
    <div className={[styles.paymentYesNo, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <section className={styles.paymentYesNoInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.container} />
          <div className={styles.subscriptionInfo}>
            <div className={styles.membershipDetails}>
              <div className={styles.confirmYourSubscriptionWrapper}>
                <h2 className={styles.confirmYourSubscription}>
                  {" "}
                  Confirm Your Subscription
                </h2>
              </div>
              <div className={styles.youreAboutTo}>
                You're about to subscribe to our premium gym membership plan,
                unlocking exclusive access to advanced workout programs,
                personalized training plans, and much more.
              </div>
            </div>
            <div className={styles.membershipPlanPremiumContainer}>
              <ul className={styles.membershipPlanPremiumMonth}>
                <li className={styles.membershipPlanPremium}>
                  Membership Plan: Premium
                </li>
                <li className={styles.monthlyFeeXxxx}>Monthly Fee: $XX.XX</li>
                <li>
                  Benefits: Advanced workout programs, personalized training
                  plans, priority booking for classes, 24/7 access.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.confirmationQuestion}>
            <b className={styles.areYouSure}>
              Are you sure you want to proceed?
            </b>
          </div>
          <div className={styles.actionButtons}>
            <div className={styles.buttonContainer}>
              <button className={styles.link} onClick={onLinkClick}>
                <div className={styles.confirm}>Confirm</div>
              </button>
              <Link />
            </div>
          </div>
        </div>
      </section>
      <a className={styles.x}>X</a>
    </div>
  );
};

PaymentYesNo.propTypes = {
  className: PropTypes.string,
};

export default PaymentYesNo;
