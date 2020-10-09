(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['$location', 'ListaComprasService', 'helperFactory'];

    function headerController($location, service, helper) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = go;
        vm.serviceF = serviceF;
        vm.logout = logout;

        vm.ativo = false;

        function go(_path) {
            var path = _path ? _path : $location.path();
            if (path === '/login' || path === '/register') {
                $location.path(path);
            } else {
                isLoggedIn(path);
            }
            setPage();
        }

        function serviceF(_path) {
            return service.exemplo()
                .then(function (response) {
                    console.log('veio da service', response);
                });
        }

        function logout() {
            helper.setRootScope('userLogged', null);
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function isLoggedIn(_path) {
            if (helper.getRootScope('userLogged')) {
                $location.path(_path);
            } else {
                $location.path('/login');
                helper.addMsg('Você não tem acesso a esta página.', 'danger', 'Faça o login.');
            }
        }

        function setPage() {
            helper.setRootScope('page', $location.path().substring(1));
        }

    }

})();