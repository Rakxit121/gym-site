import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import InstructorCards from "../components/InstructorCards";
import Footer2 from "../components/Footer2";

const Trainers = () => {
  const navigate = useNavigate();

  const onLinkHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkScheduleClick = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onItemContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  const onLinkContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onBorderContainerClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[326px] box-border leading-[normal] tracking-[normal] text-left text-base text-white font-montserrat">
      <div className="self-stretch bg-black1 flex flex-row items-end justify-start pt-[7px] px-10 pb-2.5 box-border gap-[275.1px] top-[0] z-[99] sticky max-w-full mq1250:gap-[138px] mq450:gap-[34px] mq750:gap-[69px]">
        <header className="h-28 w-[1440px] relative bg-black1 hidden max-w-full" />
        <div className="w-[722.5px] flex flex-row items-end justify-between gap-[20px] max-w-full">
          <img
            className="h-[92px] w-[154px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/flexfitremovebgpreview-2@2x.png"
          />
          <div className="w-[477.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start z-[1]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:hidden">
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
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={onItemContainerClick}
                >
                  <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[58px]">
                    Pricing
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px]">
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-[285.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border text-center text-sm">
          <div className="self-stretch flex flex-row items-center justify-start gap-[25px] z-[1]">
            <div className="h-[23.7px] w-[44.7px]" />
            <div
              className="flex-1 rounded-[3.75px] flex flex-col items-start justify-start py-1 px-[5px] cursor-pointer border-[2px] border-solid border-gray-2400"
              onClick={onBorderContainerClick}
            >
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="rounded-[3.75px] bg-crimson-200 flex flex-col items-start justify-center">
                  <img
                    className="w-[33.1px] h-[30px] relative"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[19px] pl-[9px] z-[1]">
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
      </div>
      <FrameComponent5 instructors="Instructors" />
      <InstructorCards />
      <Footer2 />
      <div className="self-stretch h-[-416.3px] flex flex-row items-start justify-end py-0 pr-[3px] pl-0 box-border max-w-full">
        <div className="h-[-416.3px] flex-1 flex flex-row items-end justify-center pt-0 px-0 pb-[696.5px] box-border bg-[url('/public/section6@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq1050:pb-[453px] mq1050:box-border mq750:pb-[294px] mq750:box-border">
          <div className="h-[389px] w-[1240px] flex flex-col items-start justify-start py-[120px] px-[25px] box-border relative gap-[80px] max-w-[1240px] mq1250:max-w-full">
            <img
              className="w-[277px] h-[316px] absolute !m-[0] bottom-[-47px] left-[-100px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/image@2x.png"
            />
            <img
              className="w-[322px] h-[286px] absolute !m-[0] right-[-56px] bottom-[-624px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/image-118@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
