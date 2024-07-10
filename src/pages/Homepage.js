import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import Section3 from "../components/Section3";
import Background from "../components/Background";
import FrameComponent4 from "../components/FrameComponent4";
import Container2 from "../components/Container2";
import FrameComponent3 from "../components/FrameComponent3";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Container1 from "../components/Container1";

const Homepage = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  return (
    <div className="w-full h-[5855.5px] relative bg-white overflow-y-auto leading-[normal] tracking-[normal] mq1050:h-auto mq1050:min-h-[5855.5]">
      <GroupComponent />
      <Section3 />
      <Background />
      <section className="absolute w-full top-[2233.5px] right-[0px] left-[0px] flex flex-row items-start justify-center bg-[url('/public/section1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <div className="w-[1240px] flex flex-col items-end justify-start pt-[114px] px-[25px] pb-[120px] box-border gap-[50.7px] max-w-[1240px] mq1250:max-w-full mq750:gap-[25px]">
          <FrameComponent4 />
          <Container2 />
        </div>
        <img
          className="h-[360px] w-[297px] relative object-contain hidden"
          alt=""
          src="/image@2x.png"
        />
      </section>
      <FrameComponent3 />
      <Section
        propBackgroundImage="url('/section2@3x.png')"
        propMarginTop="unset"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="3837.7px"
        propLeft="0px"
        propWidth="100%"
        propPadding="60px 0px"
        onItemContainerClick={onLinkContainerClick}
      />
      <Section2 />
      <Container1 />
    </div>
  );
};

export default Homepage;
