import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  onItemContainerClick,
  onItemContainerClick1,
  onLinkClassesClick,
  onBorderContainerClick,
}) => {
  const navigate = useNavigate();

  const onLinkHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkScheduleClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onLinkClassesClick1 = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  const onLinkContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-black1 flex flex-row items-end justify-start py-2.5 px-10 box-border gap-[275.1px] shrink-0 top-[0] z-[99] sticky max-w-full text-center text-sm text-white font-montserrat mq750:gap-[69px] mq1250:gap-[138px] mq450:gap-[34px] ${className}`}
    >
      <div className="h-28 w-[1440px] relative bg-black1 hidden max-w-full" />
      <div className="w-[722.5px] flex flex-row items-end justify-between gap-[20px] max-w-full mq1050:w-[245px]">
        <img
          className="h-[92px] w-[154px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/flexfitremovebgpreview-2@2x.png"
        />
        <nav className="m-0 w-[477.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border max-w-full mq1050:hidden mq450:w-0">
          <nav className="m-0 self-stretch flex flex-col items-start justify-start z-[1] mq450:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-white font-montserrat">
              <div className="flex flex-col items-start justify-start">
                <a
                  className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[50px] cursor-pointer"
                  onClick={onLinkHomeClick}
                >
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
              <div
                className="flex flex-col items-start justify-start"
                onClick={onItemContainerClick}
              >
                <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[58px]">
                  Pricing
                </a>
              </div>
              <div
                className="flex flex-col items-start justify-start"
                onClick={onItemContainerClick1}
              >
                <a
                  className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px] cursor-pointer"
                  onClick={onLinkClassesClick}
                >
                  Trainers
                </a>
              </div>
              <div className="flex flex-col items-start justify-start">
                <a
                  className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px] cursor-pointer"
                  onClick={onLinkContactClick}
                >
                  Contact
                </a>
              </div>
            </nav>
          </nav>
        </nav>
      </div>
      <div className="w-[216.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border">
        <div className="self-stretch flex flex-row items-center justify-start z-[1]">
          <div
            className="flex-1 rounded-[3.75px] flex flex-col items-start justify-start py-1 px-[5px] border-[2px] border-solid border-gray-2400"
            onClick={onBorderContainerClick}
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="rounded-[3.75px] bg-crimson-200 flex flex-col items-start justify-center">
                <img
                  className="w-[33.1px] h-[30px] relative"
                  loading="lazy"
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
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onItemContainerClick: PropTypes.func,
  onItemContainerClick1: PropTypes.func,
  onLinkClassesClick: PropTypes.func,
  onBorderContainerClick: PropTypes.func,
};

export default FrameComponent2;
