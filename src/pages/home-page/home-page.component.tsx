import React, { FC } from 'react';

import { Header } from '../../components/header/header.container';
import { Footer } from '../../components/footer/footer.component';

import styles from './styles/home-page.styles.scss';
import { Button } from '../../components/button/button.component';
import { ButtonColor } from '../../components/button/button.constants';

export const HomePage: FC = () => (
  <div className={styles.home}>
    <Header />

    <main>
      <h1>This is App Component!</h1>

      <Button>See pokemons</Button>
      <Button isBlock>See pokemons</Button>
      <Button color={ButtonColor.SECONDARY} isSmall>
        See pokemons
      </Button>
    </main>

    <Footer />
  </div>
);
