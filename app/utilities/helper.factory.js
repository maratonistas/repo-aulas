(function () {
    "use strict";

    angular.module('listaComprasApp')
        .factory('helperFactory', helperFactory);

    helperFactory.$inject = ['$rootScope', 'constantes'];

    function helperFactory($rootScope, constantes) {

        return {
            addMsg: addMsg,
            setRootScope: setRootScope,
            getRootScope: getRootScope,
            sendError: sendError,
            path: path
        }

        function addMsg(_msg, _tipo, _acao) {
            var lastMsg = $rootScope.listaMensagens.length ?
                $rootScope.listaMensagens[$rootScope.listaMensagens.length - 1] : { text: '' };

            if (lastMsg.text !== _msg) {
                $rootScope.listaMensagens.push({
                    text: _msg ? _msg : constantes.MSG_ERRO,
                    tipo: _tipo ? _tipo : 'info',
                    acao: _acao ? _acao : ''
                });
            }
        }

        function path(_path) {
            $rootScope.listaMensagens = [];
            return _path ? $location.path(_path) : $location.path();
        }

        function setRootScope(_key, _obj) {
            $rootScope[_key] = _obj;
        }

        function getRootScope(_key) {
            return $rootScope[_key];
        }

        function sendError(_error) {
            return { error: true, msg: _error.data.message };
        }

    }

})();