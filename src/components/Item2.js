import { useMemo } from "react";
import PropTypes from "prop-types";

const Item2 = ({ className = "", fitness, propHeight }) => {
  const itemStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`w-[321.6px] bg-whitesmoke-600 flex flex-col items-start justify-start pt-[25px] px-[55px] pb-[25.5px] box-border gap-[7.5px] max-w-full text-left text-sm text-darkgray-1200 font-montserrat ${className}`}
      style={itemStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[21px] font-medium">
          Class Name
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
        <b className="self-stretch relative leading-[27px]">{fitness}</b>
      </div>
    </div>
  );
};

Item2.propTypes = {
  className: PropTypes.string,
  fitness: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default Item2;
