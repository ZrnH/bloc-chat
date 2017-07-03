(function () {
	function HomeCtrl(Room, $uibModal) {
		this.roomList = Room.all;
		this.open = function() {
				var modalInstance = $uibModal.open({
				controller: 'AddRoomCtrl as addRoom',		
				templateUrl: '../../templates/newRoom.html'
			});
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();