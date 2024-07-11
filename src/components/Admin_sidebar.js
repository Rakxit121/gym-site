import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[270px] flex flex-col items-start justify-start pt-[13px] px-0 pb-[190px] box-border gap-[22px] text-left text-sm-5 text-darkslategray-1100 font-inter ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] right-[0px] bottom-[-3px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/background-1.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[13px] text-20xl">
        <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-2.5">
              <div className="flex-1 flex flex-row items-end justify-start gap-[11.5px]">
                <img
                  className="h-[5px] w-[78px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-25@2x.png"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <img
                    className="w-7 h-[34px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-26@2x.png"
                  />
                </div>
                <img
                  className="h-[5px] w-[79px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-27@2x.png"
                />
              </div>
            </div>
            <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[2] mq450:text-4xl mq975:text-12xl">
              Pocket Gym
            </h2>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="w-px h-11 relative bg-whitesmoke-200 z-[2]" />
          </div>
        </div>
      </div>
      <div className="w-[254px] flex flex-row items-start justify-start pt-0 px-[9px] pb-[31px] box-border text-dimgray-1700">
        <div className="flex-1 rounded-[9.75px] bg-whitesmoke-800 flex flex-row items-end justify-start pt-3.5 px-[17px] pb-[18px] gap-[13px] z-[2]">
          <div className="h-[74px] w-[236px] relative rounded-[9.75px] bg-whitesmoke-800 hidden" />
          <img
            className="h-[42px] w-[45px] relative object-contain min-h-[42px] z-[3]"
            loading="lazy"
            alt=""
            src="/image-28@2x.png"
          />
          <div className="w-[123px] flex flex-col items-start justify-start gap-[5px]">
            <a className="[text-decoration:none] w-[46px] relative text-[inherit] flex items-center z-[3]">
              admin
            </a>
            <div className="self-stretch relative text-smi-5 text-lightslategray-400 whitespace-nowrap z-[3]">
              admin@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[33.7px] text-darkgray-200">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11.5px]">
          <div className="flex flex-row items-start justify-start py-0 px-[30px]">
            <div className="flex flex-row items-start justify-start gap-[17px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[19px] h-[19px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-29@2x.png"
                />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[74px] z-[2]">
                Dashboard
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[17px] px-[30px] gap-[17px] bg-[url('/public/background@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2] text-mediumseagreen-200">
            <img
              className="h-12 w-[266px] relative object-cover hidden"
              alt=""
              src="/background@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[19px] h-[18px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-30@2x.png"
              />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] z-[1]">
              Members
            </a>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[29px] text-darkgray-300">
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-[21px] h-[13px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-31@2x.png"
                />
              </div>
              <div className="relative inline-block min-w-[59px] z-[2]">
                Trainers
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[31px] text-smi-5 text-lightslategray-300">
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-[19px] w-[17px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-32@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative inline-block min-w-[59px] z-[2]">
                Calendar
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[30px] text-smi-5 text-darkgray-1300">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-5 w-5 relative object-cover min-h-[20px] z-[2]"
              loading="lazy"
              alt=""
              src="/image-33@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative inline-block min-w-[70px] z-[2]">
                SportType
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-7 text-darkgray-1700">
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[23px] h-[17px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-34@2x.png"
              />
            </div>
            <div className="relative inline-block min-w-[62px] z-[2]">
              Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
