import BackgroundShadow from "./BackgroundShadow";
import Container3 from "./Container3";
import PropTypes from "prop-types";

const Section3 = ({ className = "" }) => {
  return (
    <section
      className={`absolute w-full top-[934px] right-[0px] left-[0px] h-[1089.5px] flex flex-row items-end justify-center pt-0 px-0 pb-[200px] box-border bg-[url('/public/section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-5xl text-black1 font-montserrat mq1050:h-auto ${className}`}
    >
      <div className="h-[974.5px] w-[1240px] flex flex-col items-start justify-start pt-0 px-[25px] pb-[604.5px] box-border max-w-[1240px] mq1050:h-auto mq1250:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-[30px] px-0 pb-0 box-border gap-[25px] shrink-0 max-w-full">
          <BackgroundShadow
            image="/image@2x.png"
            progression="Progression"
            ourTeamOfExpertsWillWorkW="Our team of experts will work with you to"
            createACustomizedPlanThat="create a customized plan that helps you"
            achieveSuccessOneStepAtAT="achieve success one step at a time."
          />
          <BackgroundShadow
            image="/image-1@2x.png"
            progression="Workout"
            ourTeamOfExpertsWillWorkW="With a variety of workouts to choose from,"
            createACustomizedPlanThat="you'll have everything you need to get into"
            achieveSuccessOneStepAtAT="the best shape of your life."
            propFlex="unset"
            propMinWidth="unset"
            propWidth="376.6px"
          />
          <BackgroundShadow
            image="/image-2@2x.png"
            progression="Nutritions"
            ourTeamOfExpertsWillWorkW="Our team will work with you to create a"
            createACustomizedPlanThat="personalized meal plan that helps you"
            achieveSuccessOneStepAtAT="reach your specific health goals."
            propFlex="unset"
            propMinWidth="unset"
            propWidth="370.9px"
          />
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[30px] shrink-0 max-w-full text-left text-mini mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[52.8px] min-w-[390px] max-w-full mq750:gap-[26px] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full">
              <div className="flex flex-row items-start justify-start pt-[5.3px] px-10 pb-[2.1px] relative text-white">
                <img
                  className="h-full w-[calc(100%_-_4px)] absolute !m-[0] top-[0px] right-[4px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/titlebg13d788348b56c629eefb2e7ad1f4d6cesvg-1.svg"
                />
                <div
                  className="relative leading-[23px] uppercase font-semibold inline-block min-w-[110px] z-[1]"
                  data-scroll-to="whoWeAre"
                >
                  who we are
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[14.5px] max-w-full text-16xl">
                <h1 className="m-0 relative text-inherit leading-[43.75px] font-bold font-inherit mq450:text-2xl mq450:leading-[26px] mq750:text-9xl mq750:leading-[35px]">
                  <p className="m-0">Take Your Health And Body To</p>
                  <p className="m-0">Next Level</p>
                </h1>
                <div className="relative text-base leading-[24px] font-medium text-dimgray-1800">
                  <p className="m-0">
                    Take your health and body to the next level with our
                    comprehensive
                  </p>
                  <p className="m-0">
                    program designed to help you reach your fitness goals.
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-[2px] text-center text-xl mq750:flex-wrap">
                <Container3
                  weightlifterfdb39166bd9fd="/weightlifterfdb39166bd9fd960aac2png@2x.png"
                  professional="professional"
                  trainers="trainers"
                />
                <Container3
                  weightlifterfdb39166bd9fd="/equpmentsf102757b82b68f55f831png@2x.png"
                  professional="modern"
                  trainers="equipments"
                  propFlex="0.8758"
                  propBorderRight="1px solid rgba(0, 0, 0, 0.2)"
                  propBorderLeft="1px solid rgba(0, 0, 0, 0.2)"
                  propMinWidth="138px"
                />
                <Container3
                  weightlifterfdb39166bd9fd="/gym377b234bd8a2adfc4675png@2x.png"
                  professional="fancy gym"
                  trainers="machines"
                  propFlex="unset"
                  propBorderRight="unset"
                  propBorderLeft="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[5px] text-center text-white">
              <div className="bg-darkslategray-700 flex flex-row items-start justify-start pt-[16.5px] px-9 pb-[16.4px]">
                <div className="relative leading-[23px] uppercase font-semibold inline-block min-w-[113px]">
                  take a tour  
                </div>
                <div className="h-[55px] w-[200px] relative box-border hidden border-[1px] border-solid border-darkslategray-1200" />
              </div>
            </div>
          </div>
          <div className="w-[560px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.2px] box-border min-w-[560px] max-w-full mq1050:flex-1 mq750:min-w-full">
            <div className="self-stretch h-[604.5px] flex flex-col items-start justify-start relative max-w-full">
              <img
                className="w-[285.6px] h-[591.7px] absolute !m-[0] right-[42px] bottom-[-100.6px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/girlredbgf8dedc2cc0539fb0e60979db3b5245dasvg.svg"
              />
              <img
                className="w-[666px] relative max-h-full object-cover hidden max-w-full z-[1]"
                alt=""
                src="/girl5120x2880fitnessexercisegymdumbbellsworkoutsportswear11066removebgpreview-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[122px] w-[100px] relative object-contain hidden"
        alt=""
        src="/air-balloon-1@2x.png"
      />
    </section>
  );
};

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
