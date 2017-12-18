'use strict';

angular.module('app', [
'ngRoute'])
.controller('HeaderController',function ($scope,$routeParams,$location) {
$scope.saved = localStorage.getItem('elements');
$scope.elements = (localStorage.getItem('elements')!==null) ? JSON.parse($scope.saved) :
[ {text: 'First item whith customize...' , data:["Hide certain navbar item","Academic community concerned for the understanding of medieval texts."] }, {text: 'Second item',  

data:["Hide certain navbar items at certain screen sizes using responsive utility classes."]}]
localStorage.setItem('elements', JSON.stringify($scope.elements));

$scope.addItem = function() {
$scope.elements.push({
text: $scope.elementText,
data:  []
  });
$scope.elementText = ''; 
localStorage.setItem('elements', JSON.stringify($scope.elements));
   };
$scope.removeRow = function(text){        
var index = -1;   
var allelem = eval( $scope.elements );
for( var i = 0; i < allelem.length; i++ ) {
if( allelem[i].text === text ) {
index = i;
break;
  }
 }
if( index === -1 ) {
alert( "Something gone wrong" );
 }
$scope.elements.splice( index, 1 ); 
localStorage.setItem('elements', JSON.stringify($scope.elements));
  };

})

.controller('SelectController',function ($scope,$routeParams,$location) {
$scope.selected =$scope.elements[$routeParams.listid].data;
$scope.addComment=function(){
$scope.selected.push(
$scope.newData
 );

$scope.newData='';
localStorage.setItem('elements', JSON.stringify($scope.elements));
 }
$scope.removeComent = function(index,item){
$scope.selected.splice(index,1)
localStorage.setItem('elements', JSON.stringify($scope.elements));
console.log(item);
 }

localStorage.removeItem('item');
});

