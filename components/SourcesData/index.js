/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Sources = ({ title, desc, tech, link, photo, format, user }) => {
  return (
    <div className="container">
      <div className="img">
        <h1 className="source-title-global">
          <mark>{format}</mark>
        </h1>
      </div>
      <div className="info">
        <a href={link}>
          <h1 className="source-title-global">
            {title} - <mark>{user}</mark>
          </h1>
        </a>
        <p>{tech}</p>
        <h3>{desc}</h3>
      </div>
      <style jsx>{`
        p {
          color: rgb(16, 185, 129);
          font-weight: 300;
          margin: 10px 0px;
        }
        h3 {
          color: #fff;
          margin-bottom: 0px;
        }
        .img {
          min-width: 320px;
          min-height: 180px;
          background: white;
          border-radius: 7px;
          flex: 1;
          background-image: url(${photo});
          background-size: cover;
          background-position: center;
        }
        .info {
          flex: 2;
        }
        .container {
          display: flex;
          gap: 25px;
          margin: 20px 0px;
          width: 100%;
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .container {
            display: flex;
            flex-direction: column;
            gap: 0px;
            margin: 30px 0px;
          }
          .img {
            min-width: 260px;
            min-height: 180px;
          }
          h1 {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
};
