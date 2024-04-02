import React from 'react';

const ArrowAccordion = ({ isContentVisible }) => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{
        transform: ` ${isContentVisible ? 'rotate(0)' : 'rotate(270deg)'}`,
      }}
    >
      <path
        stroke="#0271c7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 9-7 7-7-7"
      />
    </svg>
  );
};

export default ArrowAccordion;
