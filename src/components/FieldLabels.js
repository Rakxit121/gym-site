import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";

const FieldLabels = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-left text-base text-lightslategray-700 font-inter ${className}`}
    >
      <div className="w-[391.8px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
        <div className="flex flex-row items-end justify-start gap-[9px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/iconnavigationarrow-back-ios-24px.svg"
          />
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[39px]">
            Back
          </a>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end mt-[-2px] text-11xl text-black1">
          <h2 className="m-0 relative text-inherit font-bold font-inherit mq800:text-5xl mq450:text-lg">
            Account Signup
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[15px] pb-1.5 box-border max-w-full text-lg">
        <div className="w-[424.5px] relative leading-[28px] flex items-center shrink-0 max-w-full">
          Become a member and enjoy exclusive promotions.
        </div>
      </div>
      <div className="self-stretch h-3.5 flex flex-row items-start justify-end pt-0 px-0 pb-[13px] box-border max-w-full">
        <div className="self-stretch w-[442px] relative box-border max-w-full border-t-[1px] border-solid border-whitesmoke-400" />
      </div>
      <FrameComponent7 emailAddress="Full Name" propHeight="94px" />
      <FrameComponent7 emailAddress="Email Address" propHeight="94px" />
      <FrameComponent7 emailAddress="Gender" propHeight="94px" />
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0.5 pb-[5px] box-border max-w-full text-dimgray-900">
        <div className="w-[460px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[6px] max-w-full">
          <div className="relative font-medium inline-block min-w-[103.3px]">
            Date Of Birth
          </div>
          <div className="self-stretch rounded-md box-border flex flex-row items-start justify-end py-4 px-1.5 max-w-full border-[1px] border-solid border-lightslategray-700">
            <div className="h-16 w-[440px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-lightslategray-700" />
            <img
              className="h-7 w-[38.2px] relative object-contain z-[1]"
              alt=""
              src="/oipremovebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
      <FrameComponent7 emailAddress="Password" propHeight="94px" />
      <FrameComponent7 emailAddress="Confirm Password" propHeight="89px" />
    </div>
  );
};

FieldLabels.propTypes = {
  className: PropTypes.string,
};

export default FieldLabels;
