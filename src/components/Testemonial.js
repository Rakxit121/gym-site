import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[3063.7px] left-[0px] w-[1340px] h-[774px] flex flex-col items-start justify-start gap-[100px] max-w-full text-center text-base text-white font-montserrat mq1050:h-auto ${className}`}
    >
      <div className="w-[116px] h-[193px] relative [background:linear-gradient(90deg,_rgba(255,_67,_0,_0.1),_rgba(255,_100,_0,_0.1))] [transform:_rotate(90deg)] shrink-0" />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
        <div className="h-[578px] w-[1240px] flex flex-col items-start justify-start pt-[170px] px-[25px] pb-0 box-border gap-[141.7px] max-w-[1240px] mq1050:h-auto mq1250:max-w-full">
          <div className="mt-[-176px] self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start pt-1.5 px-[42px] pb-[4.3px] relative shrink-0">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/titlebg13d788348b56c629eefb2e7ad1f4d6cesvg-2.svg"
              />
              <b className="relative leading-[24px] uppercase inline-block min-w-[125px] z-[1]">
                Testimonials
              </b>
            </div>
          </div>
          <div className="self-stretch bg-white box-border flex flex-row items-start justify-start py-[29px] px-[30px] shrink-0 max-w-full text-left text-gainsboro-400 border-[9px] border-solid border-whitesmoke-700">
            <div className="w-[1112px] bg-black1 flex flex-col items-start justify-start pt-[47px] pb-[25px] pr-[35px] pl-[494px] box-border relative gap-[15px] max-w-full">
              <img
                className="w-[60px] h-[51.9px] relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="w-[175px] h-[137.9px] relative overflow-hidden shrink-0 hidden opacity-[0.4] z-[1]" />
              <blockquote className="m-0 w-[567.2px] relative leading-[24px] flex italic items-center max-w-full z-[1]">
                <span className="w-full">
                  <p className="m-0">
                    “I've been a member of FlexFit for the past 6 months and it
                    has been
                  </p>
                  <p className="m-0">
                    an amazing experience. The trainers are knowledgeable and
                  </p>
                  <p className="m-0">
                    supportive, the equipment is top-notch, and the community of
                  </p>
                  <p className="m-0">members is friendly and encouraging.”</p>
                </span>
              </blockquote>
              <img
                className="w-[360px] h-[424px] absolute !m-[0] top-[-93.7px] left-[0px] object-cover"
                loading="lazy"
                alt=""
                src="/r-2@2x.png"
              />
              <div className="self-stretch h-[80.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[48.1px] box-border gap-[2px] max-w-full text-2xl text-white mq1050:h-auto">
                <b className="w-[567.2px] relative leading-[32px] flex items-center shrink-0 max-w-full mq450:text-mid mq450:leading-[25px]">
                  Bella Stark
                </b>
                <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] text-sm text-gainsboro-400 mq1050:flex-wrap">
                  <div className="relative leading-[21px] font-medium">
                    Starbucks Employee
                  </div>
                  <div className="w-[103.7px] flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7.5px] mq750:flex-wrap">
                      <div className="flex-1 bg-white flex flex-col items-center justify-start pt-[14.4px] px-[17px] pb-[15.6px] box-border min-w-[31px] z-[1]">
                        <img
                          className="w-[13.1px] h-[15px] relative"
                          alt=""
                          src="/img-15.svg"
                        />
                      </div>
                      <div className="flex-1 bg-white flex flex-col items-center justify-start pt-[14.4px] px-[17px] pb-[15.6px] box-border min-w-[31px]">
                        <img
                          className="w-[13.1px] h-[15px] relative"
                          alt=""
                          src="/img-16.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
