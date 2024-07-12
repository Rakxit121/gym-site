import { useState, useCallback } from "react";
import PaymentYesNo from "./PaymentYesNo";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const [isPaymentYesNoOpen, setPaymentYesNoOpen] = useState(false);

  const openPaymentYesNo = useCallback(() => {
    setPaymentYesNoOpen(true);
  }, []);

  const closePaymentYesNo = useCallback(() => {
    setPaymentYesNoOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.frameParent, className].join(" ")}>
        <div className={styles.paymentMethodWrapper}>
          <h2 className={styles.paymentMethod}>Payment Method</h2>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-54.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.contactParent}>
                    <div className={styles.contact}>Contact</div>
                    <div className={styles.jhonsmith93gmailcomWrapper}>
                      <div className={styles.jhonsmith93gmailcom}>
                        Jhonsmith93@gmail.com
                      </div>
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameItem} />
                      <a className={styles.edit}>Edit</a>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameParent1}>
                    <div className={styles.esewaIconWrapper}>
                      <div className={styles.esewaIcon} />
                    </div>
                    <input
                      className={styles.esewa}
                      placeholder="Esewa"
                      type="text"
                    />
                  </div>
                  <div className={styles.r1Wrapper}>
                    <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-57.svg"
                  />
                  <div className={styles.billedToIconWrapper}>
                    <div className={styles.billedToIcon} />
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.frameParent4}>
                          <div className={styles.billedToParent}>
                            <div className={styles.billedTo}>Billed to</div>
                            <div className={styles.cardInfoContainer}>
                              <div className={styles.cardHolderDetails}>
                                <div className={styles.jhonSmith}>
                                  Jhon Smith
                                </div>
                              </div>
                              <div className={styles.cardHolderDetails1}>
                                <div className={styles.cardNumberParent}>
                                  <div className={styles.cardNumber}>
                                    Card Number
                                  </div>
                                  <div className={styles.frameParent5}>
                                    <div className={styles.magevisaWrapper}>
                                      <div className={styles.magevisa}>
                                        <img
                                          className={styles.visaLabelIcon}
                                          alt=""
                                          src="/visa-label.svg"
                                        />
                                      </div>
                                    </div>
                                    <img
                                      className={styles.visaSpacingIcon}
                                      alt=""
                                      src="/visa-spacing.svg"
                                    />
                                    <img
                                      className={styles.expirySpacingIcon}
                                      alt=""
                                      src="/expiry-spacing.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.cardHolderDetails2}>
                                <div className={styles.mmYyWrapper}>
                                  <div className={styles.mmYy}>MM / YY</div>
                                </div>
                                <div className={styles.cvvWrapper}>
                                  <div className={styles.cvv}>CVV</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.frameWrapper3}>
                            <div className={styles.countryParent}>
                              <div className={styles.country}>Country</div>
                              <div className={styles.countryInput}>
                                <div className={styles.countrySelection}>
                                  <div className={styles.countryNameZip}>
                                    <div className={styles.unitedStates}>
                                      United States
                                    </div>
                                    <img
                                      className={
                                        styles.emojioneV1flagForUnitedStIcon
                                      }
                                      alt=""
                                      src="/emojionev1flagforunitedstates.svg"
                                    />
                                  </div>
                                </div>
                                <div className={styles.countrySelection1}>
                                  <div className={styles.zipCode}>Zip Code</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.payButtonContainerWrapper}>
                          <div className={styles.payButtonContainer}>
                            <div
                              className={styles.payButtonBackground}
                              onClick={openPaymentYesNo}
                            />
                            <h2 className={styles.pay}>Pay</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.r11}
                      loading="lazy"
                      alt=""
                      src="/r-1-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameWrapper4}>
                  <div className={styles.frameParent6}>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <input
                      className={styles.offlinePayment}
                      placeholder="Offline Payment"
                      type="text"
                    />
                  </div>
                </div>
                <img
                  className={styles.pngClipartComputerIconsMon}
                  alt=""
                  src="/pngclipartcomputericonsmoneybagbankcashanglehandthumbnail-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.membershipDetails}>
              <div className={styles.membershipOptions}>
                <div className={styles.membershipType}>Membership Type</div>
                <div className={styles.selectionStatus}>
                  <div className={styles.monthlyOption}>
                    <img
                      className={styles.simpleLineIconscheck}
                      loading="lazy"
                      alt=""
                      src="/simplelineiconscheck.svg"
                    />
                    <div className={styles.annualOption}>
                      <div className={styles.payMonthly}>Pay Monthly</div>
                      <div className={styles.monthPerMember}>
                        $39 / Month Per Member
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.selectionStatus1}>
                  <div className={styles.simpleLineIconscheckParent}>
                    <img
                      className={styles.simpleLineIconscheck1}
                      alt=""
                      src="/simplelineiconscheck-1.svg"
                    />
                    <div className={styles.frameParent7}>
                      <div className={styles.payAnnuallyParent}>
                        <div className={styles.payAnnually}>Pay Annually</div>
                        <div className={styles.monthPerMember1}>
                          $25 / Month Per Member
                        </div>
                      </div>
                      <div className={styles.save20}>Save 20%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addOnsParent}>
                <div className={styles.addOns}>Add ons</div>
                <div className={styles.addonsContainer}>
                  <div className={styles.addonsContainerInner}>
                    <div className={styles.simpleLineIconscheckGroup}>
                      <img
                        className={styles.simpleLineIconscheck2}
                        alt=""
                        src="/simplelineiconscheck.svg"
                      />
                      <div className={styles.coupleContainer}>
                        <div className={styles.couple}>Couple</div>
                        <div className={styles.couplePrice}>
                          <div className={styles.monthPerMember2}>
                            $245 / Month Per Member
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.byContinuingYouContainer}>
                    <span>{`By Continuing `}</span>
                    <span className={styles.youAgreeTo}>
                      you agree to our terms and conditions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.userContainer}>
              <div className={styles.monthUserParent}>
                <h3 className={styles.monthUser}>$25.00 / Month / User</h3>
                <div className={styles.details}>Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPaymentYesNoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentYesNo}
        >
          <PaymentYesNo onClose={closePaymentYesNo} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
