import Content from "../components/Content";
import Footer from "../components/Footer";

const AdminMembers = () => {
  return (
    <div className="w-full h-[718px] relative bg-gray-2200 overflow-hidden leading-[normal] tracking-[normal] text-left text-sm-5 text-honeydew-100 font-inter mq975:h-auto mq975:min-h-[718]">
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[267px] max-h-full w-[1173px] object-cover"
        alt=""
        src="/background@2x.png"
      />
      <Content />
      <div className="absolute top-[106px] left-[1260px] rounded-lg bg-mediumseagreen-800 flex flex-row items-end justify-start pt-[7px] pb-[9px] pr-3.5 pl-[15px] gap-[11px] z-[1] border-[1px] border-solid border-mediumseagreen-700">
        <div className="h-9 w-36 relative rounded-lg bg-mediumseagreen-800 box-border hidden border-[1px] border-solid border-mediumseagreen-700" />
        <img
          className="h-3.5 w-3.5 relative object-contain z-[2]"
          alt=""
          src="/image-20@2x.png"
        />
        <div className="relative inline-block min-w-[88px] z-[2]">
          NewMember
        </div>
      </div>
      <a className="[text-decoration:none] absolute top-[107px] left-[307px] text-5xl text-darkslategray-500 flex items-center w-[111px] h-[29px] min-w-[111px] z-[1] mq450:text-lgi">
        Members
      </a>
      <img
        className="absolute top-[13px] left-[1362px] w-10 h-10 object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/image-211@2x.png"
      />
      <div className="absolute top-[7px] left-[1317px] bg-whitesmoke-100 w-[35px] h-[35px] z-[1] text-center text-mini-5 text-mistyrose-300">
        <div className="absolute right-[1px] bottom-[1px] bg-whitesmoke-100 w-[34px] h-[34px] hidden" />
        <div className="absolute right-[1px] bottom-[4px] bg-whitesmoke-100 w-[31px] flex flex-row items-start justify-start pt-1.5 px-[5px] pb-1 box-border z-[1]">
          <div className="h-7 w-[30px] relative bg-whitesmoke-100 hidden" />
          <div className="w-[19px] flex flex-row items-start justify-start">
            <a className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[19px] z-[1]">
              13
            </a>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-15px] text-sm-5 text-mistyrose-400">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[15px] z-[2]">
                13
              </a>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[6px] left-[1px] w-7 h-7 object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
      </div>
      <img
        className="absolute top-[23px] left-[1256px] w-[29px] h-5 object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
      <img
        className="absolute top-[25px] left-[317px] w-[15px] h-[15px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/image-24@2x.png"
      />
      <Footer />
    </div>
  );
};

export default AdminMembers;
