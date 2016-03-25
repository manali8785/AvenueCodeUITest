/**
 * Created by administrator on 3/23/16.
 */

var app=angular.module("UIChallenge",[]);
var map;
function init() {
    console.log("Google Map is getting initialized");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

app.controller('controller',function($scope,$http,MarkerService){
    $scope.getMyLocation=function(){
        console.log("getting my location...");
        $http.get("http://ip-api.com/json/").then(function(config){
            $scope.data=config.data;
            var MyLatLng = {lat: config.data.lat, lng: config.data.lon};
            MarkerService.addMarker(MyLatLng,"My Location",map);
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
        $http.get("http://ip-api.com/json/"+$scope.website).then(function(config){
            var websiteLatLng = {lat: config.data.lat, lng: config.data.lon};
            console.log(websiteLatLng);
            MarkerService.addMarker(websiteLatLng,$scope.website,map);

        },function(err){
            console.log("Error:",err);
        });

    }
});

app.service('MarkerService',function(){
    this.addMarker=function(latlong,title,map){
        console.log('adding marker',latlong);
        map.setCenter(latlong);
        map.setZoom(10);
        var marker=new google.maps.Marker({
            position: latlong,
            map: map,
            title: title
        });
        console.log(marker);
    }
});