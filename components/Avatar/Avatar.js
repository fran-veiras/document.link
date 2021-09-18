/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useUser from '../../hooks/useUser';

export const Avatar = ({ src }) => {
  const user = useUser();

  return (
    <div>
      {user && <img src={src} alt="profile-photo" />}
      <style jsx>{`
        img {
          width: 50px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};
