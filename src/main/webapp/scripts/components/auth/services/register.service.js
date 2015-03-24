'use strict';

angular.module('jhipsterwebsocketApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


