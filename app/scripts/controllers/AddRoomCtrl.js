(function () {
	function AddRoomCtrl(Room, $uibModalInstance) {
		this.cancel = function() {
			$uibModalInstance.dismiss('cancel')
		}
		this.ok = function(){
			$uibModalInstance.close({$value: $uibModalInstance.selected.item});
			Room.add;
			console.log({$value: $uibModalInstance.selected.item});
		}
	}

	angular
		.module('blocChat')
		.controller('AddRoomCtrl', ['Room', '$uibModalInstance', AddRoomCtrl]);
})();



