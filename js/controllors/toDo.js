// -- THE APP

var app = angular.module("myApp", ["ngRoute"]);

// -- THE CONTROLLERS

// MainController
app.controller('MainController', ['$scope', '$timeout' , function($scope, $timeout) {
  $scope.title = 'Click Me!';
  $scope.changeTitle = function() {
    $scope.title = "Now I'm different!";
  };

  $timeout(function () {
        $scope.title = "Why won't you click me?";
    }, 6000);

  // Weather
  $scope.fiveDay = {
    city_name: "Bristol",
    country: "GB",
    days: [
      {
        datetime: 1420477200000,
        icon: "images/sw-03.svg",
        high: 68,
        low: 37,
        classes: 'sun-clouds'
      },
      {
        datetime: 1420563600000,
        icon: "images/sw-13.svg",
        high: 46,
        low: 14,
        classes: 'sun-rain'
      },
      {
        datetime: 1420650000000,
        icon: "images/sw-11.svg",
        high: 46,
        low: 28,
        classes: 'sun-light-rain'
      },
      {
        datetime: 1420736400000,
        icon: "images/sw-01.svg",
        high: 59,
        low: 32,
        classes: 'sun'
      },
      {
        datetime: 1420390800000,
        icon: "images/sw-01.svg",
        high: 68,
        low: 36,
        classes: 'sun'
      },
    ]
  };

}]);

// TodoListController
app.controller('TodoListController', function() {
  var todoList = this;

  todoList.todos = [
    { text: 'learn angular', done: false },
    { text: 'learn angular2', done: false }
  ];

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.addTodo = function() {
    todoList.todos.push( { text: todoList.todoText, done: false } );
    todoList.todoText = '';
  };
});

app.controller('search', ['$scope', function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
  ];
}]);

app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});

app.config(function($routeProvider) {
   $routeProvider
    .when("/banana", {
        template : "<h3>Banana</h3><p>Bananas contain around 75% water.</p>"
    })
    .when("/tomato", {
        template : "<h3>Tomato</h3><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
        template : "<h3>None</h3><p>Nothing has been selected, Banana or Tomato?</p>"
    });
});
