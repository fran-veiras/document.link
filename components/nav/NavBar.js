import React from 'react';
import { Avatar } from '../Avatar/Avatar';

export const NavBar = ({ avatar, name }) => {
  return (
    <nav>
      <section>
        <div className="profile-container">
          <Avatar src={avatar} />
          <h1>{name}</h1>
        </div>
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
      `}</style>
    </nav>
  );
};
