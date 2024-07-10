import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full text-left text-base text-black1 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-11xl">
        <div className="w-[413px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
            <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lg mq825:text-5xl">
              Account Login
            </h2>
            <div className="self-stretch relative text-lg leading-[28px] text-lightslategray-700">
              If you are already a member you can login with your email address
              and password.
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke-400" />
      </div>
      <FrameComponent7 emailAddress="Email address" />
      <FrameComponent7 emailAddress="Password" propHeight="97px" />
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-[5px] text-dimgray-1000">
        <div className="flex flex-row items-start justify-start gap-[9px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/square-checkbox-solid.svg"
          />
          <div className="relative font-medium inline-block min-w-[111px]">
            Remember me
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-center text-white">
        <div className="flex-1 rounded-md bg-crimson-200 flex flex-row items-start justify-center pt-[23px] pb-[22px] pr-5 pl-[21px] box-border whitespace-nowrap max-w-full">
          <div className="h-16 w-[426px] relative rounded-md bg-crimson-200 hidden max-w-full" />
          <div className="relative font-medium inline-block min-w-[111px] z-[1]">
            Login Account
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
