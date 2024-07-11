import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-mini text-white font-montserrat ${className}`}
    >
      <div className="w-[482px] flex flex-col items-start justify-start gap-[14.9px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <div className="flex flex-row items-start justify-start pt-[9.3px] px-[52px] pb-[5.3px] relative">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/titlebg13d788348b56c629eefb2e7ad1f4d6cesvg-4.svg"
            />
            <b className="relative leading-[23px] uppercase inline-block min-w-[126px] z-[1]">
              PRICING CHART
            </b>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[9.3px] text-15xl text-black1">
          <div className="flex flex-row items-start justify-end py-0 pr-11 pl-[45px] mq750:pl-[22px] mq750:pr-[22px] mq750:box-border">
            <h1 className="m-0 relative text-inherit leading-[51px] font-bold font-inherit mq750:text-8xl mq750:leading-[41px] mq450:text-xl mq450:leading-[31px]">
              Exclusive Pricing Plan
            </h1>
          </div>
          <div className="relative text-mini leading-[22.5px] font-medium text-dimgray-1800">
            <p className="m-0">
              Gymat an unknown printer took a galley of type and scrambled
            </p>
            <p className="m-0">make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
