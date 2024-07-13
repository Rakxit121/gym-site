import TitleBg from "../../images/pricing/titlebg.svg";
import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import TestimonialBoxes from "./TestimonialBoxes";

function Testimonials() {
  return (
    <>
      {/* testimonials div */}
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] "
            />
          </div>

          {/* testimonials wrapper */}
          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              {/* img */}
              <img
                alt="girl_img"
                src={TestimonialImg}
                className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
              />

              {/* all text-boxes */}
              <div className="flex">
                {/* text box */}
                <TestimonialBoxes />
              </div>

              {/* buttons */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}

export default Testimonials;
