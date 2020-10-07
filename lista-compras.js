(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

    angular.module('listaTarefasApp')
        .filter('capitalize', function () {
            return function (input) { return input.charAt(0).toUpperCase() + input.substring(1); }
        });


    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope'];

    function listaTarefasController(root) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        root.listaMensagens = [{ text: 'TESTE MENSAGEM.. teste', tipo: 'success' }];
        vm.teste = 'teste';

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})(angular);