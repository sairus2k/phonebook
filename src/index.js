import angular from 'angular';

import components from './components';
import common from './common';
import 'angular-ui-router';
import routesConfig from './routes';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    common,
    components
  ])
  .config(routesConfig);
