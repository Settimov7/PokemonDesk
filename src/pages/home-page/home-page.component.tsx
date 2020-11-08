import React, { FC } from 'react';

import { Header } from '../../components/header/header.container';
import { Footer } from '../../components/footer/footer.component';
import { Button } from '../../components/button/button.component';
import { Parallax } from '../../components/parallax/parallax.container';

import styles from './styles/home-page.styles.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />

      <main className={styles.homePageWrapper}>
        <Parallax className={styles.homePageParallax} />

        <section className={styles.homePageContent}>
          <h1 className={styles.homePageHeading}>Find all your favorite Pokemon</h1>

          <p className={styles.homePageDescription}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>

          <Button className={styles.homePageLink} isBlock href="#">
            See pokemons
          </Button>
        </section>
      </main>

      <Footer className={styles.homePageFooter} />
    </div>
  );
};
