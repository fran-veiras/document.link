/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

export const SpanCat = ({
  tech,
  setActiveCategorie,
  activeCategorie,
  setInitialTitle,
}) => {
  const [categorie, setCategorie] = useState(false);

  const handleChange = () => {
    const techStatus = tech;
    if (categorie === false) {
      setCategorie(!false);
      setActiveCategorie(techStatus);
      setInitialTitle(!true);
    } else {
      setCategorie(!true);
      setActiveCategorie([]);
    }
  };

  useEffect(() => {
    const techStatus = tech;
    activeCategorie !== techStatus && setCategorie(!true);
  }, [activeCategorie]);

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
          background: ${categorie ? 'rgb(16, 185, 129)' : 'none'};
          border-radius: 9999px;
          margin: 5px 5px;
          cursor: pointer;
          transition: 0.3s;
        }

        p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
