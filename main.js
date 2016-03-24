/**
 * Created by administrator on 3/23/16.
 */

var app=angular.module("UIChallenge",[]);
var map;
function initMap() {
    console.log("Google Map is getting initialized");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
app.controller('controller',function($scope,$http){

    $scope.getMyLocation=function(){
        console.log("getting my location...");
        $http.get("http://ip-api.com/json/").then(function(config){
            $scope.data=config.data;
        },function(err){
            console.log("Error:",err);
        });
    }

    $scope.reset=function(){
        $scope.data.query="0.0.0.0";
        $scope.data.country=""
        $scope.data.regionName="";
        $scope.data.city="";
        $scope.data.timezone="";
        $scope.data.lat="";
        $scope.data.lon="";
    }

    $scope.locate=function(){
        console.log("locating website");
        //$scope.website="www.google.com";

        $http.get("http://ip-api.com/json/"+$scope.website).then(function(config){
            var myLatLng = {lat: config.data.lat, lng: config.data.lon};
            console.log(myLatLng);
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });

        },function(err){
            console.log("Error:",err);
        });

    }
});
