import { useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-[173px] pl-[825px] box-border gap-[53px] leading-[normal] tracking-[normal] text-left text-base text-lightslategray-700 font-inter lg:pl-[412px] lg:pr-[86px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[26px] mq825:pl-[206px] mq825:pr-[43px] mq825:box-border mq1500:flex-wrap">
      <img
        className="ml-[-826px] w-[773px] relative max-h-full overflow-hidden shrink-0 max-w-[142%]"
        loading="lazy"
        alt=""
        src="/frame-11.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[74px] px-0 pb-0">
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
      </div>
      <div className="w-[427px] flex flex-col items-start justify-start pt-[259px] px-0 pb-0 box-border max-w-full shrink-0 text-dimgray-900 mq450:pt-[109px] mq450:box-border mq825:pt-[168px] mq825:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq450:gap-[21px]">
          <FrameComponent6 />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[69px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div
              className="relative font-medium cursor-pointer"
              onClick={onDontHaveAnClick}
            >
              <span>{`Dont have an account ? `}</span>
              <span className="text-royalblue">{`Sign up here `}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
