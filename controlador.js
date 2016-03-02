angular.module("PrimerModulo",[])
.controller("PrimerControlador",function($scope,$http){
$scope.posts=[];
$scope.searchMovie = function(){
  
$http.get("http://www.omdbapi.com/?s=" + $scope.search + "&y=&plot=short&r=json")
.success(function(data){
console.log(data);
$scope.posts=data;
})
.error(function(err){
});
};

$scope.searchMovieClick = function(){
setTimeout(fetchClick, 200);
};

function fetchClick() {
$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
.success(function(response){ $scope.details = response;  });
$http.get("http://www.omdbapi.com/?s=" + $scope.search + "&type=movie")
.success(function(response){  $scope.results = response; });
}

function fetch() {
$http.get("http://www.omdbapi.com/?s=" + $scope.search + "&type=movie")
.success(function(response){  $scope.results = response; });
}

$scope.showMovie = function(post) {
$scope.search = post.Title;
$scope.searchMovieClick();
}
});



 // reinicia los textbox http://www.omdbapi.com/?t=batman&y=&plot=short&r=json
//http://www.omdbapi.com/?t=batman&y=&plot=short&r=json
//http://jsonplaceholder.typicode.com/posts?id=1
//?s=Batmanhttp://jsonplaceholder.typicode.com/posts
//http://www.omdbapi.com/?s=superman&y=&plot=short&r=json
 


