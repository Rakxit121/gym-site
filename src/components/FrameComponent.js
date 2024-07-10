import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  fLEXFITRemovebgPreview1,
  propBackgroundColor,
}) => {
  const frameFooterStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const navigate = useNavigate();

  const onFLEXFITRemovebgPreview1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-center max-w-full shrink-0 text-left text-mini text-dimgray-1800 font-montserrat ${className}`}
      style={frameFooterStyle}
    >
      <div className="w-[1240px] flex flex-row items-start justify-start py-[100px] px-[25px] box-border max-w-[1240px] mq750:pt-[65px] mq750:pb-[65px] mq750:box-border mq1250:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[18.3px] box-border gap-[309.9px] min-h-[271.31px] max-w-full shrink-0 mq750:gap-[77px] mq450:gap-[39px] mq1050:flex-wrap mq1050:gap-[155px]">
          <div className="mt-[-7.9px] flex flex-col items-start justify-start gap-[13px] min-w-[396px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="w-[123px] h-[72px] relative object-contain cursor-pointer"
              loading="lazy"
              alt=""
              src={fLEXFITRemovebgPreview1}
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
          <div className="w-[329px] flex flex-row items-start justify-start min-w-[329px] [row-gap:20px] max-w-full text-base mq450:flex-wrap mq1050:flex-1">
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
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  fLEXFITRemovebgPreview1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default FrameComponent;
