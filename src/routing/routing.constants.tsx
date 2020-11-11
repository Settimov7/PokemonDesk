import React from 'react';
import { HookRouter } from 'hookrouter';

import { HomePage } from '../pages/home-page/home-page.component';
import { PokedexPage } from '../pages/pokedex-page/pokedex-page.component';

import { IMenuItem } from './routing.types';

export const MENU_ITEMS: ReadonlyArray<IMenuItem> = [
  {
    id: '1',
    text: 'Home',
    url: '/',
    pageComponent: () => <HomePage />,
  },
  {
    id: '2',
    text: 'Pokedex',
    url: '/pokedex',
    pageComponent: () => <PokedexPage />,
  },
  {
    id: '3',
    text: 'Legendary',
    url: '/legendary',
    pageComponent: () => <h1>Legendary</h1>,
  },
  {
    id: '4',
    text: 'Documentation',
    url: '/documentation',
    pageComponent: () => <h1>Documentation</h1>,
  },
];

export const routes = MENU_ITEMS.reduce<HookRouter.RouteObject>((routesAcc, { url, pageComponent }) => {
  routesAcc[url] = pageComponent;

  return routesAcc;
}, {});
