import { useCallback } from "react";
import Margin from "./Margin";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMarginContainerClick = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1 pl-0 box-border gap-[0px_48px] max-w-full text-center text-5xl text-black1 font-montserrat mq750:gap-[24px] ${className}`}
    >
      <Margin
        trainerBgd8a91ceec330444b="/trainerbgd8a91ceec330444b6dfdpng@2x.png"
        trainer12b262907a2293e42d="/trainer12b262907a2293e42de47png@2x.png"
        image="/image-3@2x.png"
        johnLewis="John Lewis"
        personalTrainer="Personal Trainer"
      />
      <Margin
        trainerBgd8a91ceec330444b="/trainerbgd8a91ceec330444b6dfdpng-1@2x.png"
        trainer12b262907a2293e42d="/trainer2e1fe210e1c836343c1fepng@2x.png"
        image="/image-4@2x.png"
        johnLewis="Jonathan Doe"
        personalTrainer="Crossfit Trainer"
      />
      <div
        className="flex-1 flex flex-row items-start justify-start py-0 px-1.5 box-border min-w-[350px] max-w-full cursor-pointer text-mini text-dimgray-1800"
        onClick={onMarginContainerClick}
      >
        <div className="h-[385.2px] flex-1 flex flex-col items-start justify-start pt-[269.2px] px-0 pb-0 box-border relative max-w-full">
          <img
            className="w-full h-[408.5px] absolute !m-[0] right-[0px] bottom-[-27.3px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/trainerbgd8a91ceec330444b6dfdpng-2@2x.png"
          />
          <img
            className="w-[220px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_110px)] max-h-full overflow-hidden object-cover max-w-[350px] z-[1]"
            alt=""
            src="/trainer38b049fcaa3d9d0a3f143png@2x.png"
          />
          <div className="self-stretch h-[147.6px] relative shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-md bg-white overflow-hidden shrink-0 z-[2]">
            <div className="absolute top-[65.3px] left-[127.8px] leading-[23px] font-medium flex items-center justify-center w-[95px] min-w-[95px] z-[1]">
              Yoga Trainer
            </div>
            <div className="absolute top-[30px] left-[114px] flex flex-col items-start justify-start gap-[35.6px] text-5xl text-black1">
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <h3 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[118px] mq450:text-lgi mq450:leading-[29px]">
                  Ana June
                </h3>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/img-1.svg"
                />
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/img-2.svg"
                />
                <img
                  className="h-4 w-3.5 relative min-h-[16px]"
                  alt=""
                  src="/img-3.svg"
                />
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/img-4.svg"
                />
              </div>
            </div>
            <div className="absolute top-[-25px] left-[113px] flex flex-row items-start justify-start pt-[9px] pb-[0.2px] pr-[46px] pl-[49px]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-5@2x.png"
              />
              <img
                className="h-[18.8px] w-[16.4px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/img.svg"
              />
            </div>
            <div className="absolute bottom-[0px] left-[152.5px] bg-crimson-200 w-[45px] h-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
