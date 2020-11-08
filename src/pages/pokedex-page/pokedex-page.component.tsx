import React, { FC } from 'react';

import { Header } from '../../components/header/header.container';
import { Footer } from '../../components/footer/footer.component';
import { PageLayout } from '../../components/page-layout/page-layout.component';

export const PokedexPage: FC = () => {
  return (
    <PageLayout>
      <Header />
      <main>PokedexPage</main>
      <Footer />
    </PageLayout>
  );
};
