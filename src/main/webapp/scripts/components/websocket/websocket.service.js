'use strict';

angular.module('jhipsterwebsocketApp')
	.service('WebSocket', function($q, $timeout) {
		var service = {}, listener = $q.defer(), socket = {
			client: null,
			stomp: null
		};

		service.RECONNECT_TIMEOUT = 30000;
		service.SOCKET_URL = "/updates";
		service.CHAT_TOPIC = "/topic/updates";
		service.CHAT_BROKER = "/updates";

		service.receive = function() {
			return listener.promise;
		};

		service.send = function(message) {
			var id = Math.floor(Math.random() * 1000000);
			socket.stomp.send(service.CHAT_BROKER, {
				priority: 9
			}, JSON.stringify({
				message: message,
				id: id
			}));
			messageIds.push(id);
		};

		var reconnect = function() {
			$timeout(function() {
				initialize();
			}, this.RECONNECT_TIMEOUT);
		};

		var getMessage = function(data) {
			var message = JSON.parse(data);
			message.timestamp = new Date(message.timestamp);
			return message;
		};

		var startListener = function() {
			socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
				listener.notify(getMessage(data.body));
			});
		};

		var initialize = function() {
			socket.client = new SockJS(service.SOCKET_URL);
			socket.stomp = Stomp.over(socket.client);
			socket.stomp.connect({}, startListener);
			socket.stomp.onclose = reconnect;
		};

		initialize();
		return service;
	});