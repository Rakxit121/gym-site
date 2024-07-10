import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[186px] left-[306px] bg-gray-100 w-[1096px] flex flex-col items-start justify-start pt-[19px] px-4 pb-0 box-border gap-[34px] max-w-full z-[1] text-left text-sm-5 text-silver-100 font-inter ${className}`}
    >
      <div className="w-[1096px] h-[531px] relative bg-gray-100 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border gap-[39px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[238px] rounded-[8.25px] bg-gray-100 box-border flex flex-row items-end justify-start pt-4 px-4 pb-[18px] gap-[10px] z-[2] border-[1px] border-solid border-gainsboro-200">
              <div className="h-14 w-[238px] relative rounded-[8.25px] bg-gray-100 box-border hidden border-[1px] border-solid border-gainsboro-200" />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-3 h-3 relative object-cover z-[3]"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
              <div className="w-[101px] relative flex items-center shrink-0 z-[3]">
                Search user...
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
              <img
                className="w-[18px] h-3 relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[971px] flex flex-row items-start justify-between gap-[20px] max-w-full text-dimgray-1900 mq975:flex-wrap">
          <div className="flex flex-col items-start justify-start py-0 pr-[34px] pl-0">
            <img
              className="w-[18px] h-[18px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
            <div className="relative inline-block min-w-[78px] z-[2]">
              First Name
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-dimgray-2300">
            <div className="relative inline-block min-w-[76px] z-[2]">
              Last Name
            </div>
          </div>
          <div className="w-[66px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-xs-5 text-dimgray-2600">
            <div className="w-[26px] relative flex items-center z-[2]">CIN</div>
          </div>
          <div className="w-[143px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-dimgray-2800">
            <div className="relative inline-block min-w-[61px] z-[2]">
              Birthday
            </div>
          </div>
          <div className="w-[137px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-dimgray-2100">
            <div className="relative inline-block min-w-[103px] z-[2]">
              Phone Number
            </div>
          </div>
          <div className="w-[54px] relative text-dimgray-2400 flex items-center shrink-0 z-[2]">
            Gender
          </div>
          <div className="w-12 relative text-dimgray-2200 flex items-center shrink-0 z-[2]">
            Status
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[59px] max-w-full text-smi-5 text-dimgray-1300 mq1050:flex-wrap">
        <div className="w-[164px] flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border gap-[12px]">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <img
                className="w-[18px] h-[18px] relative object-contain z-[2]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="w-[18px] h-[18px] relative object-contain z-[2]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="w-[19px] h-[19px] relative object-cover z-[2]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="w-[18px] h-[18px] relative object-contain z-[2]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="w-[18px] h-[18px] relative object-contain z-[2]"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[27.5px]">
            <div className="w-[102px] flex flex-row items-start justify-start gap-[24px]">
              <img
                className="h-10 w-[41px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-81@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <div className="self-stretch relative z-[2]">Salim</div>
              </div>
            </div>
            <div className="w-[111px] flex flex-row items-start justify-start gap-[24px] text-xs-5 text-gray-1000">
              <img
                className="h-[41px] w-[41px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-91@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch relative z-[2]">Brahim</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-sm-5 text-dimgray-700">
              <img
                className="h-[41px] w-[41px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-101@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch relative z-[2]">Marwan</div>
              </div>
            </div>
            <div className="w-[110px] flex flex-row items-start justify-start gap-[24px] text-xs-5 text-gray-1100">
              <img
                className="h-[41px] w-[41px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-111@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch relative z-[2]">Fatima</div>
              </div>
            </div>
            <div className="w-[106px] flex flex-row items-start justify-start gap-[24px] text-dimgray-500">
              <img
                className="h-10 w-[41px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-121@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch relative z-[2]">Salma</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[362px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full text-xs-5 text-dimgray-200">
          <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-between min-w-[123px] gap-[20px]">
              <div className="w-[75px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[53.3px]">
                  <div className="w-[34px] relative flex items-center z-[2]">
                    Srew
                  </div>
                  <div className="self-stretch relative text-smi-5 text-dimgray-100 z-[2]">
                    Ait Goumri
                  </div>
                  <div className="w-[39px] relative text-dimgray-400 flex items-center z-[2]">
                    Karim
                  </div>
                  <div className="w-[41px] relative text-smi-5 text-gray-1600 flex items-center z-[2]">
                    Salma
                  </div>
                  <div className="w-[30px] relative text-gray-900 flex items-center z-[2]">
                    Badi
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[51px] text-mini-5 text-dimgray-700">
                <div className="relative text-sm-5 inline-block min-w-[64px] z-[2]">
                  J098765
                </div>
                <div className="relative text-dimgray-1200 inline-block min-w-[64px] z-[2]">
                  J787643
                </div>
                <div className="relative text-dimgray-1100 inline-block min-w-[63px] z-[2]">
                  J543212
                </div>
                <div className="relative text-gray-1600 inline-block min-w-[65px] z-[2]">
                  J676543
                </div>
                <div className="relative text-dimgray-1500 inline-block min-w-[62px] z-[2]">
                  J789814
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[50.5px] min-w-[129px] text-sm-5 text-gray-1300 mq450:flex-1">
              <div className="relative inline-block min-w-[94px] z-[2]">
                28 June 2000
              </div>
              <div className="relative text-dimgray-1200 inline-block min-w-[106px] z-[2]">
                11 August 2022
              </div>
              <div className="relative text-dimgray-700 inline-block min-w-[96px] z-[2]">
                02 April 2000
              </div>
              <div className="relative text-gray-1200 inline-block min-w-[129px] z-[2]">
                09 December 1999
              </div>
              <div className="relative text-dimgray-600 inline-block min-w-[96px] z-[2]">
                26 April 2003
              </div>
            </div>
          </div>
        </div>
        <div className="w-[420px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-sm-5 text-dimgray-1600">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50.5px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between py-0 pr-3.5 pl-0 gap-[20px] text-2xs-5 text-dimgray-800 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-sm-5">
                <div className="relative inline-block min-w-[121px] whitespace-nowrap z-[2]">
                  +212 678-542310
                </div>
              </div>
              <div className="w-[37px] flex flex-col items-start justify-end pt-0 pb-px pr-1.5 pl-0 box-border text-gray-500">
                <div className="self-stretch relative z-[2]">male</div>
              </div>
              <div className="w-16 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border text-center text-gray-700">
                <div className="w-6 relative flex items-center justify-center z-[2]">
                  Yes
                </div>
              </div>
              <img
                className="h-[15px] w-1 relative object-contain z-[2] mq450:w-full mq450:h-1"
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-end justify-between py-0 pr-3 pl-0 gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                <div className="relative inline-block min-w-[121px] whitespace-nowrap z-[2]">
                  +212 756-431988
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 text-smi-5 text-gray-1700">
                <div className="relative inline-block min-w-[32px] z-[2]">
                  male
                </div>
              </div>
              <div className="w-[63px] flex flex-col items-start justify-end pt-0 pb-px pr-[39px] pl-0 box-border text-center text-2xs-5 text-gray-1500">
                <div className="self-stretch relative z-[2]">Yes</div>
              </div>
              <div className="w-[7px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border text-center text-7xs-5 text-lightslategray-1000">
                <div className="self-stretch relative z-[2]">：</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-between py-0 pr-3 pl-0 gap-[20px] text-dimgray-300 mq450:flex-wrap">
              <div className="relative inline-block min-w-[122px] whitespace-nowrap z-[2]">
                +212 678-543477
              </div>
              <div className="flex flex-col items-start justify-end pt-0 pb-px pr-1.5 pl-0 text-smi-5 text-dimgray-400">
                <div className="relative inline-block min-w-[32px] z-[2]">
                  male
                </div>
              </div>
              <div className="w-16 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-center text-2xs-5 text-gray-1600">
                <div className="w-6 relative flex items-center justify-center z-[2]">
                  Yes
                </div>
              </div>
              <div className="w-[7px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border text-center text-7xs-5 text-lightslategray-800">
                <div className="self-stretch relative z-[2]">：</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-between py-0 pr-3.5 pl-0 gap-[20px] text-gray-1400 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                <div className="relative inline-block min-w-[121px] whitespace-nowrap z-[2]">
                  +212 607-452098
                </div>
              </div>
              <div className="w-[49px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border text-dimgray-300">
                <div className="self-stretch relative z-[2]">female</div>
              </div>
              <div className="w-[75px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-center text-2xs-5 text-gray-700">
                <div className="w-6 relative flex items-center justify-center z-[2]">
                  Yes
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                <img
                  className="w-1 h-[15px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[35px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="relative inline-block min-w-[121px] whitespace-nowrap z-[2]">
                    +212 678-543412
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 text-smi-5 text-gray-400">
                    <div className="relative inline-block min-w-[32px] z-[2]">
                      male
                    </div>
                  </div>
                  <div className="w-16 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-center text-2xs-5 text-gray-600">
                    <div className="w-6 relative flex items-center justify-center z-[2]">
                      Yes
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-1 h-[15px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/image-15@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-start py-0 pr-0 pl-5 box-border gap-[3px] max-w-full text-smi-5 text-dimgray-200 mq450:flex-wrap">
                <div className="w-[102px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                  <div className="self-stretch relative z-[2]">
                    Rows per page:
                  </div>
                </div>
                <div className="flex flex-row items-end justify-start gap-[19px] text-base-5 text-dimgray-400">
                  <div className="bg-white flex flex-row items-start justify-start pt-[7px] pb-px pr-[9px] pl-[11px] z-[2]">
                    <div className="h-[29px] w-[59px] relative bg-white hidden" />
                    <div className="h-[22px] w-10 relative">
                      <div className="absolute top-[0px] left-[11px] bg-white w-[29px] h-[22px] z-[1]">
                        <div className="absolute top-[0px] left-[0px] bg-white w-full h-full hidden" />
                        <img
                          className="absolute top-[8px] left-[9px] w-[11px] h-[5px] object-contain z-[2]"
                          loading="lazy"
                          alt=""
                          src="/image-16@2x.png"
                        />
                      </div>
                      <div className="absolute top-[0px] left-[0px] bg-white w-[17px] h-[21px] z-[2]">
                        <div className="absolute top-[0px] left-[0px] bg-white w-full h-full hidden" />
                        <img
                          className="absolute top-[5px] left-[5px] w-2 h-2.5 object-contain z-[3]"
                          loading="lazy"
                          alt=""
                          src="/image-17@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 pb-0.5 pr-[9px] pl-0">
                    <div className="relative inline-block min-w-[65px] z-[2]">
                      1-5of13
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                    <div className="w-12 h-3 relative">
                      <img
                        className="absolute top-[0px] left-[41px] w-[7px] h-3 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/image-18@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[0px] w-2 h-3 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/image-19@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
