
app.controller('homeController', function ($scope,userNamesList,countryList,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place
    init();

    function init() {
       /* angular.element(document.querySelector('#homePage')).addClass('mask-enable');
        angular.element(document.querySelector('#loaderElement')).removeClass('display-none');*/
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

