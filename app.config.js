angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
 
      $routeProvider.
         when('/list', {
         templateUrl: 'list/list.template.html',
           controller:'HeaderController'
        }).
        when('/list/:listid', {
          templateUrl: 'comment/comment.template.html',
         controller:'HeaderController'

        }).
         when('/detail', {
          templateUrl: 'detail/detail.template.html'
        }).
       
        otherwise('/list');
    }
  ]);
