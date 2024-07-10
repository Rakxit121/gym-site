import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const ContactInfo = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[113px] pr-20 pl-[79px] box-border max-w-full shrink-0 text-left text-11xl text-black1 font-montserrat mq750:pl-[39px] mq750:pr-10 mq750:pb-[47px] mq750:box-border mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="w-[329px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit leading-[45px] font-bold font-inherit z-[1] mq750:text-5xl mq750:leading-[36px] mq450:text-lg mq450:leading-[27px]">
            Payment Method
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[36px] max-w-full text-base font-poppins mq750:gap-[18px] mq1250:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full mq750:min-w-full">
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-7xl bg-white box-border flex flex-col items-start justify-start pt-5 px-[46px] pb-[78px] gap-[46px] max-w-full z-[1] border-[0px] border-solid border-black1 mq450:gap-[23px] mq450:pb-[33px] mq450:box-border mq1050:pl-[23px] mq1050:pr-[23px] mq1050:pb-[51px] mq1050:box-border">
              <img
                className="w-[810px] h-[858px] relative rounded-7xl hidden max-w-full"
                alt=""
                src="/rectangle-54.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="w-[678px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq750:flex-wrap">
                    <div className="w-20 relative inline-block shrink-0 z-[2]">
                      Contact
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border min-w-[348px] max-w-full text-black mq750:min-w-full">
                      <div className="self-stretch relative whitespace-nowrap z-[2]">
                        Jhonsmith93@gmail.com
                      </div>
                    </div>
                    <div className="bg-white flex flex-row items-start justify-start py-0 pr-0 pl-0.5 z-[2] border-[1px] border-solid border-black1">
                      <div className="h-[19px] w-[34px] relative bg-white box-border hidden border-[1px] border-solid border-black1" />
                      <div className="relative inline-block min-w-[32px] z-[1]">
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
                <Form className="[border:none] bg-[transparent] self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-montserrat text-xl text-black1 max-w-full gap-[20px] z-[2] mq450:flex-wrap">
                  <Form.Control type="text" />
                </Form>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-sm text-dimgray-2000 font-inter">
                <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xs bg-white flex flex-row items-start justify-start pt-0 px-[11px] pb-6 box-border gap-[46px] max-w-full z-[2] mq750:flex-wrap mq750:gap-[23px]">
                  <img
                    className="h-[435px] w-[718px] relative rounded-2xs hidden max-w-full"
                    alt=""
                    src="/rectangle-57.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                    <div className="w-4 h-4 relative rounded-[50%] bg-white box-border z-[3] border-[0px] border-solid border-crimson-300" />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[46px] min-w-[411px] max-w-full mq750:flex-wrap mq750:gap-[23px] mq750:min-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[7px] pr-[62px] pl-0 box-border gap-[24px] max-w-full z-[3] mq750:pr-[31px] mq750:box-border">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                            <div className="relative font-medium inline-block min-w-[54px]">
                              Billed to
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-silver-300">
                              <div className="self-stretch rounded-8xs bg-gray-200 overflow-hidden flex flex-row items-center justify-start py-[7px] px-3 text-gray-1800 border-[1px] border-solid border-whitesmoke-700">
                                <div className="relative font-medium inline-block min-w-[76px]">
                                  Jhon Smith
                                </div>
                              </div>
                              <div className="self-stretch rounded-8xs bg-gray-200 box-border overflow-hidden flex flex-row items-center justify-start py-[7px] px-[11px] max-w-full border-[1px] border-solid border-whitesmoke-700">
                                <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
                                  <div className="relative font-medium inline-block min-w-[90px]">
                                    Card Number
                                  </div>
                                  <div className="flex flex-row items-start justify-start gap-[3px]">
                                    <div className="w-5 rounded-sm bg-white box-border flex flex-row items-center justify-center py-px px-0.5 border-[0.7px] border-solid border-lightgray">
                                      <div className="overflow-hidden flex flex-col items-center justify-center pt-[3.8px] px-px pb-[3.9px]">
                                        <img
                                          className="w-[13.3px] h-[4.3px] relative"
                                          loading="lazy"
                                          alt=""
                                          src="/vector.svg"
                                        />
                                      </div>
                                    </div>
                                    <img
                                      className="h-4 w-5 relative rounded-sm min-h-[16px]"
                                      loading="lazy"
                                      alt=""
                                      src="/frame-46.svg"
                                    />
                                    <img
                                      className="h-4 w-5 relative rounded-sm min-h-[16px]"
                                      loading="lazy"
                                      alt=""
                                      src="/frame-47.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq750:flex-wrap">
                                <div className="flex-1 rounded-8xs bg-gray-200 box-border overflow-hidden flex flex-row items-center justify-start py-[7px] px-3 min-w-[140px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-700">
                                  <div className="relative font-medium inline-block min-w-[57px]">
                                    MM / YY
                                  </div>
                                </div>
                                <div className="flex-1 rounded-8xs bg-gray-200 box-border overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 min-w-[140px] border-[1px] border-solid border-whitesmoke-700">
                                  <div className="relative font-medium inline-block min-w-[30px]">
                                    CVV
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                              <div className="relative font-medium inline-block min-w-[55px]">
                                Country
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-gray-1800">
                                <div className="self-stretch rounded-8xs bg-gray-200 box-border overflow-hidden flex flex-row items-center justify-start py-[7px] px-[11px] max-w-full border-[1px] border-solid border-whitesmoke-700">
                                  <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
                                    <div className="relative font-medium inline-block min-w-[92px]">
                                      United States
                                    </div>
                                    <img
                                      className="h-[15px] w-[21px] relative rounded-12xs overflow-hidden shrink-0"
                                      alt=""
                                      src="/emojionev1flagforunitedstates.svg"
                                    />
                                  </div>
                                </div>
                                <div className="self-stretch rounded-8xs bg-gray-200 overflow-hidden flex flex-row items-center justify-start py-[7px] px-3 text-silver-300 border-[1px] border-solid border-whitesmoke-700">
                                  <div className="relative font-medium inline-block min-w-[61px]">
                                    Zip Code
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[442px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-center text-11xl text-white">
                          <div className="h-16 flex-1 relative max-w-full">
                            <div className="absolute top-[0px] left-[0px] rounded-6xs bg-crimson-200 w-full h-full z-[3]" />
                            <h2 className="m-0 absolute top-[13px] left-[183.8px] text-inherit font-bold font-inherit flex items-center justify-center w-[72.3px] z-[4] mq750:text-5xl mq450:text-lg">
                              Pay
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-11 w-[83px] relative object-contain z-[3]"
                      loading="lazy"
                      alt=""
                      src="/r-1-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xs bg-white box-border flex flex-row items-start justify-between pt-3.5 pb-[13px] pr-6 pl-[11px] max-w-full gap-[20px] z-[2] text-center text-xl font-montserrat border-[1px] border-solid border-gray-2300 mq450:flex-wrap">
                <div className="h-[91px] w-[718px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-2300" />
                <div className="w-[217px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[25px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3.5">
                      <img
                        className="w-4 h-4 relative object-cover z-[3]"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="flex-1 relative leading-[45px] inline-block min-w-[114px] z-[3] mq450:text-base mq450:leading-[36px]">
                      Offline Payment
                    </div>
                  </div>
                </div>
                <img
                  className="h-[60px] w-[62px] relative object-contain z-[3]"
                  alt=""
                  src="/pngclipartcomputericonsmoneybagbankcashanglehandthumbnail-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[435px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xs bg-white box-border flex flex-col items-start justify-start pt-[34px] px-[35px] pb-[203px] gap-[46px] min-w-[435px] max-w-full z-[1] text-gray-1800 font-inter border-[1px] border-solid border-black1 mq750:pt-[22px] mq750:pb-[132px] mq750:box-border mq750:min-w-full mq450:gap-[23px] mq1250:flex-1">
            <div className="w-[435px] h-[748px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xs bg-white box-border hidden max-w-full border-[1px] border-solid border-black1" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full z-[2]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative text-sm font-medium text-dimgray-2000 inline-block min-w-[121px]">
                  Membership Type
                </div>
                <div className="self-stretch rounded-8xs bg-gray-200 overflow-hidden flex flex-col items-start justify-center py-[17px] px-3 border-[1px] border-solid border-whitesmoke-700">
                  <div className="flex flex-row items-center justify-center gap-[10px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/simplelineiconscheck.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative font-semibold inline-block min-w-[96px]">
                        Pay Monthly
                      </div>
                      <div className="relative text-sm text-gray-300">
                        $39 / Month Per Member
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-gray-200 overflow-hidden flex flex-col items-start justify-center py-[17px] pr-3 pl-[11px] border-[1px] border-solid border-deepskyblue">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[10px] mq450:flex-wrap">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/simplelineiconscheck-1.svg"
                    />
                    <div className="flex-1 flex flex-row items-center justify-between min-w-[203px] gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[6px]">
                        <div className="relative font-semibold inline-block min-w-[100px]">
                          Pay Annually
                        </div>
                        <div className="relative text-sm text-gray-300">
                          $25 / Month Per Member
                        </div>
                      </div>
                      <div className="relative text-xs font-semibold text-gray-1900 text-right inline-block min-w-[57px]">
                        Save 20%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm text-dimgray-2000">
                <div className="relative font-medium inline-block min-w-[56px]">
                  Add ons
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[39px] box-border gap-[14px] max-w-full text-base text-gray-1800">
                  <div className="self-stretch rounded-8xs bg-gray-200 overflow-hidden flex flex-col items-start justify-center py-[26px] px-3 border-[1px] border-solid border-whitesmoke-700">
                    <div className="flex flex-row items-center justify-center gap-[10px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/simplelineiconscheck.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[6px]">
                        <div className="relative font-semibold inline-block min-w-[56px]">
                          Couple
                        </div>
                        <div className="flex flex-col items-start justify-start text-sm text-gray-300">
                          <div className="relative">
                            $245 / Month Per Member
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-smi font-medium inline-block max-w-full text-lightslategray-900">
                    <span>{`By Continuing `}</span>
                    <span className="text-deepskyblue">
                      you agree to our terms and conditions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[5px] text-3xl text-black1">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lg">
                  $25.00 / Month / User
                </h3>
                <div className="relative text-sm font-medium text-deepskyblue inline-block min-w-[46px] z-[2]">
                  Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
