import React from 'react';
import { HookRouter } from 'hookrouter';

import { HomePage } from '../pages/home-page/home-page.component';
import { PokedexPage } from '../pages/pokedex-page/pokedex-page.container';

import { IMenuItem, IRouteItem } from './routing.types';
import { PokemonPageComponent } from '../pages/pokemon-page/pokemon-page.component';

export const Route = {
  HOME: '/',
  POKEDEX: '/pokedex',
  LEGENDARY: '/legendary',
  DOCUMENTATION: '/documentation',
  POKEMON: '/pokedex/:id',
} as const;

export const MENU_ITEMS: ReadonlyArray<IMenuItem> = [
  {
    id: '1',
    text: 'Home',
    url: Route.HOME,
    pageComponent: () => <HomePage />,
  },
  {
    id: '2',
    text: 'Pokedex',
    url: Route.POKEDEX,
    pageComponent: () => <PokedexPage />,
  },
  {
    id: '3',
    text: 'Legendary',
    url: Route.LEGENDARY,
    pageComponent: () => <h1>Legendary</h1>,
  },
  {
    id: '4',
    text: 'Documentation',
    url: Route.DOCUMENTATION,
    pageComponent: () => <h1>Documentation</h1>,
  },
];

export const ROUTE_ITEMS: ReadonlyArray<IRouteItem> = [
  {
    url: Route.POKEMON,
    pageComponent: ({ id }) => <PokemonPageComponent id={id} />,
  },
];

export const routes = [...MENU_ITEMS, ...ROUTE_ITEMS].reduce<HookRouter.RouteObject>(
  (routesAcc, { url, pageComponent }) => {
    routesAcc[url] = pageComponent;

    return routesAcc;
  },
  {},
);
