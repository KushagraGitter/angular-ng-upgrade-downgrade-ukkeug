export const configRoutes = [
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/angularjs', {
        template: '<ng-app></ng-app>',
      })
      .when('/angularjs/second', {
        template: '<ajs-second-app></ajs-second-app>',
      })
      .when('/angular', {
        template: '<app></app>',
      })
      .otherwise('angularjs');
  },
];
