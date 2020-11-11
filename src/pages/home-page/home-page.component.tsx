import React, { FC } from 'react';

import { PageLayout } from '../../components/page-layout/page-layout.component';
import { Button } from '../../components/button/button.component';
import { Parallax } from '../../components/parallax/parallax.container';
import { Heading } from '../../components/heading/heading.component';
import { HeadingLevel } from '../../components/heading/heading.constants';

import styles from './styles/home-page.styles.scss';

export const HomePage: FC = () => (
  <PageLayout contentClassName={styles.homePage} isHomePageLayout>
    <Parallax className={styles.homePageParallax} />

    <section className={styles.homePageContent}>
      <Heading level={HeadingLevel.FIRST} className={styles.homePageHeading}>
        <strong>Find</strong> all your favorite <strong>Pokemon</strong>
      </Heading>

      <p className={styles.homePageDescription}>
        You can know the type of Pokemon, its strengths, disadvantages and abilities
      </p>

      <Button className={styles.homePageLink} isBlock href="/pokedex">
        See pokemons
      </Button>
    </section>
  </PageLayout>
);
