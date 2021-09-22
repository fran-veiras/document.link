/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import useCategories from '../../hooks/useCategories';

export const Portada = () => {
  const cats = useCategories();
  const router = useRouter();

  const form = () => {
    router.push('/form');
  };

  return (
    <div className="about">
      <div className="title-box">
        <h1>Bienvenido/a a document.link</h1>
        <p>
          Aquí podrás encontrar <mark>comunidades y material de estudio</mark>{' '}
          relacionados al Frontend
        </p>
        <p>¿Estas listo para empezar a aprender con contenido gratuito?</p>
        <button onClick={form} className="btn-grad">
          Colaborar
        </button>
      </div>
      <div className="img-box">
        <div className="container">
          <img src="/portada.png" alt="codeando" />
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 35px;
          font-weight: 500;
          background: linear-gradient(to right, #f037a5 0%, #b5deff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .btn-grad {
          background-image: linear-gradient(
            to right,
            #f037a5 0%,
            #2d46b988 51%,
            #f037a5 100%
          );
        }
        .btn-grad {
          margin-top: 2rem;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          display: block;
          border: none;
          cursor: pointer;
        }

        .btn-grad:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }

        .title-box {
          flex: 2;
        }

        .img-box {
          flex: 1;
        }

        a {
          color: #f8f8f800;
        }
        .about {
          color: #fff;
          display: flex;
          gap: 130px;
          margin-bottom: 8%;
          margin-top: 100px;
        }

        img {
          width: 350px;
          transition: 0.5s ease;
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .about {
            padding: 0px;
            flex-direction: column;
            gap: 60px;
          }
          img {
            width: 90%;
            max-width: 350px;
            text-align: center;
            transition: 0.5s ease;
            margin-bottom: 60px;
          }
          .container {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
