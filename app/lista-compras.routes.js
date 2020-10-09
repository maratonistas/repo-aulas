(function () {
    "use strict";

    angular.module('listaComprasApp')
        .config(routes)
        .run(configDefaults);

    routes.$inject = ['$routeProvider'];
    configDefaults.$inject = ['$rootScope'];

    function routes($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'acesso/home.tpl.html',
            })
            .when('/login', {
                templateUrl: 'acesso/login.tpl.html',
            })
            .when('/register', {
                templateUrl: 'acesso/register.tpl.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    function configDefaults($rootScope) {
        $rootScope.listaMensagens = [];
    }

})();