import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/home-page/home-page.component';
import { PokedexPage } from '../pages/pokedex-page/pokedex-page.component';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/pokedex">
          <PokedexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
