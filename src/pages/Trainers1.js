import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent from "../components/FrameComponent";

const Trainers1 = () => {
  return (
    <div className="w-full h-[1926px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[407px] box-border leading-[normal] tracking-[normal] mq1050:h-auto">
      <img
        className="w-full h-[1085px] !m-[0] absolute right-[0px] bottom-[327px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/section6@3x.png"
      />
      <FrameComponent10 />
      <FrameComponent5 instructors="Instructor Profile" propHeight="unset" />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent
        fLEXFITRemovebgPreview1="/flexfitremovebgpreview-12@2x.png"
        propBackgroundColor="#fff"
      />
    </div>
  );
};

export default Trainers1;
