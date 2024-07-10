import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-start justify-start pt-0 pb-[26px] pr-0 pl-5 box-border gap-[48px] max-w-full shrink-0 text-left text-21xl text-gray-2100 font-outfit mq750:gap-[24px] ${className}`}
    >
      <img
        className="w-[1129px] relative max-h-full object-contain max-w-full z-[1]"
        loading="lazy"
        alt=""
      />
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
        <div className="w-[1253px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="w-[349px] flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[170.9%] font-bold font-inherit z-[1] mq750:text-13xl mq750:leading-[55px] mq450:text-5xl mq450:leading-[41px]">
              Experience :
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end text-13xl text-black1">
              <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[170.9%] font-normal font-inherit z-[1] mq750:text-7xl mq750:leading-[44px] mq450:text-lgi mq450:leading-[33px]">
                <p className="m-0">4 years Gym trainer</p>
                <p className="m-0">Provincial athlete</p>
                <p className="m-0">Gym Enthusiast</p>
              </h1>
            </div>
          </div>
          <div className="h-[335px] w-[322px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 z-[1]"
              alt=""
              src="/image-118@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
