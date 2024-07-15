import React from 'react';

function TrainerProfilePopup({ bgImg, title, trainer, date, experience, description, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-3/4 max-w-4xl h-[700px] overflow-hidden">
        <div className="relative h-[50%]">
          {/* <img src={bgImg} alt={title} className="w-full h-full object-cover" /> */}
             <div className={`${bgImg} shadow-2xl h-full object-cover`}></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h1 className="text-black font-bold text-[2.7rem] mb-3">{trainer}</h1>
          <span className="bg-[#ff0336] w-[50px] h-[4px] mb-6 block"></span>
          <p className="text-[#000] text-[1.6rem] font-medium mt-6">{title}</p>
          <p className="text-[#000] text-[1.6rem] font-medium mt-6">{date}</p>
          <p className="text-[#000] text-[1.6rem] font-medium mt-6">{experience}</p>
          <p className="text-[#000] text-[1.6rem] font-medium mt-6">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePopup;
