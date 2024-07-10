import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InstructorImages1 from "./InstructorImages1";
import InstructorImages from "./InstructorImages";
import PropTypes from "prop-types";

const InstructorCards = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInstructorPlaceholdersImageClick = useCallback(() => {
    navigate("/trainers1");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[7px] pr-5 pl-6 box-border max-w-full text-left text-5xl text-gray-2100 font-outfit ${className}`}
    >
      <div className="w-[1210px] flex flex-col items-end justify-start gap-[20px] max-w-full">
        <div className="self-stretch grid flex-row items-start justify-start pt-0 px-0 pb-[23.7px] gap-[20px] grid-cols-[repeat(4,_minmax(214px,_1fr))] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(214px,_370px))] mq450:grid-cols-[minmax(214px,_1fr)]">
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[400px] cursor-pointer z-[1] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-17@2x.png"
            onClick={onInstructorPlaceholdersImageClick}
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[400px] cursor-pointer z-[1] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-18@2x.png"
            onClick={onInstructorPlaceholdersImageClick}
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[400px] cursor-pointer z-[1] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-19@2x.png"
            onClick={onInstructorPlaceholdersImageClick}
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[400px] cursor-pointer z-[1] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-20@2x.png"
            onClick={onInstructorPlaceholdersImageClick}
          />
        </div>
        <div className="w-[1196px] flex flex-row items-start justify-end py-0 px-[71px] box-border max-w-full mq1250:pl-[35px] mq1250:pr-[35px] mq1250:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6.5px] max-w-full">
            <h3 className="m-0 h-[-6px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block z-[1] mq450:text-lgi mq450:leading-[33px]">
              Jacob Jones
            </h3>
            <div className="self-stretch h-[15.8px] flex flex-row items-start justify-end pt-0 px-0 pb-[15px] box-border max-w-full">
              <div className="h-[-1.9px] w-[773px] flex flex-col items-start justify-start gap-[6.7px] max-w-full">
                <h3 className="m-0 h-[-6px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[33px]">
                  Leslie Alexander
                </h3>
                <div className="self-stretch h-[-6.5px] flex flex-row items-start justify-center py-0 pr-5 pl-10 box-border shrink-0">
                  <h3 className="m-0 h-[-6px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block z-[1] mq450:text-lgi mq450:leading-[33px]">
                    Cameron Williamson
                  </h3>
                </div>
                <div className="self-stretch h-[-2.2px] flex flex-row items-start justify-end shrink-0">
                  <h3 className="m-0 h-[-2px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block z-[1] mq450:text-lgi mq450:leading-[33px]">
                    Jane Cooper
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[26px] pl-[23px] box-border max-w-full text-base text-black1">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="relative tracking-[0.02em] leading-[170.9%] inline-block min-w-[90px] z-[1]">
                  Gym trainer
                </div>
                <div className="relative tracking-[0.02em] leading-[170.9%] inline-block min-w-[90px] z-[1]">
                  Gym trainer
                </div>
                <div className="relative tracking-[0.02em] leading-[170.9%] inline-block min-w-[90px] z-[1]">
                  Gym trainer
                </div>
                <div className="relative tracking-[0.02em] leading-[170.9%] inline-block min-w-[90px] z-[1]">
                  Gym trainer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq1050:flex-wrap">
          <InstructorImages1 />
          <InstructorImages />
          <InstructorImages1
            propFlex="1"
            propPadding="unset"
            propMinWidth="262px"
          />
          <InstructorImages propGap="20px" />
        </div>
      </div>
    </section>
  );
};

InstructorCards.propTypes = {
  className: PropTypes.string,
};

export default InstructorCards;
