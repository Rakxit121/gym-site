import { useMemo } from "react";
import PropTypes from "prop-types";

const BackgroundShadow = ({
  className = "",
  image,
  progression,
  ourTeamOfExpertsWillWorkW,
  createACustomizedPlanThat,
  achieveSuccessOneStepAtAT,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-tl-16xl rounded-tr-none rounded-br-16xl rounded-bl-none bg-white overflow-hidden flex flex-col items-end justify-start pt-[74.3px] px-[39px] pb-[74.6px] box-border gap-[16.7px] min-w-[255px] min-h-[340px] max-w-full text-center text-5xl text-black1 font-montserrat ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[63px] pl-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[106.4px] flex-1 relative">
          <div className="absolute top-[0px] left-[55.4px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-[392.55px] mq450:max-w-full">
            <img
              className="h-[60.4px] w-[75px] relative overflow-hidden shrink-0 object-cover max-w-[392.55px] mq450:max-w-full"
              loading="lazy"
              alt=""
              src={image}
            />
          </div>
          <h3 className="m-0 absolute top-[70.4px] left-[0px] text-inherit leading-[36px] uppercase font-bold font-inherit flex items-center justify-center mq450:text-lgi mq450:leading-[29px]">
            {progression}
          </h3>
        </div>
      </div>
      <div className="relative text-mini leading-[22.5px] font-medium">
        <p className="m-0">{ourTeamOfExpertsWillWorkW}</p>
        <p className="m-0">{createACustomizedPlanThat}</p>
        <p className="m-0">{achieveSuccessOneStepAtAT}</p>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  progression: PropTypes.string,
  ourTeamOfExpertsWillWorkW: PropTypes.string,
  createACustomizedPlanThat: PropTypes.string,
  achieveSuccessOneStepAtAT: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default BackgroundShadow;
