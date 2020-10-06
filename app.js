(function () {
    "use strict";

    // PRECISAMOS SELECIONAR O ELEMENTO PARA PODER DIZER ONDE VAI FICAR A APLICAÇÃO
    var div1 = document.getElementById('app1');
    var div2 = document.getElementById('app2');

    // APLICAÇÃO 1
    angular
        .module('app1', [])
        .controller('controlador1', function ($scope) {
            $scope.nome = 'Lucas';
        });


    // APLICAÇÃO 2
    angular
        .module('app2', [])
        .controller('controlador2', function ($scope) {
            $scope.contador = 10;
        });

    // EXECUTA MANUALMENTE CADA APLICAÇÃO EM SEU ELEMENTO DO HTML
    // POR ISSO NÃO É COLOCADO O NG-APP, 
    // PORQUE NO BOOTSTRAP, É PASSADO O ELEMENTO NO QUAL VAI RENDERIZAR A APLICAÇÃO
    // PRIMEIRO PARAMETRO O ELEMENTO E SEGUNDO O MODULO DA APLICAÇÃO

    angular.bootstrap(div1, ['app1']);
    angular.bootstrap(div2, ['app2']);
})();