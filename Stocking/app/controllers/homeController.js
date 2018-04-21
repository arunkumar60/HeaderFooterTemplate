
app.controller('homeController', function ($scope,userNamesList,countryList,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place
    init();

    function init() {
        $("body").addClass("bodyImg");
        $("body").removeClass("stockDtlsColor");
    	$scope.userDetails = userNamesList.getUserList();
        $scope.countryDetails = countryList.getCountryList();
        $scope.initialVal = "Select User";
        $scope.initialValCountry = "Select Country";
    };
     $scope.selectUser = function(userName,userId){
     	$scope.initialVal = userName;
        $("#nameSel").text(userName);
        $rootScope.userDtls = {
            "userName" : userName,
            "userId" : userId
        }
    };
     $scope.selectCountry = function(countyName){
        $scope.initialValCountry = countyName;
    };

});

