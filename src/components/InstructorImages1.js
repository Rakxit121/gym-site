import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const InstructorImages1 = ({
  className = "",
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const instructorImagesStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propPadding, propMinWidth]);

  const navigate = useNavigate();

  const onImagePlaceholdersClick = useCallback(() => {
    navigate("/trainers1");
  }, [navigate]);

  return (
    <div
      className={`flex-[0.9661] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border gap-[48.7px] min-w-[271px] max-w-[295px] text-left text-5xl text-gray-2100 font-outfit mq450:gap-[24px] mq450:flex-1 ${className}`}
      style={instructorImagesStyle}
    >
      <img
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-19@2x.png"
        onClick={onImagePlaceholdersClick}
      />
      <div className="self-stretch h-[-6.5px] flex flex-row items-start justify-start py-0 pr-[17px] pl-[37px] box-border">
        <h3 className="m-0 h-[-6px] relative text-inherit tracking-[0.02em] leading-[170.9%] font-medium font-inherit inline-block z-[1] mq450:text-lgi mq450:leading-[33px]">
          Cameron Williamson
        </h3>
      </div>
    </div>
  );
};

InstructorImages1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default InstructorImages1;
