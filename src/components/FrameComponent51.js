import PropTypes from "prop-types";

const FrameComponent5 = ({
  className = "",
  bristonMintStreet,
  londonE18LGUSA,
}) => {
  return (
    <div
      className={`w-[291.3px] flex flex-col items-start justify-start pt-[23.5px] px-0 pb-0 box-border relative text-left text-mini text-dimgray-1800 font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[23px] font-medium">
          {bristonMintStreet}
        </div>
        <div className="self-stretch relative leading-[23px] font-medium">
          {londonE18LGUSA}
        </div>
      </div>
      <div className="w-[50px] h-1 absolute !m-[0] top-[2.3px] left-[0px] bg-crimson-200" />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  bristonMintStreet: PropTypes.string,
  londonE18LGUSA: PropTypes.string,
};

export default FrameComponent5;
