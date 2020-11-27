import React, { ChangeEventHandler, FC, useState } from 'react';

import { PokedexPageComponent } from './pokedex-page.component';
import { useDebounce } from '../../hooks/use-debounce/use-debounce';
import { DEBOUNCE_DELAY } from './pokedex-page.constants';

export const PokedexPage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_DELAY);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <PokedexPageComponent searchValue={searchValue} searchQuery={debouncedSearchValue} changeHandler={changeHandler} />
  );
};
