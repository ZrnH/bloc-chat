(function () {
	function HomeCtrl(Room, Message, $uibModal) {
		this.roomList = Room.all;
		this.open = function() {
				var modalInstance = $uibModal.open({
				controller: 'AddRoomCtrl as addRoom',		
				templateUrl: '../../templates/newRoom.html'
			});
		}

		this.messages = null;
		this.currentRoom = null;
		this.selectRoom = function(room){
			this.currentRoom = room;
			this.messages = Message.getByRoomId(room.$id);
		}
	}

	// need function to select a current room


	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();