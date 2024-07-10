import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const InstructorImages = ({ className = "", propGap }) => {
  const instructorImages1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/trainers1");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[44px] min-w-[262px] max-w-[285px] text-left text-5xl text-gray-2100 font-outfit mq450:gap-[22px] ${className}`}
      style={instructorImages1Style}
    >
      <img
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-20@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className="self-stretch h-[-2.2px] flex flex-row items-start justify-start py-0 pr-[71px] pl-[72px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h3 className="m-0 h-[-2px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block z-[1] mq450:text-lgi mq450:leading-[33px]">
          Jane Cooper
        </h3>
      </div>
    </div>
  );
};

InstructorImages.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default InstructorImages;
