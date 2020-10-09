(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['helperFactory', 'ListaComprasService'];

    function acessoController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.tiposEmail = [
            { id: 1, desc: '@hotmail.com', disable: false, tipo: 'geral' },
            { id: 2, desc: '@outlook.com', disable: false, tipo: 'geral' },
            { id: 3, desc: '@gmail.com', disable: false, tipo: 'geral' },
            { id: 4, desc: '@stefanini.com', disable: false, tipo: 'corporativo' },
            { id: 5, desc: '@yahoo.com.br', disable: true, tipo: 'geral' },
            { id: 6, desc: '@empresa.com.br', disable: false, tipo: 'corporativo' },
            { id: 7, desc: '@teste.com', disable: true, tipo: 'corporativo' },
        ];

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.logar = logar;
        vm.cadastrar = register;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.msg, 'danger');
                    } else {
                        helper.addMsg(_resp.message, 'success');
                        helper.setRootScope('userLogged', _resp.userLogged);
                    }
                });
        }

        function register() {
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password,
            };
            return service.register(newUser)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                    } else {
                        helper.addMsg(_resp.message, 'success');
                        helper.path('/home');
                        helper.setRootScope('userLogged', _resp.userLogged);
                    }
                });
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();