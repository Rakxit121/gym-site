import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImageBlock from "../components/ImageBlock";
import ContactInfo from "../components/ContactInfo";
import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";

const Payment = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  return (
    <div className="w-full h-[2220px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[410.5px] box-border leading-[normal] tracking-[normal] mq1250:h-auto">
      <img
        className="w-[1440px] h-[1096px] !m-[0] absolute top-[405px] right-[-2px] object-cover"
        alt=""
        src="/section@2x.png"
      />
      <ImageBlock />
      <ContactInfo />
      <Section onItemContainerClick={onLinkContainerClick} />
      <FrameComponent fLEXFITRemovebgPreview1="/flexfitremovebgpreview-11@2x.png" />
    </div>
  );
};

export default Payment;
