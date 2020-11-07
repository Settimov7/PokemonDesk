import React, { FC } from 'react';

import styles from './styles/footer.styles.scss';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <p className={styles.footerTeamText}>Ours Team</p>
    <p className={styles.footerTagline}>
      Make with
      <span role="img" aria-hidden="true" aria-label="red heart">
        ❤️
      </span>
    </p>
  </footer>
);
