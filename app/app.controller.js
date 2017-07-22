angular
  .module('todo-app')
	.controller('ToDoController', ToDoController);

function ToDoController($scope) {

  var ctrl = this;

  ctrl.items = ['item1','item2'];

  ctrl.add = function(todo) {
    var isDup = false;
    
    ctrl.items.some(function(value, index, _items) {
      if(value == todo.item){
        isDup = true;
      }
      return isDup;
    });

    if(!isDup){
      ctrl.items.push(todo.item);  
      console.log(ctrl.items);
    }else{
      console.log("Duplicate");
    }
    todo.item = '';
  };

  ctrl.remove = function(item) {

    console.log('item:' + item);

    var index = ctrl.items.indexOf(item);
    console.log('index:' + index);
    var removed = ctrl.items.splice(index, 1);
    console.log('removed:' + removed);
    console.log(ctrl.items);
  };
}
