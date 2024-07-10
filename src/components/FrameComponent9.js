import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full shrink-0 text-left text-21xl text-gray-2100 font-outfit ${className}`}
    >
      <div className="w-[1305px] flex flex-row flex-wrap items-end justify-start py-0 pr-5 pl-0 box-border gap-[39.5px] max-w-full mq750:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[91px] box-border min-w-[335px] min-h-[510px] max-w-full mq750:pb-[59px] mq750:box-border">
          <div className="self-stretch h-[419px] flex flex-col items-start justify-start gap-[100px] max-w-full mq750:gap-[50px] mq450:gap-[25px]">
            <img
              className="w-[277px] flex-1 relative max-h-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="self-stretch h-[3px] flex flex-row items-start justify-end max-w-full">
              <div className="self-stretch w-[363px] relative box-border max-w-full z-[1] border-t-[3px] border-solid border-black1" />
            </div>
          </div>
        </div>
        <div className="h-[552px] w-[330px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-61xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-171@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[170.9%] font-bold font-inherit z-[1] mq750:text-13xl mq750:leading-[55px] mq450:text-5xl mq450:leading-[41px]">
                Jacob Jones
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[27px] text-13xl text-black1">
                <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[55px] font-normal font-inherit z-[1] mq750:text-7xl mq750:leading-[44px] mq450:text-lgi mq450:leading-[33px]">
                  Gym trainer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[94px] w-[360px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-solid border-black1" />
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
