angular.module('demobs', ['ngRoute', 'ngui'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/demo/view.html',
                controller: PagingCtrl,
                page:'paging'
            })
            .when('/home/:page', {
                templateUrl: '/demo/view.html',
                controller: PagingCtrl,
                page:'paging'
            });

        //$locationProvider.html5Mode(true);
    })
    .run(['$rootScope', '$route', function ($rootScope, $route) {

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.$pageName = document.title = $route.current.page;
            console.log('on root scope');
        });
    }])
    ;
;

angular.module('ngui', [
    'ngui-paging'
])
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
;
