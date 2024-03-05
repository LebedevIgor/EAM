import React from "react";

const Lupa = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 16.846a6.347 6.347 0 1 0 0-12.694 6.347 6.347 0 0 0 0 12.694ZM17 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            fill="#6A81CB"
        />
        <path
            d="M13 15.978c.042.057.088.11.139.163l5.445 5.444a1.415 1.415 0 0 0 2.002-2l-5.446-5.444a1.42 1.42 0 0 0-.163-.141A9.247 9.247 0 0 1 13 15.98v-.002Z"
            fill="#6A81CB"
        />
    </svg>
);

export default Lupa;
