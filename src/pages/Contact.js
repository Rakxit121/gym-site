import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const Contact = () => {
  const navigate = useNavigate();

  const onFLEXFITRemovebgPreview1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkScheduleClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onLinkPricingClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  const onItemContainerClick = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  return (
    <div className="w-full h-[2331px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq1050:h-auto mq1050:min-h-[2331]">
      <section className="absolute top-[1769px] left-[100px] w-[1240px] flex flex-row items-start justify-start py-[100px] px-[25px] box-border max-w-[1240px] text-left text-mini text-dimgray-1800 font-montserrat mq1250:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[18.3px] box-border gap-[309.9px] min-h-[271.31px] max-w-full shrink-0 mq1050:flex-wrap">
          <div className="mt-[-7.9px] flex flex-col items-start justify-start gap-[13px] min-w-[396px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="w-[123px] h-[72px] relative object-cover cursor-pointer"
              loading="lazy"
              alt=""
              src="/flexfitremovebgpreview-12@2x.png"
              onClick={onFLEXFITRemovebgPreview1ImageClick}
            />
            <div className="flex flex-col items-start justify-start gap-[20.2px]">
              <div className="relative leading-[22.5px] font-medium">
                <p className="m-0">
                  Take your health and body to the next level with our
                </p>
                <p className="m-0">
                  comprehensive program designed to help you
                </p>
                <p className="m-0">reach your fitness goals.</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[17.5px]">
                <div className="h-[38px] w-[38px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                  <img
                    className="w-[38px] h-[38px] relative"
                    loading="lazy"
                    alt=""
                    src="/frame-1.svg"
                  />
                </div>
                <div className="h-[38px] w-[38px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                  <img
                    className="w-[38px] h-[38px] relative"
                    alt=""
                    src="/frame-2.svg"
                  />
                </div>
                <div className="h-[38px] w-[37.4px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                  <img
                    className="w-[37.4px] h-[38px] relative"
                    alt=""
                    src="/frame-3.svg"
                  />
                </div>
                <div className="h-[38px] w-[40.3px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                  <img
                    className="w-[40.3px] h-[38px] relative"
                    alt=""
                    src="/frame-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[329px] flex flex-row items-start justify-start min-w-[329px] [row-gap:20px] max-w-full text-base mq1050:flex-1 mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[16px] min-w-[154px] mq450:flex-1">
              <div className="flex flex-col items-start justify-start text-3xl text-black1">
                <h3 className="m-0 relative text-inherit leading-[33px] font-bold font-inherit mq450:text-lg mq450:leading-[26px]">
                  Our Classes
                </h3>
                <div className="w-[70px] h-1 relative bg-crimson-100 z-[1]" />
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="relative leading-[24px] font-medium inline-block min-w-[122px]">
                  Fitness Classes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="relative leading-[24px] font-medium">
                  Aerobics Classes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="relative leading-[24px] font-medium inline-block min-w-[97px]">
                  Power Yoga
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
                  Learn Machines
                </div>
              </div>
              <div className="relative leading-[24px] font-medium">
                Full-body Strength
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[114px]">
              <div className="flex flex-col items-start justify-start text-3xl text-black1">
                <h3 className="m-0 relative text-inherit leading-[33px] font-bold font-inherit mq450:text-lg mq450:leading-[26px]">
                  Working Hours
                </h3>
                <div className="w-[70px] h-1 relative bg-crimson-100 z-[1]" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1">
                <b className="self-stretch relative leading-[24px]">
                  Monday - Friday:
                </b>
                <div className="self-stretch relative leading-[24px] font-medium whitespace-nowrap z-[1]">
                  7:00am - 21:00pm
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1">
                <b className="self-stretch relative leading-[24px]">
                  Saturday:
                </b>
                <div className="self-stretch relative leading-[24px] font-medium whitespace-nowrap z-[1]">
                  7:00am - 19:00pm
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative leading-[24px]">Sunday:</b>
                <div className="self-stretch relative leading-[24px] font-medium z-[1]">
                  Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-left text-11xl text-white font-montserrat">
        <header className="self-stretch bg-black1 flex flex-row items-start justify-start py-2.5 px-10 box-border gap-[214.6px] top-[0] z-[99] sticky max-w-full text-left text-base text-white font-montserrat mq750:gap-[54px] mq1250:gap-[107px] mq450:gap-[27px]">
          <div className="h-28 w-[1440px] relative bg-black1 hidden max-w-full" />
          <div className="w-[787.1px] flex flex-row items-start justify-between gap-[20px] max-w-full">
            <img
              className="h-[92px] w-[154px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/flexfitremovebgpreview-2@2x.png"
            />
            <div className="w-[538px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full">
              <div
                className="self-stretch flex flex-col items-start justify-start cursor-pointer z-[1]"
                onClick={onFLEXFITRemovebgPreview1ImageClick}
              >
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:hidden">
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[50px]">
                      Home
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[51px]">
                      About
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <a
                      className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[76px] cursor-pointer"
                      onClick={onLinkScheduleClick}
                    >
                      Schedule
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <a
                      className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[58px] cursor-pointer"
                      onClick={onLinkPricingClick}
                    >
                      Pricing
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px]">
                      Trainers
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px]">
                      Contact
                    </a>
                  </div>
                  <div className="h-6 w-[38px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[216.1px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-center text-sm">
            <div className="self-stretch flex flex-row items-center justify-start z-[1]">
              <div className="flex-1 rounded-[3.75px] flex flex-col items-start justify-start py-1 px-[5px] border-[2px] border-solid border-gray-2400">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="rounded-[3.75px] bg-crimson-200 flex flex-col items-start justify-center">
                    <img
                      className="w-[33.1px] h-[30px] relative"
                      alt=""
                      src="/frame.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[19px] pl-[9px]">
                    <div className="flex flex-col items-center justify-start">
                      <b className="relative tracking-[0.7px] leading-[21px] uppercase whitespace-nowrap">
                        join class now
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-end justify-start gap-[27px] max-w-full">
          <div className="self-stretch h-[405px] flex flex-row items-end justify-center py-[25px] px-5 box-border bg-[url('/public/background2@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <h2 className="m-0 relative text-inherit leading-[45px] font-bold font-inherit mq750:text-5xl mq750:leading-[36px] mq450:text-lg mq450:leading-[27px]">
              Contact Us
            </h2>
          </div>
          <FormContainer />
        </div>
      </section>
      <img
        className="absolute top-[1271px] left-[0px] w-[1440px] h-[439px] object-cover z-[3]"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default Contact;
