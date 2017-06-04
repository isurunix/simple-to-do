var app = angular.module('app',[]);

app.controller('todo-controller', ['$scope', function($scope) {
  $scope.items = ['item1','item2'];
  $scope.add = function(todo){
    $scope.items.push(todo.item);
    console.log($scope.items);
    todo.item='';
  };
  $scope.remove = function(item){
    console.log(item);
    var index = $scope.items.indexOf(item);
    console.log(index);
    var removed = $scope.items.splice(index, 1);
    console.log(removed);
    console.log($scope.items);
  };
}]);

app.component('toDoItem',{
  templateUrl: 'components/todo.html',
  bindings: {text:'@'},
});
