import React, { FC } from 'react';

import { Header } from '../header/header.container';
import { Footer } from '../footer/footer.component';

import styles from './styles/page-layout.styles.scss';

export const PageLayout: FC = ({ children }) => (
  <main className={styles.pageLayout}>
    <Header />

    {children}

    <Footer className={styles.pageLayoutFooter} />
  </main>
);
