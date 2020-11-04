import React, { FC } from 'react';

import { Header } from '../header/header.container';
import { Footer } from '../footer/footer.component';

import styles from './app.styles.scss';

export const App: FC = () => (
  <div className={styles.app}>
    <Header />

    <main>This is App Component!</main>

    <Footer />
  </div>
);
