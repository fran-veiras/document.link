/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { SpanCat } from '../../components/Categories/spanCat';
import { NavBar } from '../../components/nav/NavBar';
import { Portada } from '../../components/Portada/Portada';
import { Sources } from '../../components/SourcesData';
import useCategories from '../../hooks/useCategories';
import useSources from '../../hooks/useSources';
import useUser from '../../hooks/useUser';

export default function HomePage() {
  const user = useUser();
  const cats = useCategories();
  const router = useRouter();
  const sourcesJs = useSources();
  const techFilter = techStatus;

  console.log(techFilter);

  //info

  const [Info, setInfo] = useState([]);

  useEffect(() => {
    user && setInfo(user);
  }, [user]);

  //see more

  const [view, setView] = useState(true);

  const viewMore = () => {
    view === false && setView(!false);
    view === !false && setView(!true);
  };

  const filter = () => {};

  return (
    <div className="container">
      <NavBar avatar={Info.avatar} name={Info.username} />
      <section>
        <Portada />
        <div className="categories">
          {cats.map((cat) => {
            return <SpanCat key={cat.technologies} tech={cat.technologies} />;
          })}
        </div>
      </section>
      <section>
        <h1 className="title-sources">Javascript</h1>
        <div className="source-section">
          {sourcesJs
            .filter((cat) => cat.technologies === techFilter)
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
        </div>
        <div className="btn-container">
          <button onClick={viewMore} className="btn-grad">
            {(view === false && 'Ver menos') || 'Ver más'}
          </button>
        </div>
      </section>
      <style jsx>
        {`
          .btn-container {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
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
            max-height: ${view ? '500px' : '1000px'};
            overflow-y: ${view ? 'hidden' : 'scroll'};
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
          }

          section {
            width: 60vw;
            margin: 0 auto;
            margin-top: 100px;
            position: relative;
            margin-bottom: 2rem;
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
