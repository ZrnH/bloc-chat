(function (){
	function NewUserCtrl($cookies, $uibModalInstance){
			this.username = null;

			this.ok = function(){
				if(this.username){
					$cookies.put('blocChatCurrentUser', this.username);
					$uibModalInstance.close();
				}
			}
	}
	
	angular
		.module('blocChat')
		.controller('NewUserCtrl', ['$cookies', '$uibModalInstance', NewUserCtrl]);
})();