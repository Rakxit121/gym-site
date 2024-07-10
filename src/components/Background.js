import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkmarginContainerClick = useCallback(() => {
    navigate("/login-1");
  }, [navigate]);

  return (
    <section
      className={`absolute w-full top-[2023.5px] right-[0px] left-[0px] flex flex-row items-start justify-center pt-[59.8px] px-0 pb-[60.5px] box-border bg-[url('/public/background@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-18xl text-white font-montserrat ${className}`}
    >
      <div className="w-[1240px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-[1240px] mq1250:max-w-full">
        <div className="w-[720px] flex flex-row items-start justify-start pt-0 px-[17px] pb-[0.7px] box-border max-w-[720px] mq750:max-w-full">
          <h1 className="m-0 relative text-inherit leading-[44.4px] font-bold font-inherit mq450:text-3xl mq450:leading-[27px] mq750:text-11xl mq750:leading-[36px]">
            <p className="m-0">We Are Always Providing Best</p>
            <p className="m-0">Fitness Service For You</p>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start pt-[17.3px] px-0 pb-0 text-center text-mini text-black1">
          <div
            className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px] cursor-pointer"
            onClick={onLinkmarginContainerClick}
          >
            <div className="bg-white flex flex-row items-start justify-start pt-[17.3px] px-10 pb-[14.7px]">
              <div className="relative leading-[23px] uppercase font-semibold inline-block min-w-[119px]">
                Join With Us  
              </div>
              <div className="h-[55px] w-[200px] relative box-border hidden border-[1px] border-solid border-gray-2600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
