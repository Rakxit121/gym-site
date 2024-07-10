import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Section = ({
  className = "",
  propBackgroundImage,
  propMarginTop,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propPadding,
  onItemContainerClick,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      padding: propPadding,
    };
  }, [
    propBackgroundImage,
    propMarginTop,
    propAlignSelf,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propPadding,
  ]);

  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center bg-[url('/public/section4@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-17xl text-white font-montserrat ${className}`}
      style={sectionStyle}
    >
      <div className="w-[1240px] flex flex-col items-start justify-start pt-[70px] px-[25px] pb-[54px] box-border gap-[33px] max-w-[1240px] mq750:gap-[16px] mq1250:max-w-full">
        <div className="flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 relative text-inherit leading-[54px] font-bold font-inherit mq750:text-10xl mq750:leading-[43px] mq450:text-3xl mq450:leading-[32px]">
            Need a Fitness Trainer?
          </h1>
          <b className="relative text-9xl leading-[42px] text-crimson-200 mq450:text-3xl mq450:leading-[34px]">
            <span>Call us:</span>
            <span className="text-white"> +123-456789</span>
          </b>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[5px] text-center text-mini">
          <div
            className="bg-crimson-200 flex flex-row items-start justify-start pt-[16.3px] px-[22px] pb-[16.2px] relative cursor-pointer"
            onClick={onItemContainerClick}
          >
            <div className="relative leading-[23px] uppercase font-semibold">
              purchase now  
            </div>
            <div className="h-[55px] w-[200px] absolute !m-[0] top-[-12px] right-[-25.5px] box-border z-[1] border-[2px] border-solid border-crimson-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,

  /** Action props */
  onItemContainerClick: PropTypes.func,
};

export default Section;
