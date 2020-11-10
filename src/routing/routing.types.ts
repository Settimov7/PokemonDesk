import { ReactNode } from 'react';
import { HookRouter } from 'hookrouter';

export interface IMenuItem {
  id: string;
  text: string;
  url: string;
  pageComponent: (params: HookRouter.QueryParams) => ReactNode;
}
