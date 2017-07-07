(function() {
	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		if (!currentUser || currentUser === '' ){
			    $uibModal.open({
				controller: 'NewUserCtrl as newUser',
				templateUrl: '../../templates/newUser.html'
			});
		}


	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();
