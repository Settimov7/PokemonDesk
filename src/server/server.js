import fs from 'fs';
import path from 'path';
import Hapi from '@hapi/hapi';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { setPath } from 'hookrouter';
import handlebars from 'handlebars';

import { App } from '../app/app.component';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request) => {
      const pathIndexHTML =path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'));
      const reactDOMString = ReactDOM.renderToString(<App />);
      const page = template({
        content: reactDOMString,
      });

      setPath(request.path);

      return page;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
