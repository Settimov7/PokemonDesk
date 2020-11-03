import React, { FC, useState } from 'react';

import { HeaderComponent } from './header.component';

import { MENU_ITEMS } from './header.constants';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenuButtonClickHandler = () => {
    setIsMenuOpened((previousIsMenuOpened) => !previousIsMenuOpened);
  };

  return (
    <HeaderComponent
      menuItems={MENU_ITEMS}
      isMenuOpened={isMenuOpened}
      openMenuButtonClickHandler={openMenuButtonClickHandler}
    />
  );
};
