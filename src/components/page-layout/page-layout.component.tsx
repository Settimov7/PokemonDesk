import React, { FC } from 'react';
import classNames from 'classnames';

import { Header } from '../header/header.container';
import { Footer } from '../footer/footer.component';

import styles from './styles/page-layout.styles.scss';

interface IProps {
  contentClassName?: string;
  isHomePageLayout?: boolean;
}

export const PageLayout: FC<IProps> = ({ contentClassName, children, isHomePageLayout = false }) => {
  const componentClassName = classNames(styles.pageLayout, {
    [styles.pageLayoutHome]: isHomePageLayout,
  });

  return (
    <main className={componentClassName}>
      <Header />

      {contentClassName ? <div className={contentClassName}>{children}</div> : children}

      <Footer className={styles.pageLayoutFooter} />
    </main>
  );
};
