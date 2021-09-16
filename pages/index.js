/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Button } from '../components/button/Button';
import styles from '../styles/Home.module.css';
import { loginWithGitHub } from '../firebase/client';
import useUser, { USER_STATES } from '../hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    user && router.replace('/home');
  }, [user]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <section>
        <div className={styles.container}>
          <img src="/logo.png" alt="logo" />
          <h3>
            Welcome, here you will find communities and programming links 👨‍💻👩‍💻
          </h3>
          {user === USER_STATES.NOT_LOGED && <Button onClick={handleClick} />}
          {user === USER_STATES.NOT_KNOWN && (
            <img className="spiner" src="/loading.gif" />
          )}
        </div>
      </section>
      <style jsx>{`
        .spiner {
          width: 25px;
        }

        section {
          display: flex;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }
        img {
          width: 220px;
        }
      `}</style>
    </>
  );
}
