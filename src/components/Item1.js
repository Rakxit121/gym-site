import { useMemo } from "react";
import PropTypes from "prop-types";

const Item1 = ({ className = "", time, am1000am, propHeight }) => {
  const item1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`w-[273.4px] bg-whitesmoke-600 flex flex-col items-start justify-start pt-[25px] px-[25px] pb-[25.5px] box-border gap-[7.5px] text-center text-sm text-darkgray-1200 font-montserrat ${className}`}
      style={item1Style}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-0 pl-px">
        <div className="relative leading-[21px] font-medium inline-block min-w-[36px]">
          {time}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-0 px-7 text-lg text-black1">
        <b className="relative leading-[27px] whitespace-nowrap">{am1000am}</b>
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  time: PropTypes.string,
  am1000am: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default Item1;
