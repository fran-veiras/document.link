import { useState } from 'react';
import { AddInfo } from '../../firebase/client';
import useUser from '../../hooks/useUser';
import router from 'next/router';
import Head from 'next/head';

const INPUT_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function Form() {
  const user = useUser();

  const [link, setLink] = useState([]);
  const [desc, setDesc] = useState([]);
  const [option, setOption] = useState([]);
  const [status, setStatus] = useState(INPUT_STATES.USER_NOT_KNOWN);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    setStatus(INPUT_STATES.LOADING);
    e.preventDefault();

    AddInfo({
      avatar: user.avatar,
      content: [link, desc, option],
      userId: user.uid,
      username: user.username,
    })
      .then(() => {
        router.push('/');
      })

      .catch((err) => {
        setStatus(INPUT_STATES.ERROR);
      });
  };

  const isButtonDisabled = !link.length || status === INPUT_STATES.LOADING;

  return (
    <section onSubmit={handleSubmit}>
      <Head>
        <title>Gracias por estar</title>
        <link rel="shortcut icon" href="/code.png" />
      </Head>
      <div className="container">
        <div className="title">
          <h1>¡Gracias por estar!</h1>
          <h1>Ayudanos dejando tu sugerencia de contenido</h1>
        </div>
        <form>
          <input onChange={handleChange} value={link} placeholder="Link" />
          <input
            onChange={handleChangeDesc}
            value={desc}
            placeholder="Descripción del contenido"
          />
          <input
            onChange={handleChangeOption}
            value={option}
            placeholder="Lenguaje o comunidad"
          />
          <div className="btn-contain">
            <button disabled={isButtonDisabled} className="btn-grad">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .btn-contain {
          width: 100%;
          display: flex;
          justify-content: end;
        }
        .btn-grad {
          opacity: 0.5;
          background: rgb(16, 185, 129);
          margin-top: 2rem;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          display: block;
          border: none;
          cursor: pointer;
        }

        .btn-grad:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
          opacity: 1;
        }
        .title {
          margin-bottom: 50px;
        }
        input {
          font-size: 26px;
          margin-bottom: 15px;
          border-radius: 4px;
          padding: 0.25em 0.5em;
          background-color: #fff;
          text-decoration: none;
          outline: none;
          border: none;
          box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
          width: 100%;
        }
        section {
          background: linear-gradient(to right, #f037a6cd 0%, #1e3263a3 100%);
          width: 100vw;
          height: 100vh;
          padding: 20px;
        }
        h1 {
          margin: 0;
          font-size: 35px;
          font-weight: 500;
          color: #fff;
        }
        .container {
          width: 60%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .container {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
