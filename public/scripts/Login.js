
var app = angular.module('Login', []);
app.controller('loginCtrl', function($scope, $http) {
    $scope.btnLoginclick = function () {
		var url = 'http://40.86.185.58:18080/SpringMVCHibernate/authenticate'
		var param = {};
        param.user = $('#username').val();
		param.password = $('#password').val();
		var login_param = JSON.stringify(param);		//Parameter to be sent for Authentication
		
		$http.post(url,login_param).
		then(function mySuccess(response) {
		    $scope.temp = angular.fromJson(response.data);
		    if ($scope.temp.success) {
		        $("#validateUserPswd").hide();
		        $("#jsonWO").val(JSON.stringify(response.data));
		        $("#WOform").submit();
		    }
		    else {
		        $("#validateUserPswd").show();
		    }
		    
		}, function myError(response) {
		    console.log(response.statusText);
		});
    }
});
