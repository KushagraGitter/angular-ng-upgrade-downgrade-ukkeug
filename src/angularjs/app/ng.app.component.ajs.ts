export const ngAppComponent = [
  'ngApp',
  {
    template: `
    hello
  <service-bootstrap (is-initialized)="onInit()"></service-bootstrap>
  <section ng-if="initialized">
    <ajs-app ></ajs-app>
  </section>
`,
    controller: [
      '$scope',
      function ($scope) {
        console.log('asasasas');
        $scope.onInit = onInit;
        $scope.initialized = false;

        function onInit() {
          console.log('onInit asasasas');
          $scope.initialized = true;
        }
      },
    ],
  },
];
