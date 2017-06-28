(function () {
	function RoomCtrl(Room){
		this.rooms = Room.room;
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['Room', RoomCtrl]);
})();