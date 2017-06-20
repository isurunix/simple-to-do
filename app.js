var app = angular.module('app',[]);

app.controller('todo-controller', ['$scope', function($scope) {

  $scope.appContext = { items: ['item1','item2'] };

  $scope.methods = {

    add: function(todo) {
      $scope.appContext.items.push(todo.item);
      console.log($scope.appContext.items);
      todo.item = '';
    },

    remove: function(item) {
        console.log('item:' + item);
        var index = $scope.appContext.items.indexOf(item);
        console.log('index:' + index);
        var removed = $scope.appContext.items.splice(index, 1);
        console.log('removed:' + removed);
        console.log($scope.appContext.items);
    }
  };

}]);

app.component('toDoItem',{
  templateUrl: 'components/todo.html',
  bindings: {
    text:'@',
    methods: '@'
  },
});
