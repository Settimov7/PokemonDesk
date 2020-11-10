import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';

import { routes } from '../routing/routing.constants';

export const App: FC = () => {
  const pageComponent = useRoutes(routes);

  if (!pageComponent) {
    return <h1>404</h1>;
  }

  return pageComponent;
};
