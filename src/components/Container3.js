import { useMemo } from "react";
import PropTypes from "prop-types";

const Container3 = ({
  className = "",
  weightlifterfdb39166bd9fd,
  professional,
  trainers,
  propFlex,
  propBorderRight,
  propBorderLeft,
  propMinWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      flex: propFlex,
      borderRight: propBorderRight,
      borderLeft: propBorderLeft,
      minWidth: propMinWidth,
    };
  }, [propFlex, propBorderRight, propBorderLeft, propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start pt-[25px] pb-[24.9px] pr-[35px] pl-[17px] box-border min-w-[141px] text-center text-xl text-black1 font-montserrat ${className}`}
      style={containerStyle}
    >
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-[217.25px]">
        <img
          className="w-[54px] h-[54px] relative overflow-hidden shrink-0 object-cover max-w-[217.25px]"
          loading="lazy"
          alt=""
          src={weightlifterfdb39166bd9fd}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.8px] z-[1] mt-[-0.7px]">
        <b className="relative leading-[27.5px] uppercase mq450:text-base mq450:leading-[22px]">
          <p className="m-0">{professional}</p>
          <p className="m-0">{trainers}</p>
        </b>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
  weightlifterfdb39166bd9fd: PropTypes.string,
  professional: PropTypes.string,
  trainers: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBorderRight: PropTypes.any,
  propBorderLeft: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Container3;
