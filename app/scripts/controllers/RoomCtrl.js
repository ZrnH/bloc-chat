(function(){
	function RoomCtrl( $uibModal , Room) {
		this.open = function() {
				var modalInstance = $uibModal.open({			
				templateUrl: '../../templates/newRoom.html'
			});
		}
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();