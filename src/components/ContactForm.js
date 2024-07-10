import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";

const ContactForm = ({ className = "" }) => {
  return (
    <div
      className={`w-[1394px] flex flex-row items-start justify-end py-0 px-[77px] box-border max-w-full mq1250:pl-[38px] mq1250:pr-[38px] mq1250:box-border ${className}`}
    >
      <form className="m-0 flex-1 bg-white flex flex-col items-start justify-start py-[120px] px-[25px] box-border gap-[4.3px] max-w-[1240px] mq1250:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[25px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[10.7px] px-0 pb-0 box-border min-w-[378px] max-w-full mq750:min-w-full">
            <h1 className="m-0 self-stretch relative text-17xl leading-[43.2px] font-bold font-montserrat text-black1 text-left mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              <p className="m-0">We are here to help you!</p>
              <p className="m-0">Shape Your Body.</p>
            </h1>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[35px] min-w-[378px] max-w-full mq750:gap-[17px] mq750:min-w-full">
            <h2 className="m-0 relative text-9xl leading-[42px] font-bold font-montserrat text-black1 text-left mq450:text-3xl mq450:leading-[34px]">
              Leave Us Your Info
            </h2>
            <div className="self-stretch bg-white box-border flex flex-row items-start justify-start pt-[15px] px-[21px] pb-4 max-w-full border-[1px] border-solid border-gainsboro-300">
              <div className="flex-1 relative text-sm font-montserrat text-darkgray-700 text-left inline-block max-w-full">
                Full Name*
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
          <div className="flex-1 relative text-base leading-[24px] font-medium font-montserrat text-dimgray-1800 text-left inline-block min-w-[378px] max-w-full mq750:min-w-full">
            <p className="m-0">
              At Gymate, we are dedicated to helping you achieve the body of
            </p>
            <p className="m-0">
              your dreams. Our expert trainers and nutritionists will work with
            </p>
            <p className="m-0">
              you to create a personalized fitness and nutrition plan that helps
            </p>
            <p className="m-0">you reach your specific goals.</p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[24.7px] px-0 pb-0 box-border min-w-[378px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
              <div className="self-stretch bg-white box-border flex flex-row items-start justify-start pt-0 px-[21px] pb-4 max-w-full border-[1px] border-solid border-gainsboro-300">
                <div className="flex-1 relative text-sm font-montserrat text-darkgray-700 text-left inline-block max-w-full">
                  Email Address*
                </div>
              </div>
              <div className="self-stretch bg-whitesmoke-700 box-border flex flex-row items-start justify-start pt-px px-[25px] pb-4 max-w-full border-[1px] border-solid border-gainsboro-300">
                <div className="w-[520.5px] relative text-sm leading-[16px] font-montserrat text-black1 text-left flex items-center shrink-0 max-w-full">
                  Select Class
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.7px] max-w-full">
          <div className="w-[582.6px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <b className="flex-1 relative text-xl leading-[30px] inline-block font-montserrat text-black1 text-left min-w-[189px] mq450:text-base mq450:leading-[24px]">
              New York City, USA
            </b>
            <b className="flex-1 relative text-xl leading-[30px] inline-block font-montserrat text-black1 text-left min-w-[189px] mq450:text-base mq450:leading-[24px]">
              Opening Hours
            </b>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <FrameComponent5
              bristonMintStreet="85 Briston Mint Street"
              londonE18LGUSA="London, E1 8LG, USA"
            />
            <div className="flex-1 flex flex-row items-start justify-start gap-[24.9px] min-w-[584px] max-w-full mq1050:flex-wrap mq1050:min-w-full">
              <FrameComponent5
                bristonMintStreet="Mon to Fri: 7:00 am — 21:00 pm"
                londonE18LGUSA="Saturday: 7:00 am — 19:00 pm"
              />
              <div className="h-[114px] flex-1 relative bg-white box-border overflow-hidden min-w-[378px] max-w-full border-[1px] border-solid border-gainsboro-300 mq750:min-w-full" />
            </div>
          </div>
        </div>
        <div className="w-[684.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.2px] box-border max-w-full">
          <div className="w-[582.6px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <b className="flex-1 relative text-xl leading-[30px] inline-block font-montserrat text-black1 text-left min-w-[189px] mq450:text-base mq450:leading-[24px]">
              Information
            </b>
            <b className="flex-1 relative text-xl leading-[30px] inline-block font-montserrat text-black1 text-left min-w-[189px] z-[1] mq450:text-base mq450:leading-[24px]">
              Follow Us On
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-0.3px]">
            <div className="h-1 w-[50px] absolute !m-[0] top-[3.3px] left-[0px] bg-crimson-200" />
            <div className="h-1 w-[50px] absolute !m-[0] top-[3.3px] left-[291.3px] bg-crimson-200" />
            <div className="flex-1 flex flex-row items-start justify-end max-w-full">
              <div className="relative text-3xs leading-[15px] font-montserrat text-black1 text-left inline-block min-w-[77px]">
                * Required field
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
          <div className="w-[291.3px] flex flex-col items-start justify-start">
            <div className="self-stretch relative text-mini leading-[23px] font-medium font-montserrat text-dimgray-1800 text-left whitespace-nowrap">
              +800-123-4567
            </div>
            <div className="self-stretch relative text-mini leading-[23px] font-medium font-montserrat text-dimgray-1800 text-left whitespace-nowrap z-[1]">
              gymat@gmail.com
            </div>
          </div>
          <div className="flex flex-row items-start justify-center py-0 pr-[129px] pl-0 gap-[12.5px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
            <div className="h-[38px] w-[38px] rounded-9980xl bg-whitesmoke-500 flex flex-col items-start justify-start z-[2]">
              <img
                className="w-[38px] h-[38px] relative"
                alt=""
                src="/frame-5.svg"
              />
            </div>
            <div className="h-[38px] w-[38px] rounded-9980xl bg-whitesmoke-500 flex flex-col items-start justify-start">
              <img
                className="w-[38px] h-[38px] relative"
                alt=""
                src="/frame-6.svg"
              />
            </div>
            <div className="h-[38px] w-[37.4px] rounded-9980xl bg-whitesmoke-500 flex flex-col items-start justify-start">
              <img
                className="w-[37.4px] h-[38px] relative"
                alt=""
                src="/frame-7.svg"
              />
            </div>
            <div className="h-[38px] w-[35.8px] rounded-9980xl bg-whitesmoke-500 flex flex-col items-start justify-start">
              <img
                className="w-[35.8px] h-[38px] relative"
                alt=""
                src="/frame-8.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
            <div className="bg-crimson-200 flex flex-row items-start justify-start py-[15px] px-[30px] whitespace-nowrap">
              <b className="relative text-sm leading-[21px] uppercase inline-block font-montserrat text-white text-center min-w-[101px]">
                submit now
              </b>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
