angular.module ("storeFeaturehttp", ["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
       .when("/storefeaturehttp", {
           templateUrl: "views/storefeaturehttpview/list.html",
           controller: "storefeaturehttpCtrl"
       })
      .when("/storefeaturehttp/add", {
           templateUrl: "views/storefeaturehttpview/create.html",
           controller: "storefeaturehttpCtrl"
       })
      .when("/storefeaturehttp/:id", {
           templateUrl: "views/storefeaturehttpview/singleid.html",
           controller: "storefeaturehttpCtrl"
       })
       .when("/storefeaturehttp/:id/edit", {
           templateUrl: "views/storefeaturehttpview/edit.html",
           controller: "storefeaturehttpCtrl"
       })
});