export default routesConfig;

/** @ngInject */
function routesConfig($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('home.create', {
      url: 'create',
      component: 'create'
    })
    .state('home.edit', {
      url: 'edit/{id}',
      component: 'create'
    });
}
