import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whoWeAre']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemContainerClick1 = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onItemContainerClick2 = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  const onItemContainerClick3 = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  const onItemContainerClick4 = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onBorderContainerClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <section
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start pt-[45px] pb-[274.5px] pr-[78px] pl-[77px] box-border gap-[252.4px] max-w-full text-center text-sm text-white font-montserrat mq450:gap-[63px] mq750:gap-[126px] mq750:pl-[38px] mq750:pr-[39px] mq750:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/r-2-1@2x.png"
        data-scroll-to="r21"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="w-[1167.7px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[676.5px] flex flex-row items-start justify-start gap-[59px] max-w-full mq750:gap-[29px]">
            <img
              className="h-[70px] w-[140px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/flexfitremovebgpreview-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start z-[1]">
                <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-white font-montserrat mq1050:hidden">
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[50px]">
                      Home
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[51px]">
                      About
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick1}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[76px]">
                      Schedule
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick2}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[58px]">
                      Pricing
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick3}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px]">
                      Trainers
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start cursor-pointer"
                    onClick={onItemContainerClick4}
                  >
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[65px]">
                      Contact
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="w-[216.1px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-center justify-start z-[1]">
              <div
                className="flex-1 rounded-[3.75px] flex flex-col items-start justify-start py-1 px-[5px] cursor-pointer border-[2px] border-solid border-gray-2400"
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
        </div>
      </div>
      <div className="w-[611.5px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-black1">
        <div className="w-[470px] flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0 box-border max-w-[calc(100%_-_42px)]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11.6px]">
            <div className="self-stretch h-[39.9px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-[244.4px] h-[39.9px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/titlebg13d788348b56c629eefb2e7ad1f4d6cesvg.svg"
              />
              <div className="absolute top-[7.5px] left-[40px] leading-[24px] uppercase font-medium flex items-center w-[430px] z-[2]">
                find your energy
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-29xl text-white mq750:gap-[20px]">
              <h1 className="m-0 relative text-inherit tracking-[-0.01px] leading-[72px] uppercase z-[1] font-inherit mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
                <p className="m-0">
                  <b>make your body</b>
                </p>
                <p className="m-0 font-thin">{`fit & perfect`}</p>
              </h1>
              <div className="flex flex-row items-start justify-start py-0 px-[5px] text-center text-mini text-black1">
                <div className="bg-white flex flex-row items-start justify-start pt-[17.3px] px-[41px] pb-[14.7px] z-[1]">
                  <div className="relative leading-[23px] uppercase font-semibold inline-block min-w-[118px]">
                    our classes  
                  </div>
                  <div className="h-[55px] w-[200px] relative box-border hidden border-[1px] border-solid border-gray-2600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[233.6px] w-[22.5px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/container@2x.png"
        />
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
