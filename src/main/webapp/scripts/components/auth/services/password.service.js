'use strict';

angular.module('jhipsterwebsocketApp')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
