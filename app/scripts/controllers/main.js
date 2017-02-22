'use strict';

/**
 * @ngdoc function
 * @name codemotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codemotionApp
 */
// angular.module('codemotionApp')
//    .controller('MainCtrl', function () {
//      this.awesomeThings = [
//        'HTML5 Boilerplate',
//        'AngularJS',
//        'Karma'
//      ];
//    });

angular.module('codemotionApp',
      [
         'ngSanitize',
         'com.2fdevs.videogular',
         'com.2fdevs.videogular.plugins.controls',
         'com.2fdevs.videogular.plugins.overlayplay',
         'com.2fdevs.videogular.plugins.poster'
      ]
   )
   .controller('MainCtrl',
      ['$scope', function ($scope) {
         this.config = {
            sources: [
               {src: $scope.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4'), type: 'video/mp4'},
               {src: $scope.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.webm'), type: 'video/webm'},
               {src: $scope.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.ogg'), type: 'video/ogg'}
            ],
            tracks: [
               {
                  src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                  kind: 'subtitles',
                  srclang: 'en',
                  label: 'English',
                  default: ''
               }
            ],
            theme: 'bower_components/videogular-themes-default/videogular.css',

            plugins: {
               poster: 'http://www.videogular.com/assets/images/videogular.png'
            }
         };
      }]
   );
