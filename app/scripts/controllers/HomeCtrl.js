(function () {
	function HomeCtrl(Room, Message, $cookies, $uibModal) {
		this.roomList = Room.all;
		this.open = function() {
				var modalInstance = $uibModal.open({
				controller: 'AddRoomCtrl as addRoom',		
				templateUrl: '../../templates/newRoom.html'
			});
		}
		this.newMessage = null;
		this.messages = null;
		this.currentRoom = null;
		this.selectRoom = function(room){
			this.currentRoom = room;
			this.messages = Message.getByRoomId(room.$id);
		}

		this.sendMessage = function(){
			var username = $cookies.get('blocChatCurrentUser');
			Message.send(this.newMessage, username, this.currentRoom.$id);
			this.newMessage = null;
		}
	}


	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$cookies','$uibModal', HomeCtrl]);
})();