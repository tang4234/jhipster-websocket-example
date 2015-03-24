'use strict';

angular.module('jhipsterwebsocketApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
