import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

import { Logo } from '../logo/logo.component';

import { IMenuItem } from './header.types';

import { ReactComponent as BurgerMenuSvg } from './assets/burger-menu.svg';
import { ReactComponent as CrossSvg } from './assets/cross.svg';

import styles from './styles/header.styles.scss';

type Props = {
  menuItems: ReadonlyArray<IMenuItem>;
  isMenuOpened: boolean;
  openMenuButtonClickHandler: MouseEventHandler<HTMLButtonElement>;
};

export const HeaderComponent: FC<Props> = ({ menuItems, isMenuOpened, openMenuButtonClickHandler }) => {
  const headerClassName = classNames(styles.header, isMenuOpened && styles.headerOpened);

  return (
    <header className={headerClassName}>
      <nav className={styles.headerNavigation}>
        <Logo className={styles.headerLogo} />

        <button
          className={styles.headerOpenMenuButton}
          type="button"
          aria-expanded={isMenuOpened}
          aria-controls="menu__list"
          aria-label="Open the menu"
          onClick={openMenuButtonClickHandler}>
          {isMenuOpened ? <CrossSvg /> : <BurgerMenuSvg />}
        </button>

        <ul className={styles.headerMenuList} id="menu__list">
          {menuItems.map(({ id, text, url }) => (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};