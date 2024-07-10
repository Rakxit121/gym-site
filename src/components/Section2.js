import { useCallback } from "react";
import FrameComponent1 from "./FrameComponent1";
import Container from "./Container";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Section2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  return (
    <section
      className={`absolute w-full top-[4266.2px] right-[0px] left-[0px] flex flex-row items-start justify-center bg-[url('/public/section3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-11xl text-dimgray-1400 font-montserrat ${className}`}
    >
      <div className="w-[1240px] flex flex-col items-end justify-start pt-[110px] px-[25px] pb-[120px] box-border gap-[80.7px] max-w-[1240px] mq1250:max-w-full mq450:gap-[20px] mq750:gap-[40px]">
        <FrameComponent1 />
        <div className="self-stretch grid flex-row items-start justify-start gap-[25px] max-w-full grid-cols-[repeat(3,_minmax(285px,_1fr))] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(285px,_494px))] mq750:grid-cols-[minmax(285px,_1fr)]">
          <div className="flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[316px] w-[277px] absolute !m-[0] top-[-228.5px] left-[-125px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="flex-1 shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_8px_10px_-6px_rgba(0,_0,_0,_0.1)] bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[50px] box-border gap-[30px] max-w-full z-[1]">
              <Container image="/image-8@2x.png" beginner="Beginner" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px]">
                <div className="flex flex-col items-end justify-start gap-[128px]">
                  <div className="flex flex-row items-start justify-end py-0 px-2">
                    <div className="flex flex-col items-start justify-start gap-[9.5px]">
                      <div className="flex flex-row items-end justify-start gap-[13.2px]">
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-7">
                          <h2 className="m-0 relative text-inherit leading-[45px] font-normal font-inherit inline-block min-w-[19px] mq450:text-lg mq450:leading-[27px] mq750:text-5xl mq750:leading-[36px]">
                            $
                          </h2>
                        </div>
                        <b className="relative text-36xl leading-[83px] inline-block text-black1 min-w-[68px] mq450:text-14xl mq450:leading-[49px] mq750:text-25xl mq750:leading-[66px]">
                          39
                        </b>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px] text-3xl">
                          <h3 className="m-0 relative text-inherit leading-[33px] font-normal font-inherit inline-block min-w-[45px] mq450:text-lg mq450:leading-[26px]">
                            p/m
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[13px] text-base text-dimgray-1800">
                        <div className="flex flex-col items-start justify-start gap-[20px]">
                          <div className="flex flex-row items-start justify-start py-0 px-2">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[85px]">
                              Free Hand
                            </div>
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                            Gym Fitness
                          </div>
                          <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
                            Weight Loss
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-crimson-200 flex flex-row items-start justify-start pt-[17.3px] px-[29px] pb-[14.7px] relative cursor-pointer text-mini text-white"
                    onClick={onLinkContainerClick}
                  >
                    <div className="relative leading-[23px] uppercase font-semibold">
                      purchase now  
                    </div>
                    <div className="h-full w-full absolute !m-[0] top-[-12px] right-[-12px] box-border z-[1] border-[2px] border-solid border-crimson-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_8px_10px_-6px_rgba(0,_0,_0,_0.1)] bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[50px] box-border gap-[30px] max-w-full">
            <Container image="/image-9@2x.png" beginner="Intermediate" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px]">
              <div className="flex flex-col items-end justify-start gap-[84px]">
                <div className="w-[174.6px] flex flex-row items-start justify-end py-0 px-2 box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[9.5px]">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[11.2px]">
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-7">
                        <h2 className="m-0 relative text-inherit leading-[45px] font-normal font-inherit inline-block min-w-[19px] mq450:text-lg mq450:leading-[27px] mq750:text-5xl mq750:leading-[36px]">
                          $
                        </h2>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0 text-36xl text-black1">
                        <b className="relative leading-[83px] inline-block min-w-[68px] mq450:text-14xl mq450:leading-[49px] mq750:text-25xl mq750:leading-[66px]">
                          65
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px] text-3xl">
                        <h3 className="m-0 relative text-inherit leading-[33px] font-normal font-inherit inline-block min-w-[45px] mq450:text-lg mq450:leading-[26px]">
                          p/m
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-3.5 text-base text-dimgray-1800">
                      <div className="flex flex-col items-start justify-start gap-[20px]">
                        <div className="flex flex-row items-start justify-start py-0 px-2">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[85px]">
                            Free Hand
                          </div>
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                          Gym Fitness
                        </div>
                        <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
                          Weight Loss
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-5">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[61px]">
                            Cycling
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-crimson-200 flex flex-row items-start justify-start pt-[17.3px] px-[29px] pb-[14.7px] relative cursor-pointer text-mini text-white"
                  onClick={onLinkContainerClick}
                >
                  <div className="relative leading-[23px] uppercase font-semibold">
                    purchase now  
                  </div>
                  <div className="h-full w-full absolute !m-[0] top-[-12px] right-[-12px] box-border z-[1] border-[2px] border-solid border-crimson-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[286px] w-[322px] absolute !m-[0] right-[-125px] bottom-[-120px] overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
            <div className="flex-1 shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_8px_10px_-6px_rgba(0,_0,_0,_0.1)] bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[50px] box-border gap-[30px] max-w-full z-[1]">
              <Container image="/image-11@2x.png" beginner="Professional" />
              <div className="w-[368.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[206.2px] flex flex-col items-end justify-start gap-[9.5px]">
                  <div className="flex flex-row items-end justify-start gap-[13px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-7">
                      <h2 className="m-0 relative text-inherit leading-[45px] font-normal font-inherit inline-block min-w-[19px] mq450:text-lg mq450:leading-[27px] mq750:text-5xl mq750:leading-[36px]">
                        $
                      </h2>
                    </div>
                    <b className="relative text-36xl leading-[83px] inline-block text-black1 min-w-[97px] mq450:text-14xl mq450:leading-[49px] mq750:text-25xl mq750:leading-[66px]">
                      100
                    </b>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px] text-3xl">
                      <h3 className="m-0 relative text-inherit leading-[33px] font-normal font-inherit inline-block min-w-[45px] mq450:text-lg mq450:leading-[26px]">
                        p/m
                      </h3>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[30.5px] text-base text-dimgray-1800">
                    <div className="flex flex-col items-start justify-start gap-[20px]">
                      <div className="flex flex-row items-start justify-start py-0 px-[23px]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[85px]">
                          Free Hand
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                          Gym Fitness
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
                          Weight Loss
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[35px]">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[61px]">
                          Cycling
                        </div>
                      </div>
                      <div className="relative leading-[24px] font-medium">
                        Personal Trainer
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 pr-1.5 pl-0 text-mini text-white">
                    <div
                      className="bg-crimson-200 flex flex-row items-start justify-start pt-[17.3px] px-[29px] pb-[14.7px] relative cursor-pointer"
                      onClick={onLinkContainerClick}
                    >
                      <div className="relative leading-[23px] uppercase font-semibold">
                        purchase now  
                      </div>
                      <div className="h-full w-full absolute !m-[0] top-[-12px] right-[-12px] box-border z-[1] border-[2px] border-solid border-crimson-400" />
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

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
