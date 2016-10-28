import angular from 'angular';

import components from './components';
import 'angular-ui-router';
import routesConfig from './routes';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    components
  ])
  .config(routesConfig);
