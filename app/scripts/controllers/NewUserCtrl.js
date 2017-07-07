(function (){
	function NewUserCtrl(BlocChatCookies, $cookies, $uibModalInstance){
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
		.controller('NewUserCtrl', ['BlocChatCookies', '$cookies', '$uibModalInstance', NewUserCtrl]);
})();