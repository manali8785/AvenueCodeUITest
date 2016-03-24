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
app.controller('controller',function($scope){

    $scope.getMyLocation=function(){
        console.log("getting my location...");
        $.ajax({
            type : 'GET',
            url : 'http://ip-api.com/json/',
            success : function(response){
                console.log('success function');
                $scope.data=response;
            }
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

    }
});
