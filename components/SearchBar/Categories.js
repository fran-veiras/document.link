/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const Categories = ({ title, photo, link }) => {
  return (
    <a href={link}>
      <div className="container">
        <div className="img-container">
          <img src={photo} alt="foto del contenido"></img>
        </div>
        <div className="text-box">
          <p>{title}</p>
        </div>
        <style jsx>{`
          .img-container {
            flex: 1;
            height: 100%;
          }
          .container {
            display: flex;
            column-gap: 10px;
            cursor: pointer;
            min-height: 100px;
            align-items: center;
            padding: 10px 5px;
          }
          .container:hover {
            background: #f8f8f8;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .text-box {
            flex: 1.5;
          }
          p {
            margin: 0;
            font-size: 15px;
          }
        `}</style>
      </div>
    </a>
  );
};
