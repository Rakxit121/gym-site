import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import Container4 from "../components/Container4";
import Footer1 from "../components/Footer1";

const Schedule = () => {
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    navigate("/membership");
  }, [navigate]);

  const onItemContainerClick1 = useCallback(() => {
    navigate("/trainers");
  }, [navigate]);

  const onBorderContainerClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent2
        onItemContainerClick={onItemContainerClick}
        onItemContainerClick1={onItemContainerClick1}
        onBorderContainerClick={onBorderContainerClick}
      />
      <section className="self-stretch h-[405px] flex flex-row items-end justify-center py-[25px] pr-5 pl-[21px] box-border bg-[url('/public/background2@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-11xl text-white font-montserrat">
        <h2 className="m-0 relative text-inherit leading-[45px] font-bold font-inherit mq750:text-5xl mq750:leading-[36px] mq450:text-lg mq450:leading-[27px]">
          Schedule by Day
        </h2>
      </section>
      <section className="self-stretch h-[1068px] relative max-w-full mq1250:h-auto mq1250:min-h-[1068]">
        <Container4 />
        <Footer1 />
      </section>
    </div>
  );
};

export default Schedule;
