import { useCallback } from "react";
import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  const onFLEXFITRemovebgPreview1ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='r21']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
      className={`absolute top-[5455.5px] left-[100px] w-[1240px] flex flex-row items-start justify-start py-[100px] px-[25px] box-border max-w-[1240px] text-left text-mini text-dimgray-1800 font-montserrat mq1250:max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[18.3px] box-border gap-[309.9px] min-h-[271.31px] max-w-full mq1050:flex-wrap">
        <div className="mt-[-7.8px] flex flex-col items-start justify-start gap-[12.9px] min-w-[396px] max-w-full mq1050:flex-1 mq750:min-w-full">
          <img
            className="w-[123px] h-[72px] relative object-contain cursor-pointer"
            loading="lazy"
            alt=""
            src="/flexfitremovebgpreview-1-1@2x.png"
            onClick={onFLEXFITRemovebgPreview1ImageClick}
          />
          <div className="flex flex-col items-start justify-start gap-[20.3px]">
            <div className="relative leading-[22.5px] font-medium">
              <p className="m-0">
                Take your health and body to the next level with our
              </p>
              <p className="m-0">comprehensive program designed to help you</p>
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
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
              </div>
              <div className="h-[38px] w-[37.4px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                <img
                  className="w-[37.4px] h-[38px] relative"
                  loading="lazy"
                  alt=""
                  src="/frame-3.svg"
                />
              </div>
              <div className="h-[38px] w-[40.3px] rounded-9980xl bg-whitesmoke-700 flex flex-col items-start justify-start">
                <img
                  className="w-[40.3px] h-[38px] relative"
                  loading="lazy"
                  alt=""
                  src="/frame-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[329px] flex flex-row items-start justify-start min-w-[329px] [row-gap:20px] max-w-full text-base mq1050:flex-1 mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[20px] min-w-[154px] mq450:flex-1">
            <div className="flex flex-col items-start justify-start gap-[16px] text-3xl text-black1">
              <div className="flex flex-col items-start justify-start">
                <h3 className="m-0 relative text-inherit leading-[33px] font-bold font-inherit mq450:text-lg mq450:leading-[26px]">
                  Our Classes
                </h3>
                <div className="w-[70px] h-1 relative bg-crimson-100 z-[1]" />
              </div>
              <div className="relative text-base leading-[24px] font-medium text-dimgray-1800 inline-block min-w-[122px]">
                Fitness Classes
              </div>
            </div>
            <div className="relative leading-[24px] font-medium">
              Aerobics Classes
            </div>
            <div className="relative leading-[24px] font-medium inline-block min-w-[97px]">
              Power Yoga
            </div>
            <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
              Learn Machines
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
              <b className="self-stretch relative leading-[24px]">Saturday:</b>
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
    </footer>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
