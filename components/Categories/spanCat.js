import React, { useState } from 'react';

export const SpanCat = ({ tech }) => {
  const [activeCategorie, setActiveCategorie] = useState(false);

  const handleChange = () => {
    if (activeCategorie === false) {
      setActiveCategorie(!false);
    } else {
      setActiveCategorie(!true);
    }
  };

  return (
    <>
      <a onClick={handleChange} key={tech}>
        <p key={tech}>{tech}</p>
      </a>
      <style jsx>{`
        a {
          padding: 8px 15px;
          border: 1px solid rgb(16, 185, 129);
          display: inline-block;
          color: #fff;
          background: ${activeCategorie ? 'rgb(16, 185, 129)' : 'none'};
          border-radius: 9999px;
          margin: 5px 5px;
          cursor: pointer;
        }

        p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
