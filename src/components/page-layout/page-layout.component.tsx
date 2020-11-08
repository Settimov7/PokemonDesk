import React, { FC } from 'react';

import styles from './styles/page-layout.styles.scss';

export const PageLayout: FC = ({ children }) => <div className={styles.pageLayout}>{children}</div>;
