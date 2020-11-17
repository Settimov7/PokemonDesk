import React, { ChangeEventHandler, FC, useState } from 'react';

import { PokedexPageComponent } from './pokedex-page.component';

export const PokedexPage: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  return <PokedexPageComponent searchValue={searchValue} changeHandler={changeHandler} />;
};
