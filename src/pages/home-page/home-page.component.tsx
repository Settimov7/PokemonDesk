import React, { FC } from 'react';

import { Header } from '../../components/header/header.container';
import { Footer } from '../../components/footer/footer.component';

import styles from './styles/home-page.styles.scss';

export const HomePage: FC = () => (
  <div className={styles.home}>
    <Header />

    <main>This is App Component!</main>

    <Footer />
  </div>
);
