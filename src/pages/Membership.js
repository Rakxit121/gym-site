import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";

const Membership = () => {
  const navigate = useNavigate();

  const onLinkClassesClick = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  return (
    <div className="w-full h-[2220px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[410.5px] box-border leading-[normal] tracking-[normal] mq1050:h-auto">
      <FrameComponent2 onLinkClassesClick={onLinkClassesClick} />
      <main className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full">
        <section className="self-stretch h-[336.3px] flex flex-row items-start justify-start pt-0 px-0 pb-[43.3px] box-border max-w-full text-left text-11xl text-white font-montserrat">
          <div className="self-stretch flex-1 flex flex-row items-end justify-center py-[25px] pr-5 pl-[46px] box-border bg-[url('/public/background1@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 max-w-full z-[1] mq450:pl-5 mq450:box-border">
            <h2 className="m-0 relative text-inherit leading-[45px] font-bold font-inherit mq750:text-5xl mq750:leading-[36px] mq450:text-lg mq450:leading-[27px]">
              Membership
            </h2>
          </div>
        </section>
        <Section1 />
        <Section
          propBackgroundImage="url('/section4@3x.png')"
          propMarginTop="-68.3px"
          propAlignSelf="stretch"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propPadding="unset"
        />
      </main>
      <FrameComponent
        fLEXFITRemovebgPreview1="/flexfitremovebgpreview-11@2x.png"
        propBackgroundColor="unset"
      />
    </div>
  );
};

export default Membership;
