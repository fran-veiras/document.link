import React from 'react';
import { Avatar } from '../Avatar/Avatar';

export const NavBar = ({ avatar, name }) => {
  return (
    <nav>
      <section>
        <div className="title-container">
          <h2>DOCUMENT.LINK</h2>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 60%;
          margin: 0 auto;
        }
        .title-container {
          display: flex;
          align-items: center;
        }
        .profile-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        h2 {
          color: white;
          cursor: pointer;
        }
        h2:hover {
          color: rgb(16, 185, 129);
        }
        h1 {
          margin: 0;
          color: white;
        }
        @media only screen and (min-width: 275px) and (max-width: 860px) {
          section {
            width: 90%;
          }
        }
      `}</style>
    </nav>
  );
};
