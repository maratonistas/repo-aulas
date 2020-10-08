(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);


    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = [];

    function listaTarefasController() {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})(angular);