import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "", instructors, propHeight }) => {
  const frameSectionStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className={`self-stretch h-[455px] flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-left text-29xl text-gray-2000 font-outfit mq450:pb-8 mq450:box-border ${className}`}
      style={frameSectionStyle}
    >
      <div className="self-stretch flex-1 flex flex-row items-end justify-center py-[7px] px-5 box-border bg-[url('/public/background2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <div className="h-[45px] w-[226px] hidden" />
        <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[170.9%] font-semibold font-inherit z-[1] mq450:text-10xl mq450:leading-[49px] mq750:text-19xl mq750:leading-[66px]">
          {instructors}
        </h1>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  instructors: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FrameComponent5;
