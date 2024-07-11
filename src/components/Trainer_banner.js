import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-base text-white font-montserrat ${className}`}
    >
      <div className="w-[436px] flex flex-col items-start justify-start gap-[20.7px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <div className="flex flex-row items-start justify-start pt-1.5 px-[41px] pb-[4.3px] relative">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/titlebg13d788348b56c629eefb2e7ad1f4d6cesvg-2.svg"
            />
            <b className="relative leading-[24px] uppercase inline-block min-w-[128px] z-[1]">
              gym trainers
            </b>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[9.3px] text-15xl text-black1">
          <h1 className="m-0 relative text-inherit leading-[51px] font-bold font-inherit mq450:text-xl mq450:leading-[31px] mq750:text-8xl mq750:leading-[41px]">
            Team Of Expert Coaches
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5 text-mini text-dimgray-1800">
            <div className="relative leading-[22.5px] font-medium">
              <p className="m-0">
                Expert team of coaches helps you succeed in any goal,
              </p>
              <p className="m-0">
                personalized guidance and motivation provided!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
