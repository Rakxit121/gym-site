import React, { useState } from "react";
import { Link } from "react-router-dom";

function Saturday() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const classes = [
    {
      name: "Power Lifting",
      time: "9:00am - 10:00am",
      trainer: "David Laid",
    },
    {
      name: "Boxing",
      time: "10:00pm - 11:00pm",
      trainer: "Tyson Fury",
    },
    {
      name: "Yoga",
      time: "4:00pm - 5:00pm",
      trainer: "Milica Tails",
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
              day === "saturday" ? "bg-[#ff0336] text-white" : "hover:bg-[#ff0336] hover:text-white"
            } ease-in duration-200 hover:shadow-2xl`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Link>
        ))}
      </div>

      {/* Class boxes */}
      <div className="mt-8 space-y-6">
        {classes.map((classInfo, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1">
                <p className="text-lg font-bold">{classInfo.name}</p>
                <p className="text-sm text-gray-600">{classInfo.time}</p>
                <p className="text-sm text-gray-600">Trainer: {classInfo.trainer}</p>
              </div>
              <button
                onClick={() => openModal(classInfo)}
                className="text-white text-sm font-medium bg-gray-800 py-2 px-4 rounded hover:bg-[#ff0336] transition duration-200"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
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
                <strong>Time:</strong> {modalContent.time}
              </p>
              <p className="mb-4">
                <strong>Trainer:</strong> {modalContent.trainer}
              </p>
              <button
                onClick={closeModal}
                className="text-white text-sm font-medium bg-gray-800 py-2 px-4 rounded hover:bg-[#ff0336] transition duration-200"
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

export default Saturday;
