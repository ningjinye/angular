angular.module("ctrls",["services"])
    .controller("list",function($scope,$routeParams){
    $scope.id=$routeParams.id;
}).controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
    indexDate.then(function(data){
        //console.log(data);
        $scope.data=data.data;
    })
}]);
