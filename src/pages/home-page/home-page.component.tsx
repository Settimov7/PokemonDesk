import React, { FC } from 'react';

import { PageLayout } from '../../components/page-layout/page-layout.component';
import { Button } from '../../components/button/button.component';
import { Parallax } from '../../components/parallax/parallax.container';
import { HeadingComponent } from '../../components/heading/heading.component';
import { HeadingLevel } from '../../components/heading/heading.constants';

import styles from './styles/home-page.styles.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <PageLayout>
        <div className={styles.homePageWrapper}>
          <Parallax className={styles.homePageParallax} />

          <section className={styles.homePageContent}>
            <HeadingComponent level={HeadingLevel.FIRST} className={styles.homePageHeading}>
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </HeadingComponent>

            <p className={styles.homePageDescription}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>

            <Button className={styles.homePageLink} isBlock href="/pokedex">
              See pokemons
            </Button>
          </section>
        </div>
      </PageLayout>
    </div>
  );
};
