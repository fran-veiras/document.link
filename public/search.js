import * as React from 'react';

function SearchImage(props) {
  return (
    <svg
      className="icon"
      viewBox="0 0 60 60"
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h50v50H0z" />
      <circle
        cx={21}
        cy={20}
        fill="none"
        r={16}
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M32.229 32.229L45.5 45.5"
      />
      <style jsx>{`
        .icon {
          cursor: pointer;
        }
      `}</style>
    </svg>
  );
}

export default SearchImage;
