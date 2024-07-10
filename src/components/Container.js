import PropTypes from "prop-types";

const Container = ({ className = "", image, beginner }) => {
  return (
    <div
      className={`self-stretch h-[253.3px] flex flex-row items-start justify-start pt-[211.3px] px-[65px] pb-0 box-border relative text-center text-xl text-crimson-200 font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-[380px] overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
      <div className="flex-1 bg-white flex flex-row items-start justify-start py-[15px] px-[76px] z-[1]">
        <b className="relative leading-[30px] inline-block min-w-[97px] mq450:text-base mq450:leading-[24px]">
          {beginner}
        </b>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  beginner: PropTypes.string,
};

export default Container;
