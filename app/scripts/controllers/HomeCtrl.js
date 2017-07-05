(function () {
	function HomeCtrl(Room, Message, $uibModal) {
		this.roomList = Room.all;
		this.open = function() {
				var modalInstance = $uibModal.open({
				controller: 'AddRoomCtrl as addRoom',		
				templateUrl: '../../templates/newRoom.html'
			});
		}

		this.message = Message.messages;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();