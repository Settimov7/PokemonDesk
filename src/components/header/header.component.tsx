import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

import { Logo } from '../logo/logo.component';

import { MenuItem } from './header.types';

import styles from './header.styles.scss';

type Props = {
  menuItems: ReadonlyArray<MenuItem>;
  isMenuOpened: boolean;
  openMenuButtonClickHandler: MouseEventHandler<HTMLButtonElement>;
};

export const HeaderComponent: FC<Props> = ({ menuItems, isMenuOpened, openMenuButtonClickHandler }) => {
  const navigationClassName = classNames(styles.headerNavigation, isMenuOpened && styles.headerNavigationOpened);

  return (
    <header className={styles.header}>
      <nav className={navigationClassName}>
        <Logo className={styles.headerLogo} />

        <button
          className={styles.headerOpenMenuButton}
          type="button"
          aria-expanded={isMenuOpened}
          aria-controls="menu__list"
          aria-label="Open the menu"
          onClick={openMenuButtonClickHandler}>
          {isMenuOpened ? (
            <svg width="31" height="31" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 31">
              <rect width="34.6" height="9" fill="#212121" rx="3" transform="scale(1.0051 .99487) rotate(45 2.8 7.8)" />
              <rect
                width="34.6"
                height="9"
                fill="#212121"
                rx="3"
                transform="matrix(-.71072 .70348 -.71072 -.70348 31 6.3)"
              />
            </svg>
          ) : (
            <svg width="32" height="22" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 22">
              <rect width="30.9" height="5.5" x=".9" fill="#212121" rx="2" />
              <rect width="30.9" height="5.5" x=".9" y="8.3" fill="#212121" rx="2" />
              <rect width="30.9" height="5.5" x=".9" y="16.5" fill="#212121" rx="2" />
            </svg>
          )}
        </button>

        <ul className={styles.headerMenuList} id="menu__list">
          {menuItems.map(({ text, url }) => (
            <li>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
