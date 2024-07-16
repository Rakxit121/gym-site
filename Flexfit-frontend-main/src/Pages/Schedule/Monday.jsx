import React, { useState } from "react";
import { Link } from "react-router-dom";

function Monday() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const classes = [
    {
      name: "Fitness",
      day: "Monday",
      time: "9:00am - 10:00am",
      trainer: "David Vila",
    },
    {
      name: "Body Building",
      day: "Monday",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    {
      name: "Running",
      day: "Monday",
      time: "4:00pm - 5:00pm",
      trainer: "Junifor Jonas",
    },
    {
      name: "Cycling",
      day: "Monday",
      time: "6:00pm - 7:00pm",
      trainer: "Robert Louis",
    },
  ];

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
          <Link
            key={day}
            to={`/schedule/${day}`}
            className={`text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ${
              day === "monday" ? "bg-[#ff0336] text-white" : "hover:bg-[#ff0336] hover:text-white"
            } ease-in duration-200 hover:shadow-2xl`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Link>
        ))}
      </div>

      {/* Boxes */}
      <div className="mt-[5rem]">
        {classes.map((classInfo, index) => (
          <ul key={index} className="flex justify-between w-full min800:flex-col min800:text-center mb-3">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
              <p className="text-[18px] text-black font-bold mt-3">{classInfo.name}</p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">{classInfo.time}</p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">{classInfo.trainer}</p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full min800:justify-center items-center flex justify-end">
              <button
                onClick={() => openModal(classInfo)}
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
              >
                See More
              </button>
            </li>
          </ul>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-xl"
            >
              &times;
            </button>
            <div className="border p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{modalContent.name}</h2>
              <p className="mb-2">
                <strong>Day:   </strong> {modalContent.day}
              </p>
              <p className="mb-2">
                <strong>Time: </strong> {modalContent.time}
              </p>
              <p className="mb-4">
                <strong>Trainer: </strong> {modalContent.trainer}
              </p>
              <button
                onClick={closeModal}
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Monday;
