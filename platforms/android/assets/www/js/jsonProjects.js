var jsonProjects = angular.module('jsonProjects', ['ngRoute']);

 jsonProjects.controller('MainController', function($scope, $route, $routeParams,$location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

jsonProjects.controller('domeperso_ctrl', function ($scope) {

});

 jsonProjects.controller('HomeController', function($scope, $routeParams) {
     $scope.name = "HomeController";
     $scope.params = $routeParams;
 })


jsonProjects.controller('ProjectListCtrl', function ($scope,$route,$location) {

    var date = new Date();
    
    this.save = function(){
        if($('input[name=prenom]').val() == "" && $('input[name=nom]').val() == "")
            alert('veuillez entrer un nom ou prenom');
        else {
        var data ={
            id : localStorage.length,
            nom: $('input[name=nom]').val(),
            prenom : $('input[name=prenom]').val(),
            dome_donnees : "D1 "+check()/100+"° D2 "+check()/100+"° D3 "+ check()/100+"° M"+check()/100+"°",
            date_save: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
            };
     localStorage.setItem(localStorage.length, JSON.stringify(data));
  //  app.commande();
   //$route = "dome_perso";
   $location.path("dome_perso");
   }

};
  var objet = JSON.parse(localStorage.getItem(localStorage.length-1));

    $scope.nom = objet.prenom +" "+objet.nom;
    $scope.dome_donnees = objet.dome_donnees;
    $scope.date = objet.date_save;
});

jsonProjects.config(function($routeProvider,$locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'home.html',
    controller : 'HomeController'
  })
   .when('/dome', {
    templateUrl: 'dome_interface.html',
    controller: 'ProjectListCtrl',
  /*  resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }*/
  })
  .when('/dome_perso', {
    templateUrl: 'dome_perso.html',
    controller: 'domeperso_ctrl'
  });

  $routeProvider.otherwise('/home');
  // configure html5 to get links working on jsfiddle
  /*$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });*/

// $locationProvider.html5Mode(true).hashPrefix('!');
});

jsonProjects.directive('sliderond', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).roundSlider(scope.$eval(attrs.sliderond));
        }
    };
});