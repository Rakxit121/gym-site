import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "", emailAddress, propHeight }) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`self-stretch h-[97px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-base text-dimgray-900 font-inter ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="relative font-medium inline-block min-w-[107px]">
          {emailAddress}
        </div>
        <div className="self-stretch flex-1 relative rounded-md border-[1px] border-solid border-lightslategray-700" />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  emailAddress: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FrameComponent7;
