import { ReactNode } from 'react';
import { HookRouter } from 'hookrouter';

export interface IRouteItem {
  url: string;
  pageComponent: (params: HookRouter.QueryParams) => ReactNode;
}

export interface IMenuItem extends IRouteItem {
  id: string;
  text: string;
}
