import React, { useState } from 'react';
import useSources from '../../hooks/useSources';
import SearchImage from '../../public/search';
import { Categories } from './Categories';

export const SearchBar = () => {
  const sources = useSources();
  const [categorie, setCategorie] = useState([]);

  const handleChange = (e) => {
    setCategorie(e.target.value);
  };

  //
  const [activeInput, setActiveInput] = useState(false);

  const handleActiveStatus = () => {
    activeInput === false && setActiveInput(!false);
  };

  const keyHandleActive = (e) => {
    e.keyCode == '27' && setActiveInput(!true) & setCategorie('');
  };

  return (
    <div className="container">
      <input
        onChange={handleChange}
        value={categorie}
        type="text"
        className="search-bar"
        placeholder="search content.."
        onKeyDown={keyHandleActive}
      />
      <span className="focus-border"></span>
      <a onClick={handleActiveStatus}>
        <SearchImage />
      </a>
      <div className="search-box">
        {sources
          .filter(
            (cat) =>
              categorie.length > 0 &&
              (cat.description.toLowerCase().includes(categorie) ||
                cat.title.toLowerCase().includes(categorie) ||
                cat.technologies.toLowerCase().includes(categorie))
          )
          .map((src) => {
            return (
              <>
                <Categories
                  key={src.title}
                  title={src.title}
                  desc={src.description}
                  tech={src.technologies}
                  link={src.link}
                  photo={src.photoUrl}
                  format={src.format}
                  user={src.user}
                />
              </>
            );
          })}
      </div>
      <style jsx>{`
        .search-bar {
          display: ${activeInput ? 'block' : 'none'};
        }
        .container {
          display: flex;
          gap: 15px;
          align-items: center;
          position: relative;
        }
        input {
          color: #fff;
          font-size: 18px;
          font-weight: 400;
          box-sizing: border-box;
          background: none;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          padding: 5px 5px;
        }
        .search-box {
          background: #fff;
          position: absolute;
          overflow-x: hidden;
          overflow-y: scroll;
          top: 70px;
          display: flex;
          flex-direction: column;
          max-height: 400px;
        }
      `}</style>
    </div>
  );
};
