import Item2 from "./Item2";
import Item1 from "./Item1";
import Item from "./Item";
import PropTypes from "prop-types";

const Container4 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[100px] w-[1240px] flex flex-col items-start justify-start py-[50px] px-[25px] box-border gap-[50px] max-w-[1240px] text-left text-mini text-crimson-200 font-montserrat mq1250:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 gap-[0px_9.2px]">
        <div className="rounded-4xl bg-crimson-200 flex flex-row items-start justify-center pt-2 px-[42px] pb-[9px] text-white border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[64px]">
            Monday
          </b>
        </div>
        <div className="rounded-4xl bg-white flex flex-row items-start justify-center pt-2 px-[41px] pb-[9px] border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[66px]">
            Tuesday
          </b>
        </div>
        <div className="w-[150px] rounded-4xl bg-white box-border flex flex-row items-start justify-center pt-2 px-[27px] pb-[9px] border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[93px]">
            Wednesday
          </b>
        </div>
        <div className="w-[150px] rounded-4xl bg-white box-border flex flex-row items-start justify-center pt-2 px-[37px] pb-[9px] border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[73px]">
            Thursday
          </b>
        </div>
        <div className="w-[150px] rounded-4xl bg-white box-border flex flex-row items-start justify-center pt-2 px-[49px] pb-[9px] border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[49px]">
            Friday
          </b>
        </div>
        <div className="w-[150px] rounded-4xl bg-white box-border flex flex-row items-start justify-center pt-2 px-[38px] pb-[9px] border-[1px] border-solid border-gainsboro-100">
          <b className="relative leading-[23px] inline-block min-w-[71px]">
            Saturday
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px] max-w-full text-sm text-darkgray-1200">
        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[-0.01px] mq1250:flex-wrap mq1250:justify-center">
          <Item2 fitness="Fitness" />
          <Item1 time="Time" am1000am="9:00am - 10:00am" />
          <Item1 time="Trainer" am1000am="David Vila" propHeight="unset" />
          <div className="w-[321.6px] bg-whitesmoke-600 flex flex-row items-center justify-end py-[31.5px] px-[55px] box-border max-w-full text-mini text-white">
            <div className="rounded-11xl bg-dimgray-3000 flex flex-col items-start justify-start py-2.5 px-5 whitespace-nowrap">
              <div className="relative leading-[23px] font-medium inline-block min-w-[71px]">
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[-0.01px] text-center mq1250:flex-wrap mq1250:justify-center">
          <Item2 fitness="Body Building" propHeight="133px" />
          <Item1 time="Time" am1000am="10:00pm - 11:00pm" propHeight="133px" />
          <Item johnWeights="John Weights" />
          <div className="w-[321.6px] bg-whitesmoke-600 flex flex-row items-center justify-end pt-[44.8px] px-[55px] pb-[44.7px] box-border max-w-full text-left text-mini text-white">
            <div className="rounded-11xl bg-dimgray-3000 flex flex-col items-start justify-start py-2.5 px-5 whitespace-nowrap">
              <div className="relative leading-[23px] font-medium inline-block min-w-[71px]">
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[-0.01px] text-mini text-white mq1250:flex-wrap mq1250:justify-center">
          <Item2 fitness="Running" propHeight="133px" />
          <Item1 time="Time" am1000am="4:00pm - 5:00pm" propHeight="133px" />
          <Item johnWeights="Jenifer Jonas" />
          <div className="w-[321.6px] bg-whitesmoke-600 flex flex-row items-center justify-end pt-[44.8px] px-[55px] pb-[44.7px] box-border max-w-full">
            <div className="rounded-11xl bg-dimgray-3000 flex flex-col items-start justify-start py-2.5 px-5 whitespace-nowrap">
              <div className="relative leading-[23px] font-medium inline-block min-w-[71px]">
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[-0.01px] text-mini text-white mq1250:flex-wrap mq1250:justify-center">
          <Item2 fitness="Cycling" propHeight="unset" />
          <Item1 time="Time" am1000am="6:00pm - 7:00pm" propHeight="unset" />
          <Item1 time="Trainer" am1000am="Robert Louis" propHeight="unset" />
          <div className="w-[321.6px] bg-whitesmoke-600 flex flex-row items-center justify-end py-[31.5px] px-[55px] box-border max-w-full">
            <div className="rounded-11xl bg-dimgray-3000 flex flex-col items-start justify-start py-2.5 px-5 whitespace-nowrap">
              <div className="relative leading-[23px] font-medium inline-block min-w-[71px]">
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
