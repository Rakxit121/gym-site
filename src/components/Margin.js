import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Margin = ({
  className = "",
  trainerBgd8a91ceec330444b,
  trainer12b262907a2293e42d,
  image,
  johnLewis,
  personalTrainer,
}) => {
  const navigate = useNavigate();

  const onMarginContainerClick = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-0 px-1.5 box-border min-w-[350px] max-w-full cursor-pointer text-center text-5xl text-black1 font-montserrat ${className}`}
      onClick={onMarginContainerClick}
    >
      <div className="h-[385.2px] flex-1 flex flex-col items-start justify-start pt-[269.2px] px-0 pb-0 box-border relative max-w-full">
        <div className="w-[350px] !m-[0] absolute top-[4px] left-[0px] flex flex-row items-start justify-start max-w-full">
          <img
            className="h-[408.5px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src={trainerBgd8a91ceec330444b}
          />
          <img
            className="h-[353.9px] w-[220px] absolute !m-[0] top-[-4px] left-[calc(50%_-_110px)] overflow-hidden shrink-0 object-contain max-w-[350px] z-[1]"
            alt=""
            src={trainer12b262907a2293e42d}
          />
        </div>
        <div className="self-stretch h-[183.6px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-md bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[104px] box-border relative gap-[27px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="mt-[-55px] flex flex-row items-start justify-start py-0 px-2">
            <div className="flex flex-row items-start justify-start pt-[9px] pb-[0.2px] pr-[46px] pl-[49px] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0.3px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src={image}
              />
              <img
                className="h-[18.8px] w-[16.4px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/img.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[13.3px]">
            <div className="self-stretch flex flex-col items-end justify-start">
              <h3 className="m-0 self-stretch h-[72px] relative text-inherit tracking-[-0.01px] leading-[36px] font-bold font-inherit flex items-center justify-center mq450:text-lgi mq450:leading-[29px]">
                {johnLewis}
              </h3>
              <div className="flex flex-row items-start justify-end py-0 pr-[7px] pl-[9px] mt-[-0.7px] text-mini text-dimgray-1800">
                <div className="relative leading-[23px] font-medium inline-block min-w-[124px]">
                  {personalTrainer}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/img-1.svg"
                />
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  loading="lazy"
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
                  loading="lazy"
                  alt=""
                  src="/img-4.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[45px] h-1 absolute !m-[0] bottom-[0px] left-[calc(50%_-_22.5px)] bg-crimson-200" />
        </div>
      </div>
    </div>
  );
};

Margin.propTypes = {
  className: PropTypes.string,
  trainerBgd8a91ceec330444b: PropTypes.string,
  trainer12b262907a2293e42d: PropTypes.string,
  image: PropTypes.string,
  johnLewis: PropTypes.string,
  personalTrainer: PropTypes.string,
};

export default Margin;
