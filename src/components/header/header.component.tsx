import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { A, usePath } from 'hookrouter';

import { Logo } from '../logo/logo.component';

import { Route } from '../../routing/routing.constants';

import { IMenuItem } from '../../routing/routing.types';

import { ReactComponent as BurgerMenuSvg } from './assets/burger-menu.svg';
import { ReactComponent as CrossSvg } from './assets/cross.svg';

import styles from './styles/header.styles.scss';

interface IProps {
  menuItems: ReadonlyArray<IMenuItem>;
  isMenuOpened: boolean;
  openMenuButtonClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export const HeaderComponent: FC<IProps> = ({ menuItems, isMenuOpened, openMenuButtonClickHandler }) => {
  const path = usePath();
  const headerClassName = classNames(styles.header, isMenuOpened && styles.headerOpened);

  return (
    <header className={headerClassName}>
      <nav className={styles.headerNavigation}>
        <Logo className={styles.headerLogo} href={Route.HOME} />

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
          {menuItems.map(({ id, text, url }) => {
            const isActiveItem = path === url;
            const itemClassName = classNames(styles.headerMenuItem, {
              [styles.headerMenuItemActive]: isActiveItem,
            });

            return (
              <li key={id}>
                <A className={itemClassName} href={url}>
                  {text}
                </A>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
