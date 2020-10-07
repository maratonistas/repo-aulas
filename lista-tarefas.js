(function () {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller("listaTarefasController", listaTarefasController);

    listaTarefasController.$inject = ['$scope'];

    function listaTarefasController($scope) {
        var vm = this;


        vm.tarefas = [
            { text: 'Estudar AngularJS', feito: true },
            { text: 'Fazer uma aplicação em AngularJS', feito: false }
        ];

        vm.restam = restam;
        vm.addTarefa = addTarefa;
        vm.arquivar = arquivar;

        function restam() {
            var count = 0;
            angular.forEach(vm.tarefas, function (trf) {
                if (!trf.feito) count++;
            });
            return count;
        }

        function addTarefa() {
            vm.tarefas.push({ text: vm.tarefaText, feito: false });
            vm.tarefaText = '';
        }

        function arquivar() {
            // var oldTarefas = vm.tarefas;
            // vm.tarefas = [];

            // angular.forEach(oldTarefas, function (trf) {
            //     if (!trf.feito)
            //         vm.tarefas.push(trf);
            // });

            vm.tarefas = vm.tarefas.filter(function (trf) { return !trf.feito });
        }

    }

})();