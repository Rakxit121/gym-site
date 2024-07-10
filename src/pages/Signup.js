import { useCallback } from "react";
import FieldLabels from "../components/FieldLabels";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start gap-[52px] leading-[normal] tracking-[normal] mq800:gap-[26px] mq1325:flex-wrap">
      <div className="h-[1024px] w-[773px] relative min-w-[773px] max-w-full mq1125:min-w-full mq1325:flex-1">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-contain"
          alt=""
          src="/pexelsphoto4761790-1@2x.png"
        />
        <img
          className="absolute top-[25px] left-[22px] w-[140px] h-[98px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/flexfitremovebgpreview-13@2x.png"
        />
      </div>
      <div className="w-[569.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border min-w-[569.1px] min-h-[950px] max-w-full mq800:pb-5 mq800:box-border mq800:min-w-full mq1125:pb-7 mq1125:box-border mq1325:flex-1">
        <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full mq800:gap-[20px]">
          <FieldLabels />
          <div className="w-[444.1px] flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch h-16 relative">
                <div className="absolute top-[0px] left-[0px] rounded-md bg-crimson-200 w-full h-full" />
                <div className="absolute top-[22px] left-[183.8px] text-base font-medium font-inter text-white text-center flex items-center justify-center w-[72.3px] min-w-[72.3px] z-[1]">
                  Continue
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[71px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div
                  className="relative text-base font-medium font-inter text-left cursor-pointer"
                  onClick={onAlreadyHaveAnClick}
                >
                  <span className="text-dimgray-900">{`Already have an account ? `}</span>
                  <span className="text-royalblue">{`Login here `}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
