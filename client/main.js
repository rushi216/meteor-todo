import angular from "angular";
import angularMeteor from "angular-meteor";
import { Mongo } from 'meteor/mongo';

angular.module("todo", [
  angularMeteor
]).controller("todoListController", function($scope, $reactive){
   $scope.helpers({
     todos(){
       return Todos.find({});
     }
   });

   $scope.addTodo = function(newTodo){
     Todos.insert({task:newTodo, checked: false});

     $scope.newTodo = "";
   }

   $scope.removeTodo = function(todo){
     Todos.remove(todo._id);
   }

   $scope.toggleStatus = function(todo){
     Todos.update(todo._id, {
       $set: {
         checked : !todo.checked
       }
     })
   }
});