import { IMenuItem } from './header.types';

export const MENU_ITEMS: ReadonlyArray<IMenuItem> = [
  {
    id: '1',
    text: 'Home',
    url: '/',
  },
  {
    id: '2',
    text: 'Pokedex',
    url: '/pokedex',
  },
  {
    id: '3',
    text: 'Legendary',
    url: '/legendary',
  },
  {
    id: '4',
    text: 'Documentation',
    url: '/documentation',
  },
];
