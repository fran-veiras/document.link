import React from 'react';
import SvgComponent from '../../public/github';

export const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        Login With Github <SvgComponent />
      </button>
      <style jsx>{`
        button {
          margin-top: 10px;
          align-items: center;
          background: #1e3163;
          border-radius: 9999px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-weight: 800;
          padding: 2px 10px;
          transition: opacity 0.3s ease;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};
