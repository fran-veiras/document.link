/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/nav/NavBar';
import { Portada } from '../components/Portada/Portada';
import { Sources } from '../components/SourcesData';
import useCategories from '../hooks/useCategories';
import useSources from '../hooks/useSources';
import Head from 'next/head';
import { SpanCat } from '../components/Categories/spanCat';
import 'animate.css';

export default function HomePage() {
  const cats = useCategories();
  const sourcesJs = useSources();

  const [activeCategorie, setActiveCategorie] = useState([]);

  // console.log(ActiveCategorie);

  //info

  const [Info, setInfo] = useState([]);

  //see more

  const [view, setView] = useState(true);

  const viewMore = () => {
    view === false && setView(!false);
    view === !false && setView(!true);
  };

  // haz click tecnología

  const [initialTitle, setInitialTitle] = useState(true);

  return (
    <div className="container">
      <Head>
        <title>Document.link</title>
        <link rel="shortcut icon" href="/code.png" />
      </Head>
      <NavBar />
      <section>
        <Portada />
        <p className="intro-title animate__animated animate__backInRight">
          ¡Haz click sobre la tecnología que deseas aprender!
        </p>
        <div className="categories">
          {cats.map((cat) => {
            return (
              <SpanCat
                activeCategorie={activeCategorie}
                setActiveCategorie={setActiveCategorie}
                key={cat.technologies}
                tech={cat.technologies}
                setInitialTitle={setInitialTitle}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div className="source-section">
          {sourcesJs
            .filter((cat) => cat.technologies === activeCategorie)
            .map((src) => {
              return (
                <>
                  <Sources
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
          {activeCategorie.length > 0 && (
            <button onClick={viewMore} className="btn-grad">
              {(view === true && 'Ver más') || 'Ver menos'}
            </button>
          )}
        </div>
      </section>
      <style jsx>
        {`
          .intro-title {
            display: ${initialTitle ? 'block' : 'none'};
            text-align: center;
            color: #fff;
            transition: 0.5s;
          }
          button {
            position: absolute;
            bottom: -30px;
            opacity: 0.5;
            transition: 0.5s;
            background: rgb(16, 185, 129);
          }
          button:hover {
            position: absolute;
            bottom: -30px;
            opacity: 1;
            transition: 0.5s;
          }
          .source-section {
            max-height: ${view ? '500px' : '500px'};
            overflow-y: ${view ? 'hidden' : 'scroll'};
            transition: 0.5s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .view-more {
            position: absolute;
          }

          .title-sources {
            color: #fff;
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 50px;
          }

          /* NO BORRAR */
          .categories {
            display: block;
            text-align: center;
            margin-top: 4%;
            margin-bottom: 4%;
            transition: 0.5s;
          }

          section {
            width: 60vw;
            margin: 0 auto;
            margin-top: 50px;
            position: relative;
            margin-bottom: 2rem;
          }

          @media only screen and (min-width: 275px) and (max-width: 860px) {
            section {
              width: 100%;
              padding: 0px;
            }
            .container {
              padding: 0px;
            }
          }

          .container {
            padding: 20px;
            width: 100vw;
            height: 100%;
            background: #1e3163;
          }
        `}
      </style>
    </div>
  );
}
