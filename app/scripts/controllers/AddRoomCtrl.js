(function () {
	function AddRoomCtrl(Room, $uibModalInstance) {

		this.cancel = function() {
			$uibModalInstance.dismiss('cancel')
		}
		this.ok = function(){
			Room.add(this.newRoom);
			$uibModalInstance.close();
		}
	}

	angular
		.module('blocChat')
		.controller('AddRoomCtrl', ['Room', '$uibModalInstance', AddRoomCtrl]);
})();



