import PropTypes from "prop-types";

const Item = ({ className = "", johnWeights }) => {
  return (
    <div
      className={`w-[273.4px] bg-whitesmoke-600 flex flex-col items-start justify-start p-[25px] box-border gap-[7.5px] text-center text-sm text-darkgray-1200 font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative leading-[21px] font-medium inline-block min-w-[50px]">
          Trainer
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[46px] text-lg text-black1">
        <b className="self-stretch h-[54px] relative leading-[27px] flex items-center justify-center">
          {johnWeights}
        </b>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  johnWeights: PropTypes.string,
};

export default Item;
