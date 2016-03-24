/**
 * Created by administrator on 3/23/16.
 */

var app=angular.module("UIChallenge",[]);
app.controller('controller',function($scope){
    $scope.getMyLocation=function(){
        $.ajax({
            type : 'GET',
            url : 'http://ip-api.com/json/',
            success : function(response){
                $scope.data=response;
            }
        });
    }
});
