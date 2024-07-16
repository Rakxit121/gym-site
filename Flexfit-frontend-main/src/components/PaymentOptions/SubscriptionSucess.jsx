import React from 'react';

const SubscriptionSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h2>
      <p className="text-center text-lg text-gray-700">
        Welcome to our gym family! Your subscription to our premium membership plan is now active. 
        We're excited to support you on your fitness journey.
      </p>
    </div>
  );
};

export default SubscriptionSuccess;
